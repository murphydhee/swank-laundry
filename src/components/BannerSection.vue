<script setup>
import { ref, onMounted } from 'vue'
import { initBannerAnimations } from '../composables/useAnimations'

const sectionRef = ref(null)

onMounted(() => initBannerAnimations(sectionRef))
</script>

<template>
  <section ref="sectionRef" class="relative bg-primary-teal min-h-[350px] flex items-center justify-center overflow-hidden">
    <div class="banner-glove absolute top-8 right-12 text-6xl opacity-80">🧤</div>
    <div class="banner-glove absolute bottom-8 left-12 text-5xl opacity-80">🧤👍</div>
    <div
      class="absolute top-4 left-8 w-24 h-24 bg-white/30 rounded-full"
      style="border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;"
    />
    <div
      class="absolute bottom-4 right-8 w-32 h-32 opacity-60"
      style="background-image: radial-gradient(circle, rgba(0,0,0,0.15) 2px, transparent 2px); background-size: 12px 12px;"
    />
    <div class="relative z-10 text-center px-4 max-w-3xl">
      <h2 class="banner-title text-white font-extrabold text-3xl md:text-4xl mb-4">
        Laundry Solutions For A Busy Life
      </h2>
      <p class="text-white/90 mb-8">
        We take the hassle out of laundry so you can spend more time on what you love. Quality service, every time.
      </p>
      <a
        href="#"
        class="inline-block px-8 py-3 rounded-pill bg-white text-secondary-orange font-bold border-2 border-secondary-orange hover:scale-105 transition-transform"
      >
        Learn More
      </a>
    </div>
  </section>
</template>
