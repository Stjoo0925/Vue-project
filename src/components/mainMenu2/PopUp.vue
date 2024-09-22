<script setup>
import { computed } from "vue";
import {usePopupStore} from "@/stores/menuStore";

import PopUpContainer from "./mainmenu_popup-list/mainmenu_header/MainMenu_PopUp-Container.vue";
import PopUpOrderTable from "./mainmenu_popup-list/mainmenu_body/MainMenu_PopUp-Order-Table.vue";
import PopUpSumList from "./mainmenu_popup-list/mainmenu_body/MainMenu_PopUp-Sum-List.vue";
import ImgsBox from "./mainmenu_popup-list/mainmenu_body/MainMenu_Imgs-Box.vue";
import PopUpButtons from "./mainmenu_popup-list/mainmenu_footer/MainMenu_popup-buttons.vue";

import FinalAmountSub from "./MainMenu_PopUp-Overlay/popup-overlay_header/Final-Amount-sub.vue";
import PayMentOptions from "./MainMenu_PopUp-Overlay/popup-overlay_body/PayMent-Options.vue";
import PopUpButton02 from "./MainMenu_PopUp-Overlay/popup-overlay_footer/PopUp-Button02.vue";

const popUpStore = usePopupStore();

const popUpVisible = computed(() => popUpStore.showPopUp2);

const popUp = () => {
  const element = document.getElementsByClassName("popup-list")[0];
  if (element) {
    element.style.display = "block";
  }
};
</script>

<template>
  <div class="popup-list">
    <div class="popup-container">
      <PopUpContainer />
      <PopUpOrderTable />
      <PopUpSumList />
      <ImgsBox />
      <PopUpButtons />
    </div>
  </div>

  <div v-show="popUpVisible">
    <div class="popup-list">
      <div class="popup-overlay">
        <div class="popup-inner">
          <div class="final-amount">
            <FinalAmountSub />
            <PayMentOptions />
            <PopUpButton02 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
