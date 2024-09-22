<script setup>
import MainHeader from "../components/mainpage/MainHeader.vue";
import MainSlider from "../components/mainpage/MainSlider.vue";
import MainButtonBox from "../components/mainpage/MainButtonBox.vue";
import MainFooter from "../components/mainpage/MainFooter.vue";
</script>

<template>
  <div class="All_Box" style="overflow: hidden;">
    <MainHeader />
    <MainSlider />
    <MainButtonBox />
    <MainFooter />
  </div>

  <RouterView />
</template>

<style scoped></style>
