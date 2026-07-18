<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import { faqs } from '../data/faqs.js'
import { store } from '../data/store.js'

const router = useRouter()
const openIndex = ref(0)

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-light-blue-bg overflow-x-hidden">
    <NavBar />
    <main class="flex-1 pt-24 md:pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
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

        <div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div class="flex-1 min-w-0">
            <h1 class="text-primary-teal font-extrabold text-3xl md:text-4xl mb-3">
              Frequently Asked Questions
            </h1>
            <p class="text-body-text mb-8 max-w-xl leading-relaxed">
              Quick answers about pickup, pricing, hours, and how {{ store.name }} works in Uyo.
            </p>

            <div class="space-y-3">
              <div v-for="(faq, i) in faqs" :key="i" class="faq-item">
                <button
                  type="button"
                  class="w-full text-left px-5 sm:px-6 py-4 rounded-2xl font-semibold text-white flex items-center justify-between gap-4 transition-colors"
                  :class="openIndex === i ? 'bg-secondary-orange' : 'bg-primary-teal'"
                  :aria-expanded="openIndex === i"
                  @click="openIndex = openIndex === i ? -1 : i"
                >
                  <span class="text-sm sm:text-base">{{ faq.question }}</span>
                  <span class="text-xl shrink-0" aria-hidden="true">{{ openIndex === i ? '↑' : '↓' }}</span>
                </button>
                <div v-show="openIndex === i" class="px-5 sm:px-6 py-4 text-body-text bg-white/70 rounded-2xl mt-1.5 text-sm sm:text-base leading-relaxed">
                  {{ faq.answer }}
                </div>
              </div>
            </div>

            <p class="mt-10 text-body-text text-sm sm:text-base">
              Still need help?
              <RouterLink to="/contact" class="text-primary-teal font-semibold hover:underline">Contact us</RouterLink>
              or
              <a
                :href="store.scheduleWhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary-teal font-semibold hover:underline"
              >message us on WhatsApp</a>.
            </p>
          </div>

          <div class="lg:w-[40%] shrink-0">
            <div class="rounded-2xl overflow-hidden bg-gray-200 aspect-[4/5] max-w-md mx-auto lg:max-w-none lg:sticky lg:top-28">
              <img
                src="https://res.cloudinary.com/dep0qi07x/image/upload/f_auto/v1772024938/IMG_4082_bx21ke.heic"
                alt="Swank Laundry service"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
