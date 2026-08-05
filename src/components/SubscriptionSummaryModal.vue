<script setup>
import { ref, computed, watch } from 'vue'
import { calculateLaundrySubscriptionCharge, formatNaira, garmentsPricing, specialItemsPricing } from '../data/pricing.js'
import { store } from '../data/store.js'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  selectedPlan: {
    type: Object,
    default: null,
  },
  selectedServiceType: {
    type: String,
    default: 'standard',
  },
  allPlans: {
    type: Array,
    default: () => [],
  }
})

const emit = defineEmits(['close', 'proceed', 'upgrade'])

const estimatedWeight = ref(0)
const hasAgreedToTerms = ref(false)

const allPricingItems = [...garmentsPricing, ...specialItemsPricing]

const specialtyItemNames = [
  'Senator', 'Kafta', 'Agbada', 'Duvet', 'Towel (Big)', 'Suit (2pcs)', 'Suit (3pcs)', 
  'Curtain (Light)', 'Curtain (Heavy)', 'Beaded Garment', 'Jacket', 'Sweater', 
  'Footwear', 'Overall', 'Track Suit', 'Bag / Purse', 'Blanket', 'Wedding Gown', 
  'Carpet (per sqm)', 'Box', 'Hat'
]

const specialtyPricingItems = allPricingItems.filter(item => specialtyItemNames.includes(item.item))

const selectedSpecialItems = ref([])
const selectedItemToAdd = ref('')
const quantityToAdd = ref(1)

const addItem = () => {
  if (!selectedItemToAdd.value) return
  const found = specialtyPricingItems.find(i => i.item === selectedItemToAdd.value)
  if (found) {
    selectedSpecialItems.value.push({
      item: found.item,
      quantity: quantityToAdd.value,
      baseItem: found
    })
    selectedItemToAdd.value = ''
    quantityToAdd.value = 1
  }
}

const removeItem = (index) => {
  selectedSpecialItems.value.splice(index, 1)
}

const specialtyCost = computed(() => {
  return selectedSpecialItems.value.reduce((total, selection) => {
    const priceStr = props.selectedServiceType === 'express' 
      ? selection.baseItem.express 
      : selection.baseItem.standard
      
    if (priceStr === '—') return total
    const price = parseInt(priceStr.replace(/,/g, ''), 10)
    return total + (price * selection.quantity)
  }, 0)
})

watch(() => props.isOpen, (newVal) => {
  if (newVal && props.selectedPlan) {
    // Reset defaults when opening
    estimatedWeight.value = props.selectedPlan.weightKg
    selectedSpecialItems.value = []
    selectedItemToAdd.value = ''
    quantityToAdd.value = 1
    hasAgreedToTerms.value = false
  }
})

const calculation = computed(() => {
  if (!props.selectedPlan) return null
  try {
    return calculateLaundrySubscriptionCharge({
      plan: props.selectedPlan,
      serviceType: props.selectedServiceType,
      actualEligibleWeightKg: estimatedWeight.value || 0,
      specialtyItemsTotal: specialtyCost.value || 0,
    })
  } catch (e) {
    return null
  }
})

// Upgrade logic
const recommendedUpgrade = computed(() => {
  if (!calculation.value || calculation.value.extraCharge === 0) return null
  
  // Find plans in the same category that have a higher weight limit
  const higherPlans = props.allPlans.filter(p => 
    p.category === props.selectedPlan.category && 
    p.weightKg > props.selectedPlan.weightKg
  )
  
  for (const nextPlan of higherPlans) {
    const nextPlanBasePrice = props.selectedServiceType === 'express' 
      ? nextPlan.expressPrice 
      : nextPlan.standardPrice

    // If the next plan base price is less than our current total charge (excluding specialty)
    const currentChargeWithoutSpecialty = calculation.value.planPrice + calculation.value.extraCharge
    
    if (nextPlanBasePrice <= currentChargeWithoutSpecialty) {
      const savings = currentChargeWithoutSpecialty - nextPlanBasePrice
      return {
        plan: nextPlan,
        savings,
      }
    }
  }
  
  return null
})

const handleUpgrade = () => {
  if (recommendedUpgrade.value) {
    emit('upgrade', {
      plan: recommendedUpgrade.value.plan,
      serviceType: props.selectedServiceType
    })
  }
}
const handleProceedClick = () => {
  if (!calculation.value) return
  const c = calculation.value
  
  let msg = `Hello Swank Laundry team! 🤖 Subby here.\n\n`
  msg += `A customer has just initiated a new subscription checkout with the following details:\n\n`
  msg += `*Plan*: ${props.selectedPlan.name}\n`
  msg += `*Service Speed*: ${props.selectedServiceType === 'express' ? 'Express' : 'Standard'}\n`
  msg += `*Estimated Weight*: ${c.actualEligibleWeightKg} kg\n\n`
  
  if (selectedSpecialItems.value.length > 0) {
    msg += `*Specialty Items Add-ons*:\n`
    selectedSpecialItems.value.forEach(i => {
      msg += `- ${i.quantity}x ${i.item}\n`
    })
    msg += `\n`
  }
  
  msg += `*Estimated Total*: ${formatNaira(c.totalCharge)}\n`
  
  const encoded = encodeURIComponent(msg)
  const phoneNum = store.phone.replace(/\D/g, '')
  
  window.open(`https://wa.me/${phoneNum}?text=${encoded}`, '_blank')
  emit('proceed', { calculation: c })
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto overflow-x-hidden flex flex-col relative animate-fade-in-up">
      <!-- Header -->
      <div class="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
        <h3 class="text-xl font-extrabold text-dark-text">Subscription Summary</h3>
        <button @click="emit('close')" class="text-gray-400 hover:text-gray-600 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <div class="p-6 flex-1" v-if="selectedPlan && calculation">
        <!-- Upgrade Recommendation Alert -->
        <div v-if="recommendedUpgrade" class="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 animate-pulse-slow">
          <div class="flex items-start">
            <svg class="w-5 h-5 text-green-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            <div>
              <h4 class="text-sm font-bold text-green-800">Recommendation</h4>
              <p class="text-xs text-green-700 mt-1">
                You can save <span class="font-bold">{{ formatNaira(recommendedUpgrade.savings) }}</span> by upgrading to <span class="font-bold">{{ recommendedUpgrade.plan.name }}</span>.
              </p>
              <button 
                @click="handleUpgrade"
                class="mt-3 text-xs font-bold bg-green-600 text-white px-3 py-1.5 rounded-full hover:bg-green-700 transition-colors"
              >
                Upgrade to {{ recommendedUpgrade.plan.name }}
              </button>
            </div>
          </div>
        </div>

        <h4 class="text-lg font-bold text-primary-teal mb-1">
          {{ selectedPlan.name }} ({{ selectedServiceType === 'express' ? 'Express' : 'Standard' }})
        </h4>
        <p class="text-sm text-body-text mb-6">Included weight: {{ selectedPlan.weightKg }} kg / month</p>

        <!-- Estimation Inputs -->
        <div class="space-y-4 mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
          <h5 class="text-xs font-bold text-dark-text uppercase tracking-wide">Estimate your bill</h5>
          
          <div>
            <label class="block text-xs font-semibold text-body-text mb-1">Estimated Monthly Weight (kg)</label>
            <input 
              type="number" 
              v-model.number="estimatedWeight"
              min="0"
              step="0.1"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal text-sm"
            />
          </div>

          <div>
            <div class="flex items-center gap-1 mb-1 relative group">
              <label class="block text-xs font-semibold text-body-text">Add Specialty Items</label>
              <svg class="w-4 h-4 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <!-- Tooltip -->
              <div class="absolute bottom-full left-0 mb-2 hidden w-64 bg-gray-800 text-white text-xs rounded p-2 shadow-lg group-hover:block z-10 transition-opacity">
                Specialty items like suits, agbada, duvets, or wedding gowns are not covered by the kg plan. Add them here.
                <div class="absolute top-full left-4 -mt-1 border-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
            
            <div class="flex gap-2 mb-3">
              <select 
                v-model="selectedItemToAdd"
                class="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal text-sm bg-white"
              >
                <option value="" disabled>Select an item</option>
                <option v-for="(i, idx) in specialtyPricingItems" :key="idx" :value="i.item">
                  {{ i.item }} ({{ selectedServiceType === 'express' ? i.express : i.standard }})
                </option>
              </select>
              
              <input 
                type="number" 
                v-model.number="quantityToAdd"
                min="1"
                class="w-16 px-2 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal text-sm text-center"
              />
              
              <button 
                type="button"
                @click="addItem"
                class="bg-primary-teal text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#4ab5ae] transition-colors"
              >
                Add
              </button>
            </div>
            
            <!-- List of added items -->
            <ul v-if="selectedSpecialItems.length > 0" class="space-y-2">
              <li v-for="(sel, index) in selectedSpecialItems" :key="index" class="flex justify-between items-center bg-white p-2 rounded border border-gray-100 text-xs">
                <span class="font-medium text-dark-text">{{ sel.quantity }}x {{ sel.item }}</span>
                <button @click="removeItem(index)" class="text-red-500 hover:text-red-700 p-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <!-- Breakdown -->
        <div class="space-y-3 text-sm text-dark-text border-t border-gray-100 pt-4 mb-6">
          <div class="flex justify-between">
            <span>Base Plan Price:</span>
            <span class="font-medium">{{ formatNaira(calculation.planPrice) }}</span>
          </div>
          
          <div class="flex justify-between" v-if="calculation.billableExtraWeightKg > 0">
            <span>Excess Weight ({{ calculation.billableExtraWeightKg }} kg @ {{ formatNaira(calculation.extraRate) }}/kg):</span>
            <span class="font-medium text-secondary-orange">+{{ formatNaira(calculation.extraCharge) }}</span>
          </div>

          <div class="flex justify-between" v-if="calculation.specialtyItemsTotal > 0">
            <span>Specialty Items:</span>
            <span class="font-medium">+{{ formatNaira(calculation.specialtyItemsTotal) }}</span>
          </div>
        </div>

        <!-- Total -->
        <div class="flex justify-between items-center border-t border-gray-100 pt-4 mb-6">
          <span class="font-bold text-lg text-dark-text">Estimated Total:</span>
          <span class="font-extrabold text-2xl text-primary-teal">{{ formatNaira(calculation.totalCharge) }}</span>
        </div>
        
        <!-- Terms Checkbox -->
        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input 
              id="terms" 
              type="checkbox" 
              v-model="hasAgreedToTerms"
              class="w-4 h-4 text-primary-teal border-gray-300 rounded focus:ring-primary-teal"
            >
          </div>
          <label for="terms" class="ml-2 text-xs text-body-text">
            I agree that specialty items (suits, duvets, etc.) are billed separately and do not count towards my kilogram allowance.
          </label>
        </div>

        <!-- Action -->
        <button 
          @click="handleProceedClick"
          :disabled="!hasAgreedToTerms"
          class="w-full py-3 rounded-pill font-bold transition-all"
          :class="hasAgreedToTerms ? 'bg-primary-teal text-white hover:bg-[#4ab5ae] hover:shadow-lg' : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-pulse-slow {
  animation: pulseSlow 3s infinite;
}

@keyframes pulseSlow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}
</style>
