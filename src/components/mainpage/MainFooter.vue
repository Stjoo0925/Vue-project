<script setup>
import { NotImplemented } from "@/assets/js/mainMenu_js/modal";

const showNotImplemented = () => {
  NotImplemented();
};
</script>

<template>
    <div class="footerBox">
      <div class="languageBox" @click="showNotImplemented">Language</div>
      <div class="guideBox">
        <p>현금 결제는 카운터에서 가능합니다.</p>
      </div>
    </div>
</template>

<!-- <script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
     
    function lang() {
         alert("언어선택");
         route.push("/language")
    }
</script> -->

<style scoped>
</style>