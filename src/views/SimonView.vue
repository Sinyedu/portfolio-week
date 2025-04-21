<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
  >
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <FooterViewSection />
  </div>
</template>

<script setup>
import HeroSection from "@/components/simon/HeroSectionView.vue";
import AboutSection from "@/components/simon/AboutMeSectionView.vue";
import ProjectsSection from "@/components/simon/ProjectSectionView.vue";
import FooterViewSection from "@/components/simon/FooterViewSection.vue";
</script>

<style scoped></style>
