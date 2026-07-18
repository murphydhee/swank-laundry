<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { initFaqAnimations } from '../composables/useAnimations'
import { faqs } from '../data/faqs.js'

const sectionRef = ref(null)
const openIndex = ref(0)
const previewFaqs = faqs.slice(0, 3)

onMounted(() => initFaqAnimations(sectionRef))
</script>

<template>
  <section ref="sectionRef" class="py-20 px-4 sm:px-6 lg:px-8 bg-light-blue-bg">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16">
      <div class="flex-1">
        <h2 class="text-primary-teal font-extrabold text-3xl md:text-4xl mb-8">
          Frequently Asked Questions
        </h2>
        <div class="space-y-4">
          <div
            v-for="(faq, i) in previewFaqs"
            :key="i"
            class="faq-item"
          >
            <button
              type="button"
              class="w-full text-left px-6 py-4 rounded-pill font-semibold text-white flex items-center justify-between transition-colors"
              :class="openIndex === i ? 'bg-secondary-orange' : 'bg-primary-teal'"
              @click="openIndex = openIndex === i ? -1 : i"
            >
              <span>{{ faq.question }}</span>
              <span class="text-xl">{{ openIndex === i ? '↑' : '↓' }}</span>
            </button>
            <transition name="slide-down">
              <div v-show="openIndex === i" class="overflow-hidden">
                <div class="px-6 py-4 text-body-text bg-white/50 rounded-b-2xl mt-1">
                  {{ faq.answer }}
                </div>
              </div>
            </transition>
          </div>
        </div>
        <RouterLink
          to="/faq"
          class="inline-flex mt-8 text-primary-teal font-bold hover:underline"
        >
          View all FAQs →
        </RouterLink>
      </div>
      <div class="faq-image flex-1 relative">
        <div
          class="absolute inset-0 bg-primary-teal/20 -z-10"
          style="border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;"
        />
        <div class="rounded-2xl overflow-hidden min-h-[350px] bg-gray-200">
          <img
            src="https://res.cloudinary.com/dep0qi07x/image/upload/f_auto/v1772024938/IMG_4082_bx21ke.heic"
            alt="Swank Laundry"
            class="w-full h-full min-h-[350px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.3s ease-out;
}
.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-down-enter-to,
.slide-down-leave-from {
  max-height: 300px;
  opacity: 1;
}
</style>
