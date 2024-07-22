<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import NavBar from '@/components/app/header/header_stuff/navBar.vue';
import MenuButton from '@/components/app/header/header_stuff/menu.vue';
import Title from '@/components/app/typing.vue';
import 'animate.css';

const isMenuVisible = ref(false);
const isNavbarVisible = ref(true);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  updateVisibility();
  window.addEventListener('resize', updateVisibility);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibility);
});

function updateVisibility() {
  isMenuVisible.value = window.innerWidth <= 768;
  isNavbarVisible.value = window.innerWidth > 768;
}
</script>

<template>
  <div class="HD_container">
    <div @click="scrollToTop" class="HD_homeImg animate__animated animate__jello">
      <img src="/flash-outline.svg" alt="No image">
      <Title/>
    </div>
    <NavBar v-if="isNavbarVisible"/>
    <div class="menu-button-container">
      <MenuButton v-if="isMenuVisible"/>
    </div>
  </div>
</template>

<style scoped>
@import url('@/assets/header.css');

.menu-button-container {
  display: none;
}

@media (max-width: 768px) {
  .menu-button-container {
    display: block;
  }

  .HD_navBar {
    display: none;
  }
}
</style>
