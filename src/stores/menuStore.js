import { defineStore } from "pinia";
import burgerMenu from "@/assets/db/BurgerData.json"; // JSON 파일을 불러옵니다.

export const useMenuStore = defineStore("menuStore", {
  state: () => ({
    recommended: [], // 추천 메뉴 데이터
    popuprecommended: [], // 팝업 추천 메뉴 데이터
    setMenu: [], // 세트 메뉴 데이터
    burgerMenu: [], // 버거 메뉴 데이터
    sideMenu: [], // 사이드 메뉴 데이터
    beverageMenu: [], // 음료 메뉴 데이터
    chunkedMenuItems: [], // 메뉴 아이템을 그룹화한 배열
    selectedItems: [], // 선택된 아이템 상태 추가
  }),
  actions: {
    // JSON 파일에서 메뉴 아이템을 가져오는 함수로 변경합니다.
    fetchMenuItems(category) {
      try {
        switch (category) {
          case "recommended":
            this[category] = burgerMenu.recommended; // burgerMenu JSON 파일에서 데이터를 가져옵니다.
            break;
          case "popuprecommended":
            this[category] = burgerMenu.popuprecommended;
            break;
          case "setMenu":
            this[category] = burgerMenu.setMenu;
            break;
          case "burgerMenu":
            this[category] = burgerMenu.burgerMenu;
            break;
          case "sideMenu":
            this[category] = burgerMenu.sideMenu;
            break;
          case "beverageMenu":
            this[category] = burgerMenu.beverageMenu;
            break;
          default:
            console.error("Unknown category:", category);
            return;
        }
        this.chunkedMenuItems = this.chunkData(this[category]);
      } catch (error) {
        console.error("Error fetching menu items from JSON:", error);
      }
    },

    chunkData(data) {
      const popupStore = usePopupStore(); // 팝업 스토어 인스턴스를 가져옵니다.
      const chunkSize = popupStore.showPopUp ? 1 : 3; // showPopUp 상태에 따라 chunkSize 결정
      return this.chunkDataHelper(data, chunkSize).map((chunk) =>
        chunk.map((item) => ({
          ...item,
          quantity: 1, // 모든 아이템에 quantity 초기값을 1로 설정
        }))
      );
    },

    chunkDataHelper(data, chunkSize) {
      return data.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);
        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
      }, []);
    },

    // 선택된 아이템을 배열에 추가하거나 수량 증가
    addSelectedItem(item) {
      const existingItem = this.selectedItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.selectedItems.push({ ...item, quantity: 1 });
        console.log("Current selectedItems:", this.selectedItems);
      }
    },

    removeSelectedItem(item) {
      this.selectedItems = this.selectedItems.filter((i) => i.id !== item.id);
    },

    clearSelectedItems() {
      this.selectedItems = [];
    },

    incrementItemQuantity(itemId) {
      const item = this.selectedItems.find((i) => i.id === itemId);
      if (item) {
        item.quantity++;
      }
    },

    decrementItemQuantity(itemId) {
      const item = this.selectedItems.find((i) => i.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    reloadMenuItems() {
      this.fetchMenuItems("recommended");
    },

    saveOrder() {
      const orderStore = useOrderStore();
      const orderCountStore = useOrderCount();

      orderCountStore.incrementCount();

      const orderData = {
        orderCount: orderCountStore.orderCount, //주문번호
        items: this.selectedItems.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          total: item.price * item.quantity,
        })),
        total: this.selectedItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
        orderOption: orderStore.orderOption,
      };

      console.log("주문 데이터:", orderData);
      this.clearSelectedItems(); // 주문 후 선택된 아이템 목록 초기화
    },
  },
});

export const useOrderCount = defineStore("count", {
  state: () => ({
    orderCount: 0,
  }),
  actions: {
    incrementCount() {
      this.orderCount++;
    },
  },
});

// 팝업관련 전역관리 로직
export const usePopupStore = defineStore("popup", {
  state: () => ({
    showPopUp: false,
    showPopUp2: false,
  }),
  actions: {
    togglePopUp1() {
      this.showPopUp = !this.showPopUp;
    },
    togglePopUp2() {
      this.showPopUp2 = !this.showPopUp2;
    },
  },
});

// 네비게이션 경로 설정관련 로직
export const navRootStore = defineStore("navRootStore", {
  state: () => ({
    selectedOption: "suggest", // 초기값 설정
  }),
  actions: {
    setSelectedOption(option) {
      this.selectedOption = option;
    },
  },
});

// 주문 옵션 설정관련 로직
export const useOrderStore = defineStore("orderStore", {
  state: () => ({
    orderOption: "eat", // 초기값 설정
  }),
  actions: {
    setOrderOption(option) {
      this.orderOption = option;
    },
  },
});

const stores = {
  useMenuStore,
  usePopupStore,
  navRootStore,
  useOrderStore,
  useOrderCount,
};

export default stores;
