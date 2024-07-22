<script setup>
const headerHeight = 120;

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const topOffset = section.offsetTop - headerHeight;
    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
    });
  }
}

function changeNavBarColor(sectionId) {
  const navBarItems = document.querySelectorAll('.HD_navItem');
  navBarItems.forEach(item => {
    item.style.color = 'white';
  });
  const currentNavItem = document.querySelector(`.HD_navItem.${sectionId}`);
  if (currentNavItem) {
    currentNavItem.style.color = 'purple';
  }
}
</script>

<template>
<div class="HD_navBar">
    <div class="HD_navItem aboutme" @click="scrollToSection('aboutme'), changeNavBarColor('aboutme')">AboutMe</div>
    <div class="HD_navItem techskills" @click="scrollToSection('techskills'), changeNavBarColor('techskills')">TechSkills</div>
    <div class="HD_navItem portfolio" @click="scrollToSection('portfolio'), changeNavBarColor('portfolio')">Portfolio</div>
    <div class="HD_navItem contact" @click="scrollToSection('contact'), changeNavBarColor('contact')">Contact</div>
  </div>
</template>

<style scoped>
@import url('@/assets/header.css');
</style>
