<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  }
})

defineEmits(['update:modelValue'])

const categories = [
  { id: 'student', label: 'Student' },
  { id: 'family', label: 'Family' },
  { id: 'enterprise', label: 'Enterprise' }
]
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2 mb-8">
    <button
      v-for="category in categories"
      :key="category.id"
      @click="$emit('update:modelValue', category.id)"
      class="px-6 py-2 rounded-pill font-bold transition-all border-2"
      :class="[
        modelValue === category.id
          ? 'bg-primary-teal border-primary-teal text-white shadow-md'
          : 'bg-white border-gray-200 text-body-text hover:border-primary-teal hover:text-primary-teal'
      ]"
    >
      {{ category.label }}
    </button>
  </div>
</template>
