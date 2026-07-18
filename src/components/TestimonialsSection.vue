<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from '../composables/useGsap'

const sectionRef = ref(null)
const trackRef = ref(null)
const activeIndex = ref(0)

const testimonials = [
  {
    rating: '5.0',
    text: 'As a busy mum in Ewet Housing, Saturday free pickup is a lifesaver. My kids’ school uniforms and our bedsheets always come back smelling fresh. Swank Laundry get am!',
    name: 'Iniobong Ekanem',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    rating: '5.0',
    text: 'I wear senator and agbada for church and events. They handle traditional wears carefully — no fading, neat pressing. Delivery to Shelter Afrique was on time.',
    name: 'Ekerette Udoh',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    rating: '5.0',
    text: 'WhatsApp booking is so easy. I just message, they pick up from Itam, and bring everything back folded. Prices are clear — no surprise charges.',
    name: 'Mfoniso Akpan',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
  },
  {
    rating: '5.0',
    text: 'My office shirts and trousers look brand new every week. Express service saved me before an important meeting at State Secretariat. Highly recommend!',
    name: 'Ubong Bassey',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
  },
  {
    rating: '5.0',
    text: 'We use them for our small boutique in Uyo — wrappers, blouses, and head ties come out perfect. Reliable pickup and delivery every time.',
    name: 'Anietie Essien',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
  },
  {
    rating: '5.0',
    text: 'Duvets and curtain cleaning used to stress me. Swank took care of everything from my home near Uniuyo. Clothes smell nice and feel soft.',
    name: 'Nsikak Okon',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
  {
    rating: '5.0',
    text: 'I travel often for work. Knowing I can schedule pickup on Saturday and find clean clothes waiting when I’m back — that peace of mind is priceless.',
    name: 'Imaobong Udo',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
  },
  {
    rating: '5.0',
    text: 'Suit and gown for my sister’s wedding came out spotless. They treated the beaded parts carefully. Service from Graceland area is top notch.',
    name: 'Kufre Etuk',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
  },
  {
    rating: '5.0',
    text: 'Affordable for students and young professionals. My polo, jeans, and bedcovers are always ready on time. Swank is the laundry we trust in Akwa Ibom.',
    name: 'Edidiong Inyang',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    rating: '5.0',
    text: 'From kaftan to carpet cleaning, they don’t joke with quality. Staff are polite, WhatsApp replies are fast, and free Saturday pickup is a real blessing.',
    name: 'Abasiama Nyong',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
  },
]

function getStep() {
  const track = trackRef.value
  if (!track?.children?.[0]) return 304
  const first = track.children[0]
  const second = track.children[1]
  if (second) {
    return second.offsetLeft - first.offsetLeft
  }
  return first.offsetWidth + 24
}

const maxIndex = computed(() => {
  // Keep at least ~1 card peeking; allow scrolling through the list
  return Math.max(0, testimonials.length - 1)
})

function updateTrack(animate = true) {
  if (!trackRef.value) return
  const x = -activeIndex.value * getStep()
  if (animate) {
    gsap.to(trackRef.value, { x, duration: 0.5, ease: 'power2.out' })
  } else {
    gsap.set(trackRef.value, { x })
  }
}

function prev() {
  if (activeIndex.value <= 0) return
  activeIndex.value -= 1
  updateTrack()
}

function next() {
  if (activeIndex.value >= maxIndex.value) return
  activeIndex.value += 1
  updateTrack()
}

function onResize() {
  updateTrack(false)
}

let ctx

onMounted(() => {
  updateTrack(false)
  window.addEventListener('resize', onResize, { passive: true })

  if (!sectionRef.value) return
  ctx = gsap.context(() => {
    gsap.fromTo(
      sectionRef.value.querySelector('.testimonials-header'),
      { y: 28, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.65,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' },
      },
    )
    gsap.fromTo(
      sectionRef.value.querySelectorAll('.testimonial-card'),
      { y: 40, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.55,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.value, start: 'top 75%' },
      },
    )
  }, sectionRef.value)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  ctx?.revert()
})
</script>

<template>
  <section
    ref="sectionRef"
    id="testimonials"
    class="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F8FA] overflow-x-hidden"
  >
    <div class="max-w-7xl mx-auto overflow-x-hidden">
      <div class="testimonials-header flex items-center justify-between gap-4 mb-10 sm:mb-12">
        <h2 class="text-dark-text font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          What Our Customer Say
        </h2>
        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            class="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 hover:text-dark-text hover:border-gray-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
            :disabled="activeIndex === 0"
            @click="prev"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            class="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-dark-text hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
            :disabled="activeIndex >= maxIndex"
            @click="next"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div class="testimonials-viewport relative w-full max-w-full overflow-hidden">
        <div
          ref="trackRef"
          class="flex gap-5 sm:gap-6 will-change-transform"
        >
          <article
            v-for="(item, i) in testimonials"
            :key="i"
            class="testimonial-card flex flex-col w-[280px] sm:w-[320px] lg:w-[340px] shrink-0 bg-white rounded-3xl p-6 sm:p-7 shadow-md shadow-black/5"
          >
            <div class="flex items-center gap-2 mb-4">
              <div class="flex items-center gap-0.5 text-[#F5C518]" aria-hidden="true">
                <svg v-for="s in 5" :key="s" class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 1.5l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.77l-4.78 2.51.91-5.32L2.27 7.12l5.34-.78L10 1.5z" />
                </svg>
              </div>
              <span class="text-dark-text font-bold text-base">{{ item.rating }}</span>
            </div>

            <p class="text-dark-text text-base leading-relaxed flex-1 mb-6">
              {{ item.text }}
            </p>

            <div class="border-t border-gray-100 pt-5 flex items-center gap-3">
              <img
                :src="item.avatar"
                :alt="item.name"
                class="h-11 w-11 rounded-full object-cover bg-gray-100"
                loading="lazy"
              />
              <span class="text-dark-text font-bold text-base">{{ item.name }}</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
