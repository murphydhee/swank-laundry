<script setup>
import { ref, onMounted } from 'vue'
import { initAboutUsAnimations } from '../composables/useAnimations'

const sectionRef = ref(null)

onMounted(() => initAboutUsAnimations(sectionRef))
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
          <div class="about-us-stat bg-gray-100 rounded-2xl p-6 flex items-center gap-5">
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
              <div class="text-dark-text font-extrabold text-3xl sm:text-4xl">800+</div>
              <div class="text-body-text text-sm mt-1">Happy Customers per month</div>
            </div>
          </div>
        </div>

        <!-- Center column: main image -->
        <div class="lg:col-span-5 about-us-main-img">
          <div class="rounded-2xl overflow-hidden bg-gray-200 aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80"
              alt="Freshly folded laundry"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Right column: two stacked images -->
        <div class="lg:col-span-3 flex flex-col gap-6 about-us-stack">
          <div class="rounded-2xl overflow-hidden bg-gray-200 aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=400&q=80"
              alt="Folding laundry into basket"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="rounded-2xl overflow-hidden bg-gray-200 aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
              alt="Professional laundry service"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
