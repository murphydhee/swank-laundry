<script setup>
import { ref, onMounted } from 'vue'
import { initTiredAnimations } from '../composables/useAnimations'

const sectionRef = ref(null)

onMounted(() => initTiredAnimations(sectionRef))
</script>

<template>
  <section ref="sectionRef" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">
      <div class="tired-image flex-1 relative order-2 md:order-1">
        <div
          class="absolute inset-0 bg-light-blue-bg -z-10"
          style="border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;"
        />
        <div class="bg-primary-teal/20 rounded-2xl min-h-[400px] flex items-center justify-center text-8xl">
          🧺
        </div>
      </div>
      <div class="tired-content flex-1 order-1 md:order-2">
        <h2 class="text-primary-teal font-extrabold text-3xl md:text-4xl mb-6">
          Getting Tired With Your Laundry?
        </h2>
        <p class="text-body-text mb-4">
          We know how exhausting it can be to keep up with laundry. Between work, family, and life — who has time to sort, wash, dry, and fold?
        </p>
        <p class="text-body-text mb-8">
          Let us handle it. Our team picks up your laundry, cleans it with care, and delivers it back fresh and folded. One less thing on your plate.
        </p>
        <a
          href="#"
          class="inline-block px-8 py-3 rounded-pill bg-secondary-orange text-white font-bold hover:scale-105 transition-transform"
        >
          Call Us Now
        </a>
      </div>
    </div>
  </section>
</template>
