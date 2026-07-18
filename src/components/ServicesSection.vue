<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { gsap } from '../composables/useGsap'
import { initServicesAnimations } from '../composables/useAnimations'
import ServiceIcon from './ServiceIcon.vue'
import { services } from '../data/services.js'

const sectionRef = ref(null)
let ctx

onMounted(() => {
  if (!sectionRef.value) return
  ctx = gsap.context(() => {
    initServicesAnimations(sectionRef)
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section
    ref="sectionRef"
    class="services-section py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-light-blue-bg"
  >
    <div class="max-w-5xl mx-auto">
      <div class="bg-white rounded-[1.75rem] sm:rounded-[2rem] shadow-lg shadow-black/5 px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 md:gap-x-10 md:gap-y-14">
          <div
            v-for="service in services"
            :key="service.id"
            class="service-item group flex flex-col items-center text-center cursor-default"
          >
            <div
              class="service-icon mb-4 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#D6F0F2] text-[#3D8B94] transition-all duration-300 group-hover:bg-[#3D8B94] group-hover:text-white group-hover:scale-105"
            >
              <ServiceIcon :id="service.id" />
            </div>
            <p
              class="text-sm sm:text-base font-semibold text-dark-text leading-snug max-w-[9rem] sm:max-w-[10rem] transition-colors duration-300 group-hover:text-[#3D8B94]"
            >
              {{ service.label }}
            </p>
          </div>
        </div>
        <div class="mt-10 text-center">
          <RouterLink
            to="/services"
            class="inline-flex text-[#3D8B94] font-bold hover:underline"
          >
            Explore all services →
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
