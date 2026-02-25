<script setup>
import { ref, onMounted } from 'vue'
import { initNewsletterAnimations } from '../composables/useAnimations'

const sectionRef = ref(null)

onMounted(() => initNewsletterAnimations(sectionRef))
</script>

<template>
  <section ref="sectionRef" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="newsletter-banner relative bg-[#F97316] rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center min-h-[400px] lg:min-h-[380px]">
        <!-- Decorative background shape (lighter orange curved/swirling) -->
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

        <!-- Left: text + buttons -->
        <div class="newsletter-content flex-1 p-10 lg:p-14 text-center lg:text-left relative z-10">
          <h2 class="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Make laundry day hassle-free with Swank Laundry
          </h2>
          <p class="text-white/90 text-lg mb-8 max-w-xl">
            Viverra a tellus tellus integer ornare. Et sollicitudin cras tellus nullam.
          </p>
          <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#"
              class="subscribe-btn inline-block px-8 py-3 rounded-xl bg-white text-dark-text font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact with us
            </a>
            <a
              href="#services"
              class="inline-block px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              view our services
            </a>
          </div>
        </div>

        <!-- Right: image - woman holding folded laundry -->
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
