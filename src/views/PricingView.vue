<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import { garmentsPricing, specialItemsPricing } from '../data/pricing.js'

const router = useRouter()
const searchQuery = ref('')

const allRows = computed(() => [
  ...garmentsPricing.map((r) => ({ ...r, category: 'Garments' })),
  ...specialItemsPricing.map((r) => ({ ...r, category: 'Special Items' })),
])

const filteredRows = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return allRows.value
  return allRows.value.filter((row) => row.item.toLowerCase().includes(q))
})

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-light-blue-bg">
    <NavBar />
    <main class="flex-1 pt-24 md:pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl mx-auto">
        <button
          type="button"
          class="flex items-center gap-2 text-body-text hover:text-primary-teal font-semibold mb-8 transition-colors"
          @click="goBack"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </button>
        <h1 class="text-primary-teal font-extrabold text-3xl md:text-4xl mb-2">
          Full Price List
        </h1>
        <p class="text-body-text mb-8">
          Search by item name to find prices. All amounts in Naira (₦).
        </p>

        <div class="mb-6">
          <label for="pricing-search" class="sr-only">Search items</label>
          <div class="relative">
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-body-text pointer-events-none">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              id="pricing-search"
              v-model="searchQuery"
              type="search"
              placeholder="Search by item (e.g. Shirt, Towel, Suit…)"
              class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-dark-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-teal focus:border-transparent"
              autocomplete="off"
            />
            <button
              v-if="searchQuery"
              type="button"
              class="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-body-text hover:text-dark-text"
              aria-label="Clear search"
              @click="searchQuery = ''"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div class="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
          <div class="overflow-x-auto">
            <table class="w-full text-left min-w-[320px]">
              <thead>
                <tr class="border-b border-gray-200 bg-primary-teal/10">
                  <th class="px-4 py-3 text-dark-text font-semibold">Category</th>
                  <th class="px-4 py-3 text-dark-text font-semibold">Item</th>
                  <th class="px-4 py-3 text-dark-text font-semibold text-right">Express (₦)</th>
                  <th class="px-4 py-3 text-dark-text font-semibold text-right">Standard (₦)</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, i) in filteredRows"
                  :key="row.category + '-' + row.item + '-' + i"
                  class="border-b border-gray-100 hover:bg-gray-50/50"
                >
                  <td class="px-4 py-3 text-body-text">{{ row.category }}</td>
                  <td class="px-4 py-3 text-dark-text font-medium">{{ row.item }}</td>
                  <td class="px-4 py-3 text-body-text text-right">{{ row.express }}</td>
                  <td class="px-4 py-3 text-body-text text-right">{{ row.standard }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p v-if="filteredRows.length === 0" class="px-4 py-8 text-center text-body-text">
            No items match "{{ searchQuery }}". Try a different search.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
