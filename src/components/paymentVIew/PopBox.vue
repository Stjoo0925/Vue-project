<template>
  <section class="popBox">
    <div class="popBox_top">
      <div class="popInfo">
        <p class="popInfo-p">IC 카드를 삽입해주세요</p>
        <div class="cardPayBox">
          <img src=" /cardpay.png" />
        </div>
        <div class="payment">
          <div class="paymentBox" @click="paymentWait">결제승인</div>
          <div class="paymentBox" @click="back">결제취소</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMenuStore, usePopupStore,useOrderCount } from "@/stores/menuStore.js";
import { useRouter } from "vue-router";
import swal from "sweetalert2";

const router = useRouter();
const menuStore = useMenuStore();
const popupStore = usePopupStore();
const orderCount = useOrderCount();

const paymentWait = () => {
  swal
    .fire({
      text: "결제가 완료되었습니다!",
      icon: "success",
      confirmButtonColor: "#ea0029",
      confirmButtonText: "확인",
    })
    .then(() => {
      menuStore.saveOrder();
      menuStore.clearSelectedItems();
      popupStore.togglePopUp1();
      popupStore.togglePopUp2();
      router.push("/mainpage");
    });
};

const back = () => {
  const element = document.getElementsByClassName("popBox")[0];
  if (element) {
    element.style.display = "none";
  }
};
</script>
