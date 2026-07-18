<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from '../composables/useGsap'
import { initWhyChooseUsAnimations } from '../composables/useAnimations'

const sectionRef = ref(null)
let ctx

const leftFeatures = [
  'Free pick ups on Saturday',
  'Free doorstep delivery',
  'Express & standard service',
  'Premium detergents & perfume',
  'Careful fabric handling',
  'Open daily 09:00 AM – 07:00 PM',
]

const rightFeatures = [
  'Pickup & drop-off available',
  'Same-day service options',
  'Transparent pricing',
  'Expert laundry & dry cleaning',
  'Fresh, long-lasting scent',
  'Easy WhatsApp booking',
]

onMounted(() => {
  if (!sectionRef.value) return
  ctx = gsap.context(() => {
    initWhyChooseUsAnimations(sectionRef)
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section
    ref="sectionRef"
    id="why-choose-us"
    class="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FEF9E6]"
  >
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-start">
      <!-- Left -->
      <div class="why-left w-full lg:w-[40%] lg:max-w-md shrink-0">
        <h2 class="why-title text-dark-text font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-5 sm:mb-6 leading-tight">
          Why Choose Us?
        </h2>
        <p class="why-desc text-body-text text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
          Elevating your laundry experience with reliable pickup, careful cleaning, and delivery across Uyo.
          Discover convenience that fits your week — including free pickups on Saturday.
        </p>
        <RouterLink
          to="/contact"
          class="why-cta inline-block px-8 py-3.5 rounded-xl bg-[#FFD966] text-dark-text font-bold text-base hover:brightness-95 hover:scale-[1.02] transition-all"
        >
          Contact Us
        </RouterLink>
      </div>

      <!-- Right: two-column checklist -->
      <div class="why-features w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 sm:gap-y-6">
        <ul class="flex flex-col gap-5 sm:gap-6">
          <li
            v-for="(item, i) in leftFeatures"
            :key="'l-' + i"
            class="why-item flex items-center gap-3"
          >
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFD966]/35 text-[#E6B800]">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span class="text-dark-text font-medium text-base sm:text-lg">{{ item }}</span>
          </li>
        </ul>
        <ul class="flex flex-col gap-5 sm:gap-6">
          <li
            v-for="(item, i) in rightFeatures"
            :key="'r-' + i"
            class="why-item flex items-center gap-3"
          >
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFD966]/35 text-[#E6B800]">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span class="text-dark-text font-medium text-base sm:text-lg">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
