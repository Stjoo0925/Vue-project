<script setup>
import { computed } from "vue";
import { usePopupStore } from "@/stores/menuStore";
import Header from "@/components/mainMenu/Header.vue";
import Section from "@/components/mainMenu/Section.vue";
import Footer from "@/components/mainMenu/Footer.vue";
import PopUp from "@/components/mainMenu2/PopUp.vue";

const popUpStore = usePopupStore();

// 반응성을 유지하기 위해 computed를 사용
const popUpVisible = computed(() => popUpStore.showPopUp);
</script>

<template>
  <div class="All_Box">
    <Header />
    <Section />
    <Footer />
    <div v-show="popUpVisible">
      <PopUp />
    </div>
  </div>
</template>

<style scoped>

</style>
