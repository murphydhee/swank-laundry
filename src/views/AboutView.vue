<script setup>
import { useRouter } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import AboutUsSection from '../components/AboutUsSection.vue'
import { store } from '../data/store.js'

const router = useRouter()
const SCHEDULE_LINK = store.scheduleWhatsApp

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white overflow-x-hidden">
    <NavBar />
    <main class="flex-1 pt-24 md:pt-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          class="flex items-center gap-2 text-body-text hover:text-primary-teal font-semibold mb-6 transition-colors"
          @click="goBack"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </button>

        <div class="mb-4 max-w-2xl">
          <p class="text-primary-teal font-semibold text-sm uppercase tracking-wide mb-2">About</p>
          <h1 class="text-dark-text font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Laundry done right in Uyo
          </h1>
          <p class="text-body-text text-base sm:text-lg leading-relaxed">
            {{ store.name }} is your neighbourhood laundry on {{ store.address }}.
            We combine careful cleaning, reliable Saturday pickups, and free delivery so looking fresh fits your week.
          </p>
        </div>
      </div>

      <AboutUsSection />

      <section class="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-light-blue-bg">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div>
            <h2 class="text-dark-text font-extrabold text-xl mb-3">Our promise</h2>
            <p class="text-body-text leading-relaxed">
              Every load is sorted and handled with care — from everyday wash & fold to dry cleaning for your best outfits.
            </p>
          </div>
          <div>
            <h2 class="text-dark-text font-extrabold text-xl mb-3">Hours & location</h2>
            <p class="text-body-text leading-relaxed mb-2">{{ store.hours }}</p>
            <p class="text-body-text leading-relaxed">{{ store.address }}</p>
          </div>
          <div>
            <h2 class="text-dark-text font-extrabold text-xl mb-3">Ready to book?</h2>
            <p class="text-body-text leading-relaxed mb-5">
              Message us on WhatsApp to schedule a pickup, or call {{ store.phone }}.
            </p>
            <a
              :href="SCHEDULE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#FFD966] text-dark-text font-bold hover:brightness-95 transition-all"
            >
              Schedule now
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
