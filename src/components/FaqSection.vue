<script setup>
import { ref, onMounted } from 'vue'
import { initFaqAnimations } from '../composables/useAnimations'

const sectionRef = ref(null)
const openIndex = ref(0)

const faqs = [
  {
    question: 'How do I schedule a laundry pickup?',
    answer: 'Simply visit our website or give us a call. Choose your preferred date and time, and we\'ll come to your door to collect your laundry. You can also set up recurring pickups for added convenience.',
  },
  {
    question: 'How to change my subscription plan?',
    answer: 'Log into your account and go to the Subscription section. From there, you can upgrade, downgrade, or pause your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and digital wallets. You can also pay via bank transfer for larger orders. All payments are secure and encrypted.',
  },
]

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
            v-for="(faq, i) in faqs"
            :key="i"
            class="faq-item"
          >
            <button
              @click="openIndex = openIndex === i ? -1 : i"
              class="w-full text-left px-6 py-4 rounded-pill font-semibold text-white flex items-center justify-between transition-colors"
              :class="openIndex === i ? 'bg-secondary-orange' : 'bg-primary-teal'"
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
      </div>
      <div class="faq-image flex-1 relative">
        <div
          class="absolute inset-0 bg-primary-teal/20 -z-10"
          style="border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;"
        />
        <div class="bg-primary-teal/30 rounded-2xl min-h-[350px] flex items-center justify-center text-8xl">
          🧼
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
