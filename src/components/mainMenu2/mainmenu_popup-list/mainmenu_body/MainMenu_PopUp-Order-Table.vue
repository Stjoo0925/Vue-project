<script setup>
import { computed } from "vue";
import { useMenuStore } from "@/stores/menuStore";

const store = useMenuStore();

function selectItem(item) {
  store.addSelectedItem(item); // 선택된 아이템을 스토어에 추가
}

const formattedPrices = computed(() =>
  store.selectedItems.map((item) => ({
    ...item,
    formattedPrice: `${(item.price * item.quantity).toLocaleString("ko-KR")}원`,
  }))
);

const totalPrice = computed(
  () =>
    `${store.selectedItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toLocaleString("ko-KR")} 원`
);
</script>

<template>
  <div class="order-table">
    <table class="list">
      <thead class="meue-list">
        <th>
          <tr>
            <td>메뉴</td>
            <td>수량</td>
            <td>가격</td>
          </tr>
        </th>
      </thead>

      <tbody class="menu1">
        <th class="menu2">
          <!-- 메뉴 -->
          <tr
            v-for="(item, index) in formattedPrices"
            :key="index"
            class="animate__animated animate__fadeInUp margin_TB"
          >
            <td class="menu-name">
              {{ item.name }}
              <div v-if="item.option" class="menu-option cardName">
                - {{ item.option }}
              </div>
            </td>

            <!-- 수량 -->
            <td class="menu-quantity">
              {{ item.quantity }}
            </td>
            <!-- 가격 -->
            <td class="menu-price">
              {{ item.formattedPrice }}
            </td>
          </tr>
        </th>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.menu1 > tr {
  font-size: 10px;
}
.menu2 {
  font-size: 15px;
  padding: 15px;
}

.meue-list tr > td:nth-child(1) {
  width: 61%;
  padding: 1px 1px 1px 20px;
}

.meue-list tr > td:nth-child(2) {
  width: 30%;
  text-align: center;
  padding: 1px 20px 1px 1px;
}

.meue-list tr > td:nth-child(3) {
  text-align: right;
  padding: 1px 20px 1px 1px;
}
.menu-name {
  width: 392px;
  font-size: 23px;
}
.menu-name div {
  font-size: 13px;
  margin: 10px 0;
}
.margin_TB {
  margin: 10px 0;
}
.menu-quantity {
  font-size: 20px;
  width: 30%;
  text-align: center;
  padding-bottom: 12px;
}
.menu-price {
  font-size: 20px;
  padding-bottom: 12px;
}
</style>
