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
  <table class="sum-list">
    <tr>
      <td>합계</td>
      <td>{{ store.selectedItems.length }}</td>
      <td>{{ totalPrice }}</td>
    </tr>

    <tr>
      <td>할인</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td>총 결제 금액</td>
      <td></td>
      <td>{{ totalPrice }}</td>
    </tr>
  </table>
</template>

<style scoped>
.sum-list {
  width: 100%;
  height: 110px;
  background-color: #e2e2e2;
  margin-top: 10px;
  border-radius: 10px 5px 5px 5px;
}
tr > td:nth-child(1) {
  width: 60%;
  padding: 1px 1px 1px 20px;
  border-bottom: 1px solid #999;
}

tr > td:nth-child(2) {
  width: 25%;
  text-align: right;
  padding: 1px 20px 1px 1px;
  border-bottom: 1px solid #999;
}

tr > td:nth-child(3) {
  text-align: right;
  padding: 1px 20px 1px 1px;
  border-bottom: 1px solid #999;
}
</style>
