<script setup>
import { computed } from "vue";
import { useMenuStore, usePopupStore } from "@/stores/menuStore";
import { NotImplemented, noCountAlert } from "@/assets/js/mainMenu_js/modal";
import {
  animationClasses,
  setupAnimationWatch,
} from "@/assets/js/mainMenu_js/animateCSS";

const store = useMenuStore();
setupAnimationWatch(store);

const showNotImplemented = () => NotImplemented();
const showNoCountAlert = () => noCountAlert();
const popUpStore = usePopupStore();

function ButtonClick() {
  if (store.selectedItems.length === 0) {
    showNoCountAlert();
  } else {
    popUpStore.togglePopUp1(); // 주문 처리 로직
  }
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

const incrementQuantity = (item) => store.incrementItemQuantity(item.id);
const decrementQuantity = (item) => store.decrementItemQuantity(item.id);
const removeItem = (item) => store.removeSelectedItem(item);
const removeAllItems = () => store.clearSelectedItems();
</script>

<template>
  <div class="FT">
    <div class="Footer-Container">
      <div class="Footer_Top">
        <div class="Footer_Top_left">
          <div>주문목록</div>
          <div class="orderCount">
            <div class="orderCount-con">
              <img src="/shoppingBag.svg" class="shoppingBag" />
              <div :class="animationClasses">
                {{ store.selectedItems.length }}
              </div>
            </div>
          </div>
        </div>
        <div class="Footer_Top_Right">
          <div>주문금액</div>
          <div>{{ totalPrice }}</div>
        </div>
      </div>
      <div class="Footer_Info_Box">
        <table>
          <thead>
            <tr>
              <th class="col-menu"><div class="menu-con">메뉴이름</div></th>
              <th class="col-quantity"><div class="quantity-con">수량</div></th>
              <th class="col-price"><div class="price-con-price">가격</div></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in formattedPrices"
              :key="index"
              class="animate__animated animate__fadeInUp"
            >
              <td class="col-menu">
                <div class="menu-name">{{ item.name }}</div>
                <div v-if="item.option" class="menu-option">
                  - {{ item.option }}
                </div>
              </td>
              <td class="col-quantity">
                <div class="quantity-con">
                  <button
                    class="quantityMinus"
                    @click="decrementQuantity(item)"
                    :disabled="item.quantity <= 1"
                    :class="{
                      greyButton: item.quantity === 1,
                      defaultButton: item.quantity > 1,
                    }"
                  >
                    -
                  </button>
                  <div>{{ item.quantity }}</div>
                  <button class="quantityPlus" @click="incrementQuantity(item)">
                    +
                  </button>
                </div>
              </td>
              <td class="col-price">
                <div class="price-con">
                  <div class="price-con-price">{{ item.formattedPrice }}</div>
                  <button class="price-Del" @click="removeItem(item)">x</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="Footer_Under">
        <div class="PlusButton" @click="showNotImplemented">+</div>
        <div class="CouponButton" @click="showNotImplemented">쿠폰사용</div>
        <div class="DelButton" @click="removeAllItems">전체취소</div>
        <div class="OrderButton" @click="ButtonClick">주문하기</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/mainMenuCSS/Footer.css";
</style>
