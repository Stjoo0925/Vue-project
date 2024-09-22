<script setup>
import { navRootStore } from "@/stores/menuStore";
import { computed } from "vue";
import Suggest from "@/components/mainMenu/mainMenuCard/Suggest.vue";
import SetMenu from "@/components/mainMenu/mainMenuCard/SetMenu.vue";
import Burger from "@/components/mainMenu/mainMenuCard/Burger.vue";
import Side from "@/components/mainMenu/mainMenuCard/Side.vue";
import Beverage from "@/components/mainMenu/mainMenuCard/Beverage.vue";

const store = navRootStore();

// 반응성을 유지하기 위해 computed를 사용
const selectedOption = computed(() => store.selectedOption);
</script>

<template>
  <article>
    <section v-if="selectedOption === 'suggest'" class="Sc_Section">
      <Suggest />
    </section>
    <section v-if="selectedOption === 'setMenu'" class="Sc_Section">
      <SetMenu />
    </section>
    <section v-if="selectedOption === 'burger'" class="Sc_Section">
      <Burger />
    </section>
    <section v-if="selectedOption === 'side'" class="Sc_Section">
      <Side />
    </section>
    <section v-if="selectedOption === 'beverage'" class="Sc_Section">
      <Beverage />
    </section>
  </article>
</template>

<style scoped>
@import "@/assets/css/mainMenuCSS/Section.css";
</style>
