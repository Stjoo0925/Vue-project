<script setup>
import Header from "./components/app/header/header.vue";
import Footer from "./components/app/footer/footer.vue";
import Section from "./components/app/article/section.vue";
import TopButton from "./components/app/top-button.vue";
</script>

<template>
  <div class="header">
    <Header />
  </div>
  <div>
    <Section />
  </div>

  <div>
    <Footer />
  </div>
  <TopButton />
</template>

<style glodal>
@import url("../node_modules/reset-css/reset.css");
@import url("@/assets/font.css");

.header {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
