<script setup>
import { RouterLink } from 'vue-router'
import { garmentsPricing, specialItemsPricing } from '../data/pricing.js'

const garmentsTeaser = garmentsPricing.slice(0, 5)
const specialTeaser = specialItemsPricing.slice(0, 4)
</script>

<template>
  <section id="pricing" class="py-20 px-4 sm:px-6 lg:px-8 bg-light-blue-bg">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-primary-teal font-extrabold text-3xl md:text-4xl mb-4 text-center">
        Our Pricing
      </h2>
      <p class="text-body-text text-center max-w-2xl mx-auto mb-12">
        Transparent rates for garments and special items. Visit us or call for orders.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div class="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
          <div class="px-6 py-4 bg-primary-teal/10 border-b border-gray-100">
            <h3 class="text-primary-teal font-bold text-lg">Garments</h3>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left min-w-[280px]">
              <thead>
                <tr class="border-b border-gray-200 bg-gray-50/80">
                  <th class="px-4 py-3 text-dark-text font-semibold">Item</th>
                  <th class="px-4 py-3 text-dark-text font-semibold text-right">Express (₦)</th>
                  <th class="px-4 py-3 text-dark-text font-semibold text-right">Standard (₦)</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, i) in garmentsTeaser"
                  :key="'g-' + i"
                  class="border-b border-gray-100 hover:bg-gray-50/50"
                >
                  <td class="px-4 py-3 text-body-text">{{ row.item }}</td>
                  <td class="px-4 py-3 text-body-text text-right">{{ row.express }}</td>
                  <td class="px-4 py-3 text-body-text text-right">{{ row.standard }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
          <div class="px-6 py-4 bg-primary-teal/10 border-b border-gray-100">
            <h3 class="text-primary-teal font-bold text-lg">Special Items</h3>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left min-w-[280px]">
              <thead>
                <tr class="border-b border-gray-200 bg-gray-50/80">
                  <th class="px-4 py-3 text-dark-text font-semibold">Item</th>
                  <th class="px-4 py-3 text-dark-text font-semibold text-right">Express (₦)</th>
                  <th class="px-4 py-3 text-dark-text font-semibold text-right">Standard (₦)</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, i) in specialTeaser"
                  :key="'s-' + i"
                  class="border-b border-gray-100 hover:bg-gray-50/50"
                >
                  <td class="px-4 py-3 text-body-text">{{ row.item }}</td>
                  <td class="px-4 py-3 text-body-text text-right">{{ row.express }}</td>
                  <td class="px-4 py-3 text-body-text text-right">{{ row.standard }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-10">
        <RouterLink
          to="/pricing"
          class="inline-block px-8 py-3 rounded-pill bg-secondary-orange text-white font-bold hover:scale-105 transition-transform"
        >
          View full price list
        </RouterLink>
      </div>
    </div>
  </section>
</template>
