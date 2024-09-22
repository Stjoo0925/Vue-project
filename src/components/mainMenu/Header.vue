<script setup>
import { watch } from "vue"; // Vue의 반응성 시스템을 사용하기 위한 watch 함수를 가져옵니다.
import { useRoute, useRouter } from "vue-router";
import { navRootStore, useOrderStore, useMenuStore } from "@/stores/menuStore"; // 상태 관리를 위한 스토어 훅을 가져옵니다.
import { NotImplemented, foodInfo } from "@/assets/js/mainMenu_js/modal";
import swal from "sweetalert2";

const route = useRoute();
const router = useRouter();
const store = navRootStore();
const orderStore = useOrderStore();
const menuStore = useMenuStore();

const options = {
  "/MainMenu/Section/Suggest": "suggest",
  "/MainMenu/Section/SetMenu": "setMenu",
  "/MainMenu/Section/Burger": "burger",
  "/MainMenu/Section/Side": "side",
  "/MainMenu/Section/Beverage": "beverage",
};

const updateSelectedOption = (newPath) => {
  const matchedOption = Object.keys(options).find((path) => newPath === path);
  if (matchedOption && store.selectedOption !== options[matchedOption]) {
    store.setSelectedOption(options[matchedOption]);
  }
};

// 모달 관련 함수를 컴포넌트의 메소드로 사용할 수 있도록 설정
const showNotImplemented = () => {
  NotImplemented();
};

const showFoodInfo = () => {
  foodInfo();
};

const confirmAction = () => {
  swal
    .fire({
      title: "시작화면으로",
      text: "주문을 취소하고 이동하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ea0029",
      cancelButtonColor: "#0f1822",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swal
          .fire({
            title: "시작화면으로",
            text: "주문을 취소하고 이동합니다",
            icon: "success",
            confirmButtonColor: "#ea0029",
            confirmButtonText: "확인",
          })
          .then(() => {
            menuStore.clearSelectedItems();
            router.push("/mainpage");
          });
      }
    });
};

// `watch`는 Vue의 반응성 시스템을 사용하여 `route.path`의 변경을 감시합니다.
// `route.path`가 변경될 때마다 `updateSelectedOption` 함수를 호출하여
// 스토어의 `selectedOption`을 적절히 업데이트합니다.
watch(() => route.path, updateSelectedOption, { immediate: true });
</script>

<template>
  <div class="HD">
    <div class="Hd_Top">
      <div class="Hd_Top_Front">
        <div
          class="Front_Eat"
          :class="{ activeOption: orderStore.orderOption === 'eat' }"
          @click="() => orderStore.setOrderOption('eat')"
        >
          매장식사
        </div>
        <div
          class="Front_Packaging"
          :class="{ activeOption: orderStore.orderOption === 'packaging' }"
          @click="() => orderStore.setOrderOption('packaging')"
        >
          포장주문
        </div>
      </div>
      <div class="Hd_Top_Back">
        <div @click="confirmAction">첫화면</div>
        <div @click="showNotImplemented">사용안내</div>
        <div @click="showFoodInfo">영양정보</div>
        <div @click="showNotImplemented">Language</div>
      </div>
    </div>
    <div class="Hd_Nav">
      <router-link :to="{ path: '/MainMenu/Section/Suggest' }"
        >추천메뉴</router-link
      >
      <router-link :to="{ path: '/MainMenu/Section/SetMenu' }"
        >세트메뉴</router-link
      >
      <router-link :to="{ path: '/MainMenu/Section/Burger' }">단품</router-link>
      <router-link :to="{ path: '/MainMenu/Section/Side' }">사이드</router-link>
      <router-link :to="{ path: '/MainMenu/Section/Beverage' }"
        >음료</router-link
      >
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/mainMenuCSS/Header.css";
</style>
