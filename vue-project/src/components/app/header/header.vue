<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import NavBar from '@/components/app/header/header_stuff/navClick.vue';
import MenuButton from '@/components/app/header/header_stuff/menu.vue';

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
    <div @click="scrollToTop" class="HD_homeImg">
      <img src="/flash-outline.svg" alt="No image">
    </div>
    <NavBar v-if="isNavbarVisible"/>
    <div class="menu-button-container">
      <MenuButton v-if="isMenuVisible"/>
    </div>
  </div>
</template>

<style scoped>
@import url('@/assets/reset.css');
@import url('@/assets/font.css');
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
