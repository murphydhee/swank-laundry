<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { initNavBarAnimations } from '../composables/useAnimations'

const SCHEDULE_LINK = 'https://wa.link/6vpcdj'

const navRef = ref(null)
const hasScrolled = ref(false)
const menuOpen = ref(false)

const closeMenu = () => { menuOpen.value = false }

const navLinks = [
  { label: 'Pricing', to: '/pricing' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'FAQs', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

function onScroll() {
  hasScrolled.value = window.scrollY > 20
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  initNavBarAnimations(navRef)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-5 pointer-events-none">
    <nav
      ref="navRef"
      class="pointer-events-auto mx-auto max-w-5xl flex items-center justify-between gap-3 rounded-full bg-white px-4 sm:px-6 py-2 sm:py-2.5 transition-shadow duration-300"
      :class="hasScrolled ? 'shadow-lg shadow-black/10' : 'shadow-md shadow-black/5'"
    >
      <RouterLink to="/" class="flex items-center shrink-0" @click="closeMenu">
        <img src="/logo.png" alt="Swank Laundry" class="h-12 sm:h-14 md:h-16 w-auto" />
      </RouterLink>

      <div class="hidden lg:flex items-center gap-6 xl:gap-8">
        <RouterLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="text-sm font-semibold text-dark-text/70 hover:text-primary-teal transition-colors"
        >
          {{ link.label }}
        </RouterLink>
      </div>

      <div class="flex items-center gap-2 sm:gap-3">
        <a
          :href="SCHEDULE_LINK"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary-teal pl-5 pr-1.5 py-1.5 text-sm font-bold text-white hover:brightness-95 transition-all"
        >
          Schedule a pick up
          <span class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary-teal">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </a>

        <button
          type="button"
          class="lg:hidden p-2 rounded-full text-dark-text hover:bg-light-blue-bg transition-colors"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
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
    </nav>

    <!-- Mobile menu panel -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="menuOpen"
        class="pointer-events-auto lg:hidden mx-auto max-w-5xl mt-2 rounded-3xl bg-white shadow-lg shadow-black/10 overflow-hidden"
      >
        <div class="flex flex-col py-2">
          <RouterLink
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            class="px-5 py-3.5 text-dark-text font-semibold hover:bg-light-blue-bg transition-colors"
            @click="closeMenu"
          >
            {{ link.label }}
          </RouterLink>
          <div class="px-4 py-3 border-t border-gray-100">
            <a
              :href="SCHEDULE_LINK"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2 w-full rounded-full bg-primary-teal px-5 py-3 text-sm font-bold text-white"
              @click="closeMenu"
            >
              Schedule a pick up
              <span class="flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary-teal">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
