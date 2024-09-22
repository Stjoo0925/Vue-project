<script setup>
import { navRootStore, useOrderStore, useMenuStore } from "@/stores/menuStore";

const orderStore = useOrderStore();
</script>

<template>
  <div class="payment-options">
    <p>식사 방식을 선택해주세요.</p>

    <div class="dine-options">
      <div
        class="dine-in"
        :class="{ activeOption: orderStore.orderOption === 'eat' }"
        @click="() => orderStore.setOrderOption('eat')"
      >
        매장 식사
      </div>
      <div
        class="take-out"
        :class="{ activeOption: orderStore.orderOption === 'packaging' }"
        @click="() => orderStore.setOrderOption('packaging')"
      >
        포장 주문
      </div>
    </div>
  </div>
</template>
