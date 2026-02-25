<script setup>
import { ref, onMounted } from 'vue'
import { initNavBarAnimations } from '../composables/useAnimations'

const navRef = ref(null)
const hasScrolled = ref(false)
const menuOpen = ref(false)

const closeMenu = () => { menuOpen.value = false }

onMounted(() => {
  initNavBarAnimations(navRef)
  const handleScroll = () => {
    hasScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})
</script>

<template>
  <nav
    ref="navRef"
    class="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300"
    :class="{ 'shadow-md': hasScrolled }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 md:h-20">
        <a href="#home" class="flex items-center">
          <img src="/logo.png" alt="Swank Laundry" class="h-10 md:h-12 w-auto" />
        </a>
        <div class="hidden md:flex items-center gap-8">
          <a href="#home" class="text-dark-text hover:text-primary-teal font-semibold transition-colors">Home</a>
          <a href="#about" class="text-dark-text hover:text-primary-teal font-semibold transition-colors">About</a>
          <a href="#" class="text-dark-text hover:text-primary-teal font-semibold transition-colors flex items-center gap-1">
            Pages
            <span class="text-sm">▾</span>
          </a>
          <a
            href="#newsletter"
            class="px-6 py-2 rounded-pill border-2 border-secondary-orange text-primary-teal font-semibold hover:bg-secondary-orange hover:text-white transition-all hover:scale-105"
          >
            Contact
          </a>
        </div>
        <button
          class="md:hidden p-2 text-dark-text"
          aria-label="Menu"
          @click="menuOpen = !menuOpen"
        >
          <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-show="menuOpen" class="md:hidden bg-white border-t shadow-lg">
        <a href="#home" @click="closeMenu" class="block px-4 py-3 text-dark-text hover:bg-light-blue-bg">Home</a>
        <a href="#about" @click="closeMenu" class="block px-4 py-3 text-dark-text hover:bg-light-blue-bg">About</a>
        <a href="#" @click="closeMenu" class="block px-4 py-3 text-dark-text hover:bg-light-blue-bg">Pages</a>
        <a href="#newsletter" @click="closeMenu" class="block px-4 py-3 text-dark-text hover:bg-light-blue-bg">Contact</a>
      </div>
    </transition>
  </nav>
</template>
