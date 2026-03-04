<script setup>
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import TiredSection from '../components/TiredSection.vue'
import PricingSection from '../components/PricingSection.vue'
import AboutUsSection from '../components/AboutUsSection.vue'
import BannerSection from '../components/BannerSection.vue'
import NofadingSection from '../components/NofadingSection.vue'
import FaqSection from '../components/FaqSection.vue'
import NewsletterSection from '../components/NewsletterSection.vue'
import Footer from '../components/Footer.vue'
import ScheduleModal from '../components/ScheduleModal.vue'
</script>

<template>
  <div>
    <ScheduleModal />
    <NavBar />
    <HeroSection id="home" />
    <AboutUsSection id="about" />
    <ServicesSection id="services" />
    <TiredSection />
    <PricingSection />
    <BannerSection />
    <NofadingSection />
    <FaqSection id="faq" />
    <NewsletterSection id="newsletter" />
    <Footer />
  </div>
</template>
