<script setup>
import { ref, computed } from 'vue'
import { laundrySubscriptionPlans } from '../data/pricing.js'
import SubscriptionCategoryTabs from './SubscriptionCategoryTabs.vue'
import SubscriptionSpeedToggle from './SubscriptionSpeedToggle.vue'
import SubscriptionPlanCard from './SubscriptionPlanCard.vue'
import SubscriptionDisclaimer from './SubscriptionDisclaimer.vue'
import SubscriptionSummaryModal from './SubscriptionSummaryModal.vue'

const activeCategory = ref('student')
const activeServiceType = ref('standard')

const filteredPlans = computed(() => {
  return laundrySubscriptionPlans.filter(p => p.category === activeCategory.value)
})

// Highlight the second plan in each category as "Most Popular" (based on instructions: Student Plus, Family Essential, Business Starter)
const isPopular = (planId) => {
  const popularIds = ['student-plus', 'family-essential', 'business-starter']
  return popularIds.includes(planId)
}

// Modal State
const isModalOpen = ref(false)
const selectedPlan = ref(null)

const openModal = ({ plan }) => {
  selectedPlan.value = plan
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    selectedPlan.value = null
  }, 300)
}

const handleUpgrade = ({ plan, serviceType }) => {
  activeServiceType.value = serviceType
  selectedPlan.value = plan
}

const handleProceed = ({ calculation }) => {
  // In a real application, we would route to the checkout flow with calculation data
  console.log('Proceeding to checkout with:', calculation)
  alert(`Checkout initiated for ${calculation.planId} (${calculation.serviceType}). Total: ₦${calculation.totalCharge}`)
  closeModal()
}
</script>

<template>
  <section id="subscriptions" class="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-0">
    <div class="max-w-7xl mx-auto relative">
      <div class="text-center mb-12">
        <h2 class="text-primary-teal font-extrabold text-3xl md:text-4xl mb-4">
          Laundry plans for every lifestyle
        </h2>
        <p class="text-body-text max-w-2xl mx-auto">
          Choose a monthly plan based on how much laundry you generate. Every plan includes washing, drying, folding and basic ironing for eligible everyday items.
        </p>
      </div>

      <SubscriptionCategoryTabs v-model="activeCategory" />
      <SubscriptionSpeedToggle v-model="activeServiceType" />

      <!-- Plans Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
        <SubscriptionPlanCard
          v-for="plan in filteredPlans"
          :key="plan.id"
          :plan="plan"
          :service-type="activeServiceType"
          :is-popular="isPopular(plan.id)"
          @subscribe="openModal"
        />
      </div>

      <SubscriptionDisclaimer />
    </div>

    <!-- Teleport modal outside of the stacking context if Vue version allows, otherwise it will sit here -->
    <SubscriptionSummaryModal
      :is-open="isModalOpen"
      :selected-plan="selectedPlan"
      :selected-service-type="activeServiceType"
      :all-plans="laundrySubscriptionPlans"
      @close="closeModal"
      @upgrade="handleUpgrade"
      @proceed="handleProceed"
    />
  </section>
</template>
