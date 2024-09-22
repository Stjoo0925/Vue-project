<script setup>
import { ref, watch } from "vue";
import { useMenuStore, usePopupStore } from "@/stores/menuStore";

const store = useMenuStore();
const popupStore = usePopupStore();
const scrollPosition = ref(0);
const itemWidth = 635; // 각 con_col_card의 너비를 가정

function scrollItems(direction) {
  console.log(`Scrolling ${direction}`);
  const maxScroll = itemWidth * 3;
  if (direction === "next" && scrollPosition.value < maxScroll) {
    scrollPosition.value += itemWidth;
  } else if (direction === "prev" && scrollPosition.value > 0) {
    scrollPosition.value -= itemWidth;
  }
}

watch(
  () => popupStore.showPopUp,
  (newVal) => {
    if (newVal) {
      store.fetchMenuItems("recommended");
    } else {
      store.reloadMenuItems(); // 팝업이 꺼질 때 초기화
    }
  }
);

function selectItem(item) {
  store.addSelectedItem(item);
}
</script>

<template>
  <div class="imgs-box">
    <p class="imgs-box-title">함께 구매하기 좋은 상품</p>
    <div class="additional-items">
      <div class="additional-items_sub" @click="scrollItems('prev')"></div>
      <div class="item-thumbails">
        <div
          class="thumbnail"
          v-for="(chunk, index) in store.chunkedMenuItems"
          :key="index"
          :style="{ transform: `translateX(-${scrollPosition}px)` }"
        >
          <div class="thumbnail_price">
            <div
              class="con_col_card"
              v-for="(item, idx) in chunk"
              :key="idx"
              @click="selectItem(item)"
            >
              <img class="imgs-thumbnail" :src="item.img" />
              <p class="cardName">{{ item.name }}</p>
              <p class="cardPrice">
                {{ item.price.toLocaleString("ko-KR") }}원
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="additional-items_sub2" @click="scrollItems('next')"></div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/mainmenu-popup.css";
</style>
