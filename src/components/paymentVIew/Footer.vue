<script setup>
import { usePopupStore } from "@/stores/menuStore";

const popUpStore = usePopupStore();

function ButtonClick() {
  popUpStore.togglePopUp1();
  popUpStore.togglePopUp2();
}

</script>

<template>
  <footer>
    <div class="payment_footer">
      <div class="payment_footer_box">
        <p class="payment_footer_box_p">
          <div @click="ButtonClick">
            <RouterLink to="/MainMenu">이전</RouterLink>
          </div>
        </p>
      </div>
    </div>
  </footer>
</template>
