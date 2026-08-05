<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import SubscriptionSection from '../components/SubscriptionSection.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-light-blue-bg">
    <NavBar />
    <main class="flex-1 pt-24 md:pt-28 pb-16">
      <SubscriptionSection />
    </main>
    <Footer />
  </div>
</template>
