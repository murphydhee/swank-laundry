import { gsap } from './useGsap'

export function initNavBarAnimations(navRef) {
  if (!navRef?.value) return
  gsap.from(navRef.value, { y: -80, opacity: 0, duration: 0.6, ease: 'power2.out' })
}

export function initHeroAnimations() {
  gsap.from('.hero-left', { x: -100, opacity: 0, duration: 1, ease: 'power3.out' })
  gsap.from('.hero-right', { x: 100, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' })
  gsap.from('.badge', { y: 30, opacity: 0, stagger: 0.2, delay: 0.8, ease: 'power2.out' })
  gsap.from('.dot-grid', { scale: 0, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power2.out' })
}

export function initServicesAnimations(sectionRef) {
  if (!sectionRef?.value) return
  gsap.from('.service-card', {
    scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' },
    y: 60, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'power2.out',
  })
}

export function initTiredAnimations(sectionRef) {
  if (!sectionRef?.value) return
  gsap.from('.tired-image', {
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%' },
    x: -80, opacity: 0, duration: 0.8, ease: 'power2.out',
  })
  gsap.from('.tired-content', {
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%' },
    x: 80, opacity: 0, duration: 0.8, ease: 'power2.out',
  })
}

export function initAboutUsAnimations(sectionRef) {
  if (!sectionRef?.value) return
  gsap.from('.about-us-text', {
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%' },
    x: -60, opacity: 0, duration: 0.8, ease: 'power2.out',
  })
  gsap.from('.about-us-main-img', {
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%' },
    y: 40, opacity: 0, duration: 0.8, delay: 0.1, ease: 'power2.out',
  })
  gsap.from('.about-us-stack', {
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%' },
    x: 60, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power2.out',
  })
}

export function initBannerAnimations(sectionRef) {
  if (!sectionRef?.value) return
  gsap.from('.banner-title', {
    scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' },
    scale: 0.8, opacity: 0, duration: 0.9, ease: 'power2.out',
  })
  gsap.to('.banner-glove', { y: -15, yoyo: true, repeat: -1, duration: 2, ease: 'power1.inOut' })
}

export function initNofadingAnimations(sectionRef) {
  if (!sectionRef?.value) return
  gsap.from('.nofading-text', {
    scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' },
    x: -80, opacity: 0, duration: 0.8, ease: 'power2.out',
  })
  gsap.from('.nofading-card', {
    scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' },
    y: 40, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'power2.out',
  })
  gsap.from('.logo-strip', {
    scrollTrigger: { trigger: '.logo-strip', start: 'top 90%' },
    x: -200, opacity: 0, duration: 0.8,
    onComplete: () => gsap.to('.logo-inner', { x: '-50%', duration: 20, repeat: -1, ease: 'none' }),
  })
}

export function initFaqAnimations(sectionRef) {
  if (!sectionRef?.value) return
  gsap.from('.faq-item', {
    scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' },
    x: -50, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out',
  })
  gsap.from('.faq-image', {
    scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' },
    x: 80, opacity: 0, duration: 0.8, ease: 'power2.out',
  })
}

export function initNewsletterAnimations(sectionRef) {
  if (!sectionRef?.value) return
  gsap.from('.newsletter-content', {
    scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' },
    y: 50, opacity: 0, duration: 0.8, ease: 'power2.out',
  })
  gsap.to('.subscribe-btn', { scale: 1.05, yoyo: true, repeat: -1, duration: 1, ease: 'power1.inOut' })
}