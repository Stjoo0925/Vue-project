<script setup>
import { useRouter } from "vue-router"; // vue-router에서 useRouter 훅을 가져옵니다.
import { useOrderStore } from "@/stores/menuStore"; // 상태 관리를 위해 Pinia 스토어에서 useOrderStore를 가져옵니다.

const orderStore = useOrderStore(); // useOrderStore를 사용하여 orderStore 인스턴스를 생성합니다.
const router = useRouter(); // useRouter를 사용하여 router 인스턴스를 생성합니다.

// '매장 식사' 버튼 클릭 시 호출되는 함수
const eat = () => {
  orderStore.setOrderOption("eat"); // orderStore의 setOrderOption 메서드를 호출하여 전역 상태 'orderOption'을 'eat'으로 설정합니다.
  router.push("/mainmenu"); // 사용자를 '/mainmenu' 경로로 라우팅합니다.
};

// '포장 주문' 버튼 클릭 시 호출되는 함수
const packaging = () => {
  orderStore.setOrderOption("packaging"); // orderStore의 setOrderOption 메서드를 호출하여 전역 상태 'orderOption'을 'packaging'으로 설정합니다.
  router.push("/mainmenu"); // 사용자를 '/mainmenu' 경로로 라우팅합니다.
};
</script>

<template>
  <div class="buttonBox">
    <div class="here" @click="eat">
      <img src="../../../public/img/here.png" class="buttonImg" />
      매장 식사
    </div>
    <div class="takeaway" @click="packaging">
      <img src="../../../public/img/takeaway.png" class="buttonImg" />
      포장 주문
    </div>
  </div>
</template>

<style scoped></style>
