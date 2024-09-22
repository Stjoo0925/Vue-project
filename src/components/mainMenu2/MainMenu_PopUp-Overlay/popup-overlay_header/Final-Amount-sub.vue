<script setup>
import { computed } from "vue";
import { useMenuStore } from "@/stores/menuStore";

const store = useMenuStore();

const totalPrice = computed(
  () =>
    `${store.selectedItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toLocaleString("ko-KR")} 원`
);


</script>
<template>
  <div class="final-amount_sub">
    <p>최종 결제 금액</p>
    <div>
      <p>{{ totalPrice }}</p>
    </div>
  </div>
</template>
