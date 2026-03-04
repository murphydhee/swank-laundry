<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const SCHEDULE_IMAGE = 'https://res.cloudinary.com/dep0qi07x/image/upload/v1772631778/PHOTO-2026-03-04-14-37-05_y2zvoc.jpg'
const SCHEDULE_WHATSAPP_LINK = 'https://wa.link/6vpcdj'

const isOpen = ref(false)

function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) close()
}

function onEscape(e) {
  if (e.key === 'Escape') close()
}

watch(isOpen, (open) => {
  if (open) {
    document.addEventListener('keydown', onEscape)
  } else {
    document.removeEventListener('keydown', onEscape)
  }
})

onMounted(() => {
  const shown = sessionStorage.getItem('schedule-modal-shown')
  if (!shown) {
    setTimeout(() => {
      isOpen.value = true
      sessionStorage.setItem('schedule-modal-shown', '1')
    }, 1500)
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', onEscape)
})

defineExpose({ open, close })
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60"
        role="dialog"
        aria-modal="true"
        aria-labelledby="schedule-modal-title"
        @click.self="onBackdropClick"
      >
        <div
          class="relative bg-white rounded-2xl shadow-xl max-w-lg w-full overflow-hidden"
        >
          <button
            type="button"
            class="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-dark-text flex items-center justify-center shadow-md transition-colors"
            aria-label="Close"
            @click="close"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            :src="SCHEDULE_IMAGE"
            alt="Schedule a pickup with Swank Laundry"
            class="w-full h-auto object-cover max-h-[70vh]"
          />
          <div class="p-6 text-center">
            <h2 id="schedule-modal-title" class="text-dark-text font-bold text-xl mb-3">
              Schedule a pickup
            </h2>
            <a
              :href="SCHEDULE_WHATSAPP_LINK"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block w-full sm:w-auto px-8 py-3 rounded-pill bg-[#25D366] text-white font-bold hover:opacity-90 transition-opacity text-center"
            >
              Schedule now
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
