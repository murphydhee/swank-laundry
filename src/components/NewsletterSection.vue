<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { initNewsletterAnimations } from '../composables/useAnimations'
import { store } from '../data/store.js'

const sectionRef = ref(null)

onMounted(() => initNewsletterAnimations(sectionRef))
</script>

<template>
  <section ref="sectionRef" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="newsletter-banner relative bg-[#F97316] rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center min-h-[400px] lg:min-h-[380px]">
        <div
          class="absolute right-0 top-0 w-full h-full pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div
            class="absolute -right-20 -top-20 w-96 h-96 rounded-full opacity-20"
            style="background: radial-gradient(circle, rgba(255,200,150,0.5) 0%, transparent 70%);"
          />
          <div
            class="absolute right-1/4 -bottom-10 w-80 h-80 rounded-full opacity-15"
            style="background: radial-gradient(circle, rgba(255,220,180,0.6) 0%, transparent 70%);"
          />
        </div>

        <div class="newsletter-content flex-1 p-10 lg:p-14 text-center lg:text-left relative z-10">
          <p class="text-white/90 font-semibold text-sm uppercase tracking-wide mb-3">
            Free Saturday pickup · Free delivery in Uyo
          </p>
          <h2 class="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Skip the laundry pile. We’ll pick it up.
          </h2>
          <p class="text-white/90 text-lg mb-8 max-w-xl">
            Book in minutes on WhatsApp — we collect, clean, and return fresh clothes to your door.
            Your weekend stays yours.
          </p>
          <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              :href="store.scheduleWhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              class="subscribe-btn inline-block px-8 py-3 rounded-xl bg-white text-dark-text font-bold hover:bg-gray-100 transition-colors"
            >
              Schedule a pickup
            </a>
            <RouterLink
              to="/services"
              class="inline-block px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              See our services
            </RouterLink>
          </div>
          <p class="mt-5 text-white/80 text-sm">
            Or call
            <a :href="store.phoneTel" class="font-semibold text-white underline underline-offset-2 hover:no-underline">
              {{ store.phone }}
            </a>
          </p>
        </div>

        <div class="flex-1 relative w-full lg:max-w-[50%] min-h-[320px] lg:min-h-[380px] flex items-center justify-center px-5 rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&q=80"
            alt="Happy customer with freshly folded laundry"
            class="relative z-10 h-[320px] lg:h-[420px] w-auto object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>
