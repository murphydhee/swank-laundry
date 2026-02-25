<script setup>
import { ref, onMounted } from 'vue'
import { initNofadingAnimations } from '../composables/useAnimations'

const sectionRef = ref(null)
const logos = ['Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum']

onMounted(() => initNofadingAnimations(sectionRef))
</script>

<template>
  <section ref="sectionRef" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row gap-12 mb-16">
        <div class="nofading-text flex-1">
          <h2 class="text-primary-teal font-extrabold text-3xl md:text-4xl mb-6">
            No Fading, Only Cleaning
          </h2>
          <p class="text-body-text">
            We use premium detergents and fabric care products to ensure your clothes stay vibrant and fresh. No fading, no damage — just clean, soft laundry delivered to your door.
          </p>
        </div>
        <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="nofading-card bg-card-bg rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all">
            <div class="w-16 h-16 rounded-full bg-secondary-orange flex items-center justify-center text-3xl mb-4">🧴</div>
            <h3 class="text-dark-text font-bold text-xl mb-2">Premium Perfume</h3>
            <p class="text-body-text">Fresh, long-lasting scent on every load.</p>
          </div>
          <div class="nofading-card bg-card-bg rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all">
            <div class="w-16 h-16 rounded-full bg-secondary-orange flex items-center justify-center text-3xl mb-4">🧺</div>
            <h3 class="text-dark-text font-bold text-xl mb-2">Trusted Detergent</h3>
            <p class="text-body-text">Quality products that protect your fabrics.</p>
          </div>
        </div>
      </div>
      <div class="logo-strip overflow-hidden rounded-pill bg-secondary-orange/90 py-6">
        <div class="logo-inner flex gap-10 w-max" style="will-change: transform;">
          <div v-for="(logo, i) in [...logos, ...logos]" :key="i" class="flex-shrink-0">
            <div class="bg-white rounded-xl px-10 py-4 text-dark-text font-semibold text-lg whitespace-nowrap">
              {{ logo }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
