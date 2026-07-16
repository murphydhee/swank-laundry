<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from '../composables/useGsap'
import { initHeroAnimations } from '../composables/useAnimations'

const SCHEDULE_LINK = 'https://wa.link/6vpcdj'
const PHONE = '+234 814 341 7479'
const PHONE_TEL = 'tel:+2348143417479'

const sectionRef = ref(null)
const carouselInner = ref(null)

// Laundry imagery styled like the reference hero carousel
const carouselImages = [
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80',
]

const stripImages = computed(() => [...carouselImages, ...carouselImages])

let ctx
let carouselTween

onMounted(() => {
  initHeroAnimations(sectionRef)

  if (!carouselInner.value) return
  ctx = gsap.context(() => {
    carouselTween = gsap.to(carouselInner.value, {
      x: '-50%',
      duration: 32,
      ease: 'none',
      repeat: -1,
    })
  }, sectionRef.value)
})

onUnmounted(() => {
  carouselTween?.kill()
  ctx?.revert()
})
</script>

<template>
  <section
    ref="sectionRef"
    class="relative bg-light-blue-bg flex flex-col"
  >
    <div class="flex flex-col items-center text-center px-4 sm:px-6 pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-10">
      <a
        :href="PHONE_TEL"
        class="hero-phone inline-flex items-center gap-2 rounded-full border border-primary-teal/40 bg-white/70 px-4 py-2 text-sm font-semibold text-primary-teal mb-6 sm:mb-8 hover:bg-white transition-colors"
      >
        <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        {{ PHONE }}
      </a>

      <h1
        class="hero-title text-dark-text font-extrabold leading-[1.15] max-w-4xl mx-auto mb-5 sm:mb-6"
        style="font-size: clamp(1.85rem, 5.2vw, 3.75rem);"
      >
        Premium Laundry &amp; Dry Cleaning Service in Uyo—
        <span class="text-primary-teal">Fast &amp; Flawless!</span>
      </h1>

      <p class="hero-subtitle text-body-text text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
        Swank Laundry offers professional laundry services in Uyo with free pickup and delivery.
        Schedule a pickup for clean, fresh clothes without the hassle.
      </p>

      <!-- CTA: keep above carousel, never clipped -->
      <a
        :href="SCHEDULE_LINK"
        target="_blank"
        rel="noopener noreferrer"
        class="hero-cta relative z-20 inline-flex items-center gap-3 rounded-full bg-primary-teal pl-7 pr-2 py-2.5 text-base sm:text-lg font-bold text-white shadow-lg shadow-primary-teal/25 hover:brightness-95 hover:scale-[1.02] transition-all"
      >
        Schedule a pick up
        <span class="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-primary-teal shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </a>
    </div>

    <!-- Full-bleed moving carousel matching reference card size -->
    <div class="hero-carousel relative z-10 w-full overflow-hidden pb-8 sm:pb-12 mt-2 sm:mt-4">
      <div
        ref="carouselInner"
        class="flex gap-4 sm:gap-5 w-max will-change-transform"
        style="margin-left: -6%;"
      >
        <div
          v-for="(img, i) in stripImages"
          :key="i"
          class="flex-shrink-0 w-[220px] h-[180px] sm:w-[280px] sm:h-[230px] md:w-[320px] md:h-[260px] rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden bg-gray-100 shadow-md"
        >
          <img
            :src="img"
            alt=""
            class="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
</template>
