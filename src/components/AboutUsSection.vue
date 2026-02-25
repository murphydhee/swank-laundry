<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from '../composables/useGsap'
import { initAboutUsAnimations } from '../composables/useAnimations'

const sectionRef = ref(null)
const statRef = ref(null)
const displayCount = ref(0)

const stackImages = [
  {
    src: 'https://res.cloudinary.com/dep0qi07x/image/upload/f_auto/v1772024953/IMG_4083_fjpihi.heic',
    alt: 'Folding laundry into basket',
  },
  {
    src: 'https://res.cloudinary.com/dep0qi07x/image/upload/f_auto/v1772024938/IMG_4082_bx21ke.heic',
    alt: 'Professional laundry service',
  },
]

onMounted(() => {
  initAboutUsAnimations(sectionRef)

  // Count-up animation when stat box enters view
  if (statRef.value) {
    const countObj = { value: 0 }
    gsap.to(countObj, {
      value: 800,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: statRef.value,
        start: 'top 85%',
      },
      onUpdate: () => {
        displayCount.value = Math.round(countObj.value)
      },
    })
  }
})
</script>

<template>
  <section ref="sectionRef" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <!-- Left column: text + stat box -->
        <div class="lg:col-span-4 about-us-text">
          <h2 class="text-dark-text font-extrabold text-3xl md:text-4xl leading-tight mb-6">
            About us beyond your expectations
          </h2>
          <p class="text-body-text mb-8 leading-relaxed">
            Ultrices venenatis diam dolor tortor. Leo tellus nunc hendrerit lacinia odio. Commodo facilisis enim nunc ut ullamcorper sociis non.
          </p>
          <div ref="statRef" class="about-us-stat bg-gray-100 rounded-2xl p-6 flex items-center gap-5">
            <div class="shrink-0 w-14 h-14 rounded-xl bg-dark-text/10 flex items-center justify-center">
              <svg
                class="w-7 h-7 text-dark-text"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <div>
              <div class="text-dark-text font-extrabold text-3xl sm:text-4xl">{{ displayCount }}+</div>
              <div class="text-body-text text-sm mt-1">Happy Customers per month</div>
            </div>
          </div>
        </div>

        <!-- Center column: main video -->
        <div class="lg:col-span-5 about-us-main-img">
          <div class="rounded-2xl overflow-hidden bg-gray-200 aspect-[4/5]">
            <video
              src="https://res.cloudinary.com/dep0qi07x/video/upload/v1772024964/IMG_4018_nprz4d.mov"
              class="w-full h-full object-cover"
              autoplay
              muted
              loop
              playsinline
            />
          </div>
        </div>

        <!-- Right column: two stacked images (desktop) / carousel (mobile & tablet) -->
        <div class="lg:col-span-3 about-us-stack">
          <!-- Mobile & tablet: horizontal carousel -->
          <div class="lg:hidden overflow-hidden rounded-2xl">
            <div class="about-us-carousel flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1">
              <div
                v-for="(img, i) in stackImages"
                :key="i"
                class="flex-shrink-0 w-[85vw] sm:w-[70vw] max-w-md snap-center"
              >
                <div class="rounded-2xl overflow-hidden bg-gray-200 aspect-[4/5]">
                  <img
                    :src="img.src"
                    :alt="img.alt"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Desktop: stacked layout -->
          <div class="hidden lg:flex flex-col gap-6">
            <div
              v-for="(img, i) in stackImages"
              :key="i"
              class="rounded-2xl overflow-hidden bg-gray-200 aspect-[4/5]"
            >
              <img
                :src="img.src"
                :alt="img.alt"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us-carousel {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.about-us-carousel::-webkit-scrollbar {
  display: none;
}
</style>
