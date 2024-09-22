<script setup>
import { onMounted } from "vue";
import { useMenuStore } from "@/stores/menuStore";
import "animate.css";

const store = useMenuStore(); // 스토어 인스턴스 사용

// 컴포넌트가 마운트될 때 실행
onMounted(() => {
  store.fetchMenuItems("beverageMenu"); // 추천 메뉴 아이템 로드
});

function selectItem(item) {
  store.addSelectedItem(item); // 선택된 아이템을 스토어에 추가
}
</script>

<template>
  <div class="Sc_Section_con">
    <div class="Section_Menu">
      <div class="Section_Menu_con">
        <div
          class="Menu_con_row"
          v-for="(chunk, index) in store.chunkedMenuItems"
          :key="index"
          :class="{ 'last-row': index === store.chunkedMenuItems.length - 1 }"
        >
          <div
            class="con_row_card"
            v-for="(item, idx) in chunk"
            :key="idx"
            @click="selectItem(item)"
          >
            <img :src="item.img" alt="" />
            <p class="cardName">{{ item.name }}</p>
            <p class="cardPrice">{{ item.price.toLocaleString("ko-KR") }}원</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/mainMenuCSS/MainMenuCard.css";
</style>
