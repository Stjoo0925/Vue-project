<script setup>
import { ref } from 'vue';
import SideBar from '@/components/app/header/header_stuff/menuSide.vue';

const currentImage = ref('/menu.svg');
const isSidebarVisible = ref(false);

function toggleSidebar() {
  currentImage.value = currentImage.value === '/menu.svg' 
    ? '/close.svg'
    : '/menu.svg';
  isSidebarVisible.value = !isSidebarVisible.value;
}
</script>

<template>
  <div class="HD_menu">
    <div class="menu-icon" @click="toggleSidebar">
      <img :src="currentImage" alt="Menu">
    </div>
    <SideBar :isSidebarVisible="isSidebarVisible"/>
  </div>
</template>

<style scoped>
@import url('@/assets/reset.css');
@import url('@/assets/font.css');
@import url('@/assets/header.css');
</style>
