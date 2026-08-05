<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col items-center mb-10">
    <div class="bg-gray-100 p-1 rounded-pill inline-flex items-center relative">
      <button
        @click="$emit('update:modelValue', 'standard')"
        class="px-6 py-2 rounded-pill font-semibold text-sm transition-colors z-10 w-32"
        :class="modelValue === 'standard' ? 'text-white' : 'text-body-text hover:text-dark-text'"
      >
        Standard
      </button>
      <button
        @click="$emit('update:modelValue', 'express')"
        class="px-6 py-2 rounded-pill font-semibold text-sm transition-colors z-10 w-32"
        :class="modelValue === 'express' ? 'text-white' : 'text-body-text hover:text-dark-text'"
      >
        Express
      </button>

      <!-- Animated background for selected toggle -->
      <div 
        class="absolute top-1 bottom-1 w-32 rounded-pill bg-secondary-orange shadow-sm transition-transform duration-300 ease-in-out"
        :class="modelValue === 'standard' ? 'translate-x-0' : 'translate-x-full'"
      ></div>
    </div>
    
    <p class="text-sm mt-3 text-body-text transition-opacity duration-300">
      <template v-if="modelValue === 'standard'">
        <span class="font-medium text-dark-text">Standard:</span> Regular turnaround.
      </template>
      <template v-else>
        <span class="font-medium text-secondary-orange">Express:</span> Priority turnaround.
      </template>
    </p>
  </div>
</template>
