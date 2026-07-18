<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <!-- Dry Cleaning -->
  <svg
    v-if="id === 'dry-cleaning'"
    class="w-8 h-8 sm:w-9 sm:h-9"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M8 6l2-2h4l2 2 3 2v2l-3-1v9a2 2 0 01-2 2h-4a2 2 0 01-2-2V9L5 10V8l3-2z" />
    <path d="M18 4l.5 1.5L20 6l-1.5.5L18 8l-.5-1.5L16 6l1.5-.5L18 4z" />
    <path d="M5 3l.35 1L6.5 4.35 5.35 4.7 5 5.7l-.35-1L3.5 4.35l1.15-.35L5 3z" />
  </svg>

  <!-- Wet Cleaning -->
  <svg
    v-else-if="id === 'wet-cleaning'"
    class="w-8 h-8 sm:w-9 sm:h-9"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M8 7l2-2h4l2 2 3 2v1.5l-3-1V18a2 2 0 01-2 2h-4a2 2 0 01-2-2V9.5L5 10.5V9l3-2z" />
    <path d="M9 3c0 1.2-.8 2-1.5 2.5S6 7 6 8" />
    <path d="M15 2.5c0 1-.7 1.7-1.2 2.2S13 6 13 6.8" />
  </svg>

  <!-- Laundry -->
  <svg
    v-else-if="id === 'laundry'"
    class="w-8 h-8 sm:w-9 sm:h-9"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <circle cx="12" cy="13" r="4.5" />
    <circle cx="8" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    <circle cx="11" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>

  <!-- Iron -->
  <svg
    v-else-if="id === 'iron'"
    class="w-8 h-8 sm:w-9 sm:h-9"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M4 14h14a4 4 0 014 4v1H6a2 2 0 01-2-2v-3z" />
    <path d="M6 14V9a3 3 0 013-3h2" />
    <path d="M8 18h.01M11 18h.01M14 18h.01" />
  </svg>

  <!-- Wash & Fold -->
  <svg
    v-else-if="id === 'wash-fold'"
    class="w-8 h-8 sm:w-9 sm:h-9"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M5 8h14v3H5V8z" />
    <path d="M7 11h10v3H7v-3z" />
    <path d="M9 14h6v3H9v-3z" />
    <path d="M8 5l2-2h4l2 2" />
  </svg>

  <!-- Sewing -->
  <svg
    v-else-if="id === 'sewing'"
    class="w-8 h-8 sm:w-9 sm:h-9"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x="5" y="10" width="14" height="9" rx="1.5" />
    <path d="M8 10V7a2 2 0 012-2h1" />
    <path d="M12 5v5" />
    <circle cx="16" cy="7" r="2" />
    <path d="M8 15h8M8 17.5h5" />
  </svg>

  <!-- Pickup -->
  <svg
    v-else-if="id === 'pickup'"
    class="w-8 h-8 sm:w-9 sm:h-9"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
    <rect x="9" y="8" width="6" height="5" rx="0.8" />
    <path d="M10 8V7a2 2 0 014 0v1" />
  </svg>

  <!-- Delivery -->
  <svg
    v-else-if="id === 'delivery'"
    class="w-8 h-8 sm:w-9 sm:h-9"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M7 14l-3 2v2h4l2-2" />
    <path d="M9 11h7l3 3v4h-3" />
    <rect x="10" y="6" width="7" height="6" rx="1" />
    <path d="M12 6V5a1.5 1.5 0 013 0v1" />
  </svg>
</template>
