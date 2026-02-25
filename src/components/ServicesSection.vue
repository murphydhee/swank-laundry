<script setup>
import { ref, onMounted } from 'vue'
import { initServicesAnimations } from '../composables/useAnimations'

const sectionRef = ref(null)
const services = [
  {
    title: 'Quick Wash',
    color: 'bg-[#F97316]',
    icon: 'quick-wash',
    text: 'Facilisi senectus vulputate pharetra tempor. Nunc imperdiet pretium pharetra in eget.',
  },
  {
    title: 'Fresh Press',
    color: 'bg-[#FACC15]',
    icon: 'fresh-press',
    text: 'Convallis erat aenean risus nisi. Facilisis auctor magna adipiscing id purus.',
  },
  {
    title: 'Stain Removal',
    color: 'bg-[#2563EB]',
    icon: 'stain-removal',
    text: 'Aliquam sem eu id cursus ipsum et. Nisl est cras malesuada sagittis sapien.',
  },
]

onMounted(() => initServicesAnimations(sectionRef))
</script>

<template>
  <section ref="sectionRef" class="services-section py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Header row: heading + CTA button -->
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-16">
        <h2 class="text-dark-text font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-xl">
          Expert laundry services<br />
          <span class="text-dark-text">delivered fresh</span>
        </h2>
        <a
          href="#"
          class="shrink-0 px-6 py-3 rounded-xl bg-[#F97316] text-white font-semibold hover:bg-[#EA580C] transition-colors"
        >
          Browse All Service
        </a>
      </div>

      <!-- Service cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
        <div
          v-for="(service, i) in services"
          :key="i"
          class="service-card p-6 lg:p-8"
        >
          <h3 class="text-dark-text font-bold text-2xl lg:text-3xl mb-6">{{ service.title }}</h3>
          <div
            :class="[service.color, 'w-full aspect-square max-w-[220px] mx-auto rounded-xl flex items-center justify-center mb-8']"
          >
            <!-- Quick Wash: t-shirt above laundry basin with bubbles -->
            <svg
              v-if="service.icon === 'quick-wash'"
              class="w-20 h-20 lg:w-24 lg:h-24 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 48 48"
            >
              <!-- T-shirt -->
              <path d="M24 8v8l-6 4v12h12V20l-6-4V8z" />
              <path d="M18 12h12" />
              <!-- Basin -->
              <path d="M10 28h28v6H10v-6z" />
              <!-- Bubbles -->
              <circle cx="16" cy="32" r="2" fill="currentColor" stroke="none" />
              <circle cx="24" cy="34" r="2" fill="currentColor" stroke="none" />
              <circle cx="32" cy="32" r="2" fill="currentColor" stroke="none" />
            </svg>
            <!-- Fresh Press: iron -->
            <svg
              v-else-if="service.icon === 'fresh-press'"
              class="w-20 h-20 lg:w-24 lg:h-24 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 48 48"
            >
              <!-- Iron body -->
              <path d="M8 14h32l-4 12H12L8 14z" />
              <path d="M8 26v8h32v-8H8z" />
              <!-- Handle -->
              <path d="M16 14V8a4 4 0 018 0v6" />
            </svg>
            <!-- Stain Removal: t-shirt with stain/splat -->
            <svg
              v-else-if="service.icon === 'stain-removal'"
              class="w-20 h-20 lg:w-24 lg:h-24 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 48 48"
            >
              <!-- T-shirt outline -->
              <path d="M24 6v10l-8 5v17h16V21l-8-5V6z" />
              <path d="M16 10h16" />
              <!-- Stain splat -->
              <ellipse cx="24" cy="16" rx="4" ry="5" fill="currentColor" stroke="none" opacity="0.85" />
            </svg>
          </div>
          <p class="text-body-text text-lg leading-relaxed">{{ service.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
