import { gsap } from './useGsap'

export function initNavBarAnimations(navRef) {
  if (!navRef?.value) return
  gsap.from(navRef.value, { y: -80, opacity: 0, duration: 0.6, ease: 'power2.out' })
}

export function initHeroAnimations(sectionRef) {
  const scope = sectionRef?.value
  if (!scope) return

  const fromTo = (el, fromVars, toVars) => {
    if (!el) return
    gsap.fromTo(el, fromVars, toVars)
  }

  fromTo(
    scope.querySelector('.hero-phone'),
    { y: 16, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.55, ease: 'power2.out' },
  )
  fromTo(
    scope.querySelector('.hero-title'),
    { y: 28, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.7, delay: 0.08, ease: 'power3.out' },
  )
  fromTo(
    scope.querySelector('.hero-subtitle'),
    { y: 20, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.6, delay: 0.18, ease: 'power2.out' },
  )
  fromTo(
    scope.querySelector('.hero-cta'),
    { y: 16, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.55, delay: 0.28, ease: 'power2.out', clearProps: 'transform' },
  )
  fromTo(
    scope.querySelector('.hero-carousel'),
    { y: 36, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.8, delay: 0.35, ease: 'power2.out' },
  )
}

export function initWhyChooseUsAnimations(sectionRef) {
  const scope = sectionRef?.value
  if (!scope) return

  gsap.fromTo(
    scope.querySelector('.why-title'),
    { y: 36, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: scope, start: 'top 80%' },
    },
  )
  gsap.fromTo(
    scope.querySelector('.why-desc'),
    { y: 28, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.65,
      delay: 0.1,
      ease: 'power2.out',
      scrollTrigger: { trigger: scope, start: 'top 80%' },
    },
  )
  gsap.fromTo(
    scope.querySelector('.why-cta'),
    { y: 20, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.55,
      delay: 0.2,
      ease: 'power2.out',
      clearProps: 'transform',
      scrollTrigger: { trigger: scope, start: 'top 80%' },
    },
  )
  gsap.fromTo(
    scope.querySelectorAll('.why-item'),
    { x: 28, autoAlpha: 0 },
    {
      x: 0,
      autoAlpha: 1,
      duration: 0.5,
      stagger: 0.07,
      delay: 0.15,
      ease: 'power2.out',
      scrollTrigger: { trigger: scope, start: 'top 75%' },
    },
  )
}

export function initServicesAnimations(sectionRef) {
  const scope = sectionRef?.value
  if (!scope) return

  gsap.fromTo(
    scope.querySelectorAll('.service-item'),
    { y: 36, autoAlpha: 0, scale: 0.92 },
    {
      y: 0,
      autoAlpha: 1,
      scale: 1,
      duration: 0.55,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: { trigger: scope, start: 'top 80%' },
    },
  )
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