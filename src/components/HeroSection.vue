<script setup>
import { onMounted } from 'vue'
import { initHeroAnimations } from '../composables/useAnimations'

onMounted(() => initHeroAnimations())
</script>

<template>
  <section class="min-h-screen bg-light-blue-bg flex flex-col md:flex-row items-center justify-between px-6 sm:px-6 lg:px-8 pt-24 md:pt-0">
    <div class="hero-left flex-1 max-w-2xl mb-12 md:mb-0 md:pr-12 relative">
      <div
        class="dot-grid absolute -top-4 -left-4 w-[60px] h-[120px] opacity-60"
        style="background-image: radial-gradient(circle, #F5A623 3px, transparent 3px); background-size: 20px 24px;"
      ></div>
      <h1
        class="text-primary-teal font-extrabold leading-tight mb-6"
        style="font-size: clamp(3rem, 6vw, 5rem); font-weight: 900;"
      >
        WE DO LAUNDRY FOR YOU
      </h1>
      <p class="text-body-text text-lg mb-8 max-w-md">
        Save time and energy with our premium laundry services. We pick up, wash, fold, and deliver — so you can focus on what matters.
      </p>
      <div class="flex flex-wrap gap-4">
        <a
          href="#"
          class="px-8 py-3 rounded-pill bg-secondary-orange text-white font-bold hover:scale-105 transition-transform"
        >
          Get Started
        </a>
        <a
          href="#services"
          class="px-8 py-3 rounded-pill bg-primary-teal text-white font-bold hover:scale-105 transition-transform"
        >
          Learn More
        </a>
      </div>
    </div>
    <div class="hero-right flex-1 max-w-xl relative">
      <div class="relative">
        <div
          class="absolute -z-10 w-full h-full bg-primary-teal/30 rounded-2xl blur-2xl"
          style="border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: scale(1.2);"
        ></div>
        <div class="bg-primary-teal/20 rounded-2xl min-h-[500px] relative overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center text-8xl opacity-30">🧺</div>
          <div
            class="badge absolute top-8 left-8 bg-white rounded-pill px-4 py-3 shadow-lg flex items-center gap-3"
          >
            <div class="w-12 h-12 rounded-full bg-secondary-orange flex items-center justify-center text-xl">🚚</div>
            <div>
              <div class="font-bold text-dark-text">Free Delivery</div>
              <div class="text-sm text-body-text">We come to you</div>
            </div>
          </div>
          <div
            class="badge absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-pill px-4 py-3 shadow-lg flex items-center gap-3"
          >
            <div class="w-12 h-12 rounded-full bg-secondary-orange flex items-center justify-center text-xl">🕐</div>
            <div>
              <div class="font-bold text-dark-text">Open 24 Hours</div>
              <div class="text-sm text-body-text">Anytime you need us</div>
            </div>
          </div>
          <div
            class="badge absolute bottom-8 left-8 bg-white rounded-pill px-4 py-3 shadow-lg flex items-center gap-3"
          >
            <div class="w-12 h-12 rounded-full bg-secondary-orange flex items-center justify-center text-xl">🛡️</div>
            <div>
              <div class="font-bold text-dark-text">Safety Guaranteed</div>
              <div class="text-sm text-body-text">Your clothes are safe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>