<script setup>
import { computed } from 'vue'
import { formatNaira } from '../data/pricing.js'

const props = defineProps({
  plan: {
    type: Object,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['subscribe'])

const currentPrice = computed(() => {
  return props.serviceType === 'express' 
    ? props.plan.expressPrice 
    : props.plan.standardPrice
})

const currentExtraRate = computed(() => {
  return props.serviceType === 'express'
    ? props.plan.expressExtraPerKg
    : props.plan.standardExtraPerKg
})
</script>

<template>
  <div 
    class="relative bg-white rounded-2xl shadow-md border flex flex-col transition-all duration-300 hover:shadow-lg"
    :class="[
      isPopular ? 'border-primary-teal shadow-primary-teal/20 scale-100 lg:scale-105 z-10' : 'border-gray-100'
    ]"
  >
    <div v-if="isPopular" class="absolute -top-4 left-0 right-0 flex justify-center">
      <span class="bg-secondary-orange text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-sm">
        Most Popular
      </span>
    </div>
    
    <div class="p-6 md:p-8 flex-1 flex flex-col">
      <div class="mb-4">
        <h3 class="text-2xl font-bold text-primary-teal mb-2">{{ plan.name }}</h3>
        <p class="text-body-text text-sm h-10">{{ plan.description }}</p>
      </div>
      
      <div class="mb-6 flex items-baseline">
        <span class="text-3xl md:text-4xl font-extrabold text-dark-text">{{ formatNaira(currentPrice) }}</span>
        <span class="text-body-text ml-2">/month</span>
      </div>
      
      <div class="bg-card-bg rounded-lg p-4 mb-6">
        <p class="text-sm font-semibold text-dark-text mb-1">
          <svg class="w-4 h-4 inline-block mr-1 text-primary-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
          Included: {{ plan.weightKg }} kg
        </p>
        <p class="text-xs text-body-text">
          Additional weight: <span class="font-bold">{{ formatNaira(currentExtraRate) }}</span> per kg, billed in 0.5 kg increments.
        </p>
      </div>

      <div class="mb-6">
        <h4 class="text-xs font-bold text-dark-text uppercase tracking-wide mb-3">Plan Features</h4>
        <ul class="space-y-3">
          <li v-for="(feature, idx) in plan.features" :key="idx" class="flex items-start">
            <svg class="w-5 h-5 text-primary-teal mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-body-text text-sm">{{ feature }}</span>
          </li>
        </ul>
      </div>

      <div class="mt-auto pt-6 border-t border-gray-100">
        <p class="text-xs text-body-text mb-4">
          <span class="font-semibold text-dark-text">Recommended for:</span> {{ plan.recommendedFor }}
        </p>
        <button 
          @click="emit('subscribe', { plan, serviceType })"
          class="w-full py-3 rounded-pill font-bold transition-transform hover:scale-[1.02]"
          :class="isPopular ? 'bg-primary-teal text-white' : 'bg-gray-100 text-dark-text hover:bg-gray-200'"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>
