<script setup>
import { ref } from 'vue';

const props = defineProps({
  isSidebarVisible: Boolean
});
</script>

<template>
  <div v-if="isSidebarVisible" class="sidebar">
    <ul>
      <li>AdoutMe</li>
      <li>TechSkills</li>
      <li>Portfolio</li>
      <li>Contact</li>
    </ul>
  </div>
</template>

<style scoped>
@import url('@/assets/reset.css');
@import url('@/assets/font.css');
@import url('@/assets/header.css');
</style>