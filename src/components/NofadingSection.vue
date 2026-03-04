<script setup>
import { ref, computed, onMounted } from 'vue'
import { initNofadingAnimations } from '../composables/useAnimations'

const sectionRef = ref(null)
const failedImageIndices = ref([])

const GALLERY_IMAGES = [
  'https://res.cloudinary.com/dep0qi07x/image/upload/v1772027632/IMG_9486_diu7by.jpg',
  'https://res.cloudinary.com/dep0qi07x/image/upload/v1772027631/IMG_9485_ufoy3v.jpg',
  'https://res.cloudinary.com/dep0qi07x/image/upload/v1772027626/IMG_4084_grgslr.heic',
  'https://res.cloudinary.com/dep0qi07x/image/upload/v1772027614/IMG_4081_l7jgyj.heic',
  'https://res.cloudinary.com/dep0qi07x/image/upload/v1772027617/IMG_4734_xgqadz.jpg',
  'https://res.cloudinary.com/dep0qi07x/image/upload/v1772027614/IMG_4081_l7jgyj.heic',
  'https://res.cloudinary.com/dep0qi07x/image/upload/v1772027609/IMG_8729_d7qnpu.heic',
  'https://res.cloudinary.com/dep0qi07x/image/upload/v1772027601/IMG_4736_uqkl21.jpg',
]

const stripImages = computed(() => [...GALLERY_IMAGES, ...GALLERY_IMAGES])

function markImageFailed(index) {
  if (!failedImageIndices.value.includes(index)) {
    failedImageIndices.value = [...failedImageIndices.value, index]
  }
}

onMounted(() => initNofadingAnimations(sectionRef))
</script>

<template>
  <section ref="sectionRef" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row gap-12 mb-8">
        <div class="nofading-text flex-1">
          <h2 class="text-primary-teal font-extrabold text-3xl md:text-4xl mb-6">
            No Fading, Only Cleaning
          </h2>
          <p class="text-body-text">
            We use premium detergents and fabric care products to ensure your clothes stay vibrant and fresh. No fading, no damage — just clean, soft laundry delivered to your door.
          </p>
        </div>
        <!-- <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div class="nofading-card bg-card-bg rounded-2xl p-10 md:p-12 hover:-translate-y-1 hover:shadow-lg transition-all">
            <div class="w-20 h-20 rounded-full bg-secondary-orange flex items-center justify-center text-4xl mb-6">🧴</div>
            <h3 class="text-dark-text font-bold text-2xl mb-3">Premium Perfume</h3>
            <p class="text-body-text text-lg">Fresh, long-lasting scent on every load.</p>
          </div>
          <div class="nofading-card bg-card-bg rounded-2xl p-10 md:p-12 hover:-translate-y-1 hover:shadow-lg transition-all">
            <div class="w-20 h-20 rounded-full bg-secondary-orange flex items-center justify-center text-4xl mb-6">🧺</div>
            <h3 class="text-dark-text font-bold text-2xl mb-3">Trusted Detergent</h3>
            <p class="text-body-text text-lg">Quality products that protect your fabrics.</p>
          </div>
        </div> -->
      </div>
      <div class="logo-strip">
        <div class="logo-inner flex gap-8 w-max items-stretch" style="will-change: transform;">
          <template v-for="(img, i) in stripImages" :key="i">
            <div
              v-if="!failedImageIndices.includes(i)"
              class="gallery-card flex-shrink-0 w-80 h-56 sm:w-96 sm:h-64 rounded-xl overflow-hidden bg-white shadow-md"
            >
              <img
                :src="img"
                alt=""
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                @error="markImageFailed(i)"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
