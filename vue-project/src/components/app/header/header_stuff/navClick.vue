<script setup>
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>

<div class="HD_navBar">
    <div class="HD_navItem" @click="scrollToSection('aboutme')">AboutMe</div>
    <div class="HD_navItem" @click="scrollToSection('techskills')">TechSkills</div>
    <div class="HD_navItem" @click="scrollToSection('portfolio')">Portfolio</div>
    <div class="HD_navItem" @click="scrollToSection('contact')">Contact</div>
  </div>

</template>

<style scoped>
@import url('@/assets/reset.css');
@import url('@/assets/font.css');
@import url('@/assets/header.css');
</style>