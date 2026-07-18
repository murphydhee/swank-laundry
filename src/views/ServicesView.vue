<script setup>
import { useRouter, RouterLink } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import ServiceIcon from '../components/ServiceIcon.vue'
import { services } from '../data/services.js'
import { store } from '../data/store.js'

const router = useRouter()

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-light-blue-bg overflow-x-hidden">
    <NavBar />
    <main class="flex-1 pt-24 md:pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
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

        <h1 class="text-dark-text font-extrabold text-3xl md:text-4xl mb-3">
          Our Services
        </h1>
        <p class="text-body-text mb-10 max-w-2xl leading-relaxed">
          From everyday laundry to dry cleaning, Saturday pickups, and free delivery across Uyo —
          {{ store.name }} covers the full cycle so you do not have to.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <article
            v-for="service in services"
            :key="service.id"
            class="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-black/5 flex gap-4 sm:gap-5"
          >
            <div
              class="shrink-0 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#D6F0F2] text-[#3D8B94]"
            >
              <ServiceIcon :id="service.id" />
            </div>
            <div class="min-w-0">
              <h2 class="text-dark-text font-bold text-lg mb-1.5">{{ service.label }}</h2>
              <p class="text-body-text text-sm sm:text-base leading-relaxed">
                {{ service.description }}
              </p>
            </div>
          </article>
        </div>

        <div class="mt-12 flex flex-wrap gap-3 sm:gap-4">
          <RouterLink
            to="/pricing"
            class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-teal text-white font-bold hover:brightness-95 transition-all"
          >
            View pricing
          </RouterLink>
          <a
            :href="store.scheduleWhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#FFD966] text-dark-text font-bold hover:brightness-95 transition-all"
          >
            Schedule pickup
          </a>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
