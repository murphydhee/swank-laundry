<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from '../composables/useGsap'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import { store, directionsUrl, osmEmbedUrl } from '../data/store.js'

const router = useRouter()
const pageRef = ref(null)
let ctx

function goBack() {
  router.push('/')
}

onMounted(() => {
  if (!pageRef.value) return
  ctx = gsap.context(() => {
    gsap.fromTo(
      '.contact-info > *',
      { y: 24, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.1, ease: 'power2.out' },
    )
    gsap.fromTo(
      '.contact-map',
      { x: 40, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.7, delay: 0.2, ease: 'power2.out' },
    )
  }, pageRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <div ref="pageRef" class="min-h-screen flex flex-col bg-white overflow-x-hidden">
    <NavBar />
    <main class="flex-1 pt-24 md:pt-28 pb-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <button
          type="button"
          class="flex items-center gap-2 text-body-text hover:text-primary-teal font-semibold mb-8 transition-colors"
          @click="goBack"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </button>
      </div>

      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-stretch">
          <div class="contact-info flex flex-col justify-center py-4 lg:py-8">
            <h1 class="text-dark-text font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-5 leading-tight">
              {{ store.name }}
            </h1>

            <p class="flex items-start gap-2 text-body-text text-base sm:text-lg mb-8 max-w-md">
              <svg class="w-5 h-5 mt-0.5 shrink-0 text-dark-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>{{ store.address }}</span>
            </p>

            <div class="flex flex-wrap gap-3 sm:gap-4 mb-10">
              <a
                :href="directionsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FFD966] text-dark-text font-bold text-sm sm:text-base hover:brightness-95 transition-all"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Get Direction
              </a>
              <a
                :href="store.phoneTel"
                class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-dark-text/80 text-dark-text font-bold text-sm sm:text-base hover:bg-gray-50 transition-all"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            </div>

            <div class="flex flex-wrap items-center gap-6 sm:gap-8 text-sm sm:text-base">
              <div class="flex items-center gap-2 text-dark-text">
                <svg class="w-5 h-5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M10 1.5l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.77l-4.78 2.51.91-5.32L2.27 7.12l5.34-.78L10 1.5z" />
                </svg>
                <span><strong class="font-bold">{{ store.rating }}</strong> Average Rating</span>
              </div>
              <div class="flex items-center gap-2 text-body-text">
                <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-semibold text-dark-text">{{ store.hours }}</span>
              </div>
            </div>
          </div>

          <!-- Map with pinned location (OSM marker at store lat/lng) -->
          <div class="contact-map relative min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] rounded-2xl overflow-hidden bg-gray-100 shadow-md">
            <iframe
              :src="osmEmbedUrl"
              class="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
              title="Swank Laundry location on map"
            />

            <div class="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-sm z-10">
              <div class="flex items-center gap-3 bg-white rounded-2xl shadow-lg p-3 sm:p-4">
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-dark-text">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 7h18v12a1 1 0 01-1 1H4a1 1 0 01-1-1V7z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 7l9-4 9 4" />
                  </svg>
                </div>
                <div class="min-w-0 flex-1">
                  <p class="text-dark-text font-bold text-sm sm:text-base truncate">{{ store.name }}</p>
                  <p class="text-body-text text-xs sm:text-sm leading-snug">{{ store.address }}</p>
                </div>
                <a
                  :href="directionsUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFD966] text-dark-text hover:brightness-95 transition-all"
                  aria-label="Get directions"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
