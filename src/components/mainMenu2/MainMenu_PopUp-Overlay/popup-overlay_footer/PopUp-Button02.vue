<script setup>
import { useRouter } from "vue-router";
import { usePopupStore } from "@/stores/menuStore";

const router = useRouter();
const popUpStore = usePopupStore();

function ButtonClick() {
  popUpStore.togglePopUp2();
}

const payment = () => {
  router.push({ name: "Mainpayment" });
  console.log("Navigating to Mainpayment");
};
</script>

<template>
  <div class="popup-buttons02">
  <a @click="ButtonClick">
      <div   class="previous-button02">이전</div>
  </a>

    <router-link :to="{ path: '/Mainpayment' }">
      <div class="next-button02">다음</div>
    </router-link>
  </div>
</template>
