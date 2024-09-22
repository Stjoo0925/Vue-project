<script setup>
import { usePopupStore } from "@/stores/menuStore";

const popUpStore = usePopupStore();

function ButtonClick1() {
  popUpStore.togglePopUp1();
}

function ButtonClick2() {
  popUpStore.togglePopUp2();
}
</script>

<template>
  <div class="popup-buttons">
    <div class="previous-button" @click="ButtonClick1">
      <p>
        <a>이전</a>
      </p>
    </div>
    <div class="next-button" @click="ButtonClick2">
      <p>
        <a>결제하기</a>
      </p>
    </div>
  </div>
</template>
