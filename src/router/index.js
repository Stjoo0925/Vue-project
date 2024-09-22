import { createRouter, createWebHistory } from "vue-router";
import { navRootStore } from "@/stores/menuStore";

// 컴포넌트를 동적으로 임포트하여 초기 로드 시간을 단축
const Mainpage = () => import("../views/Mainpage.vue");
const MainMenu = () => import("../views/MainMenu.vue");
const Suggest = () => import("../components/mainMenu/mainMenuCard/Suggest.vue");
const SetMenu = () => import("../components/mainMenu/mainMenuCard/SetMenu.vue");
const Burger = () => import("../components/mainMenu/mainMenuCard/Burger.vue");
const Side = () => import("../components/mainMenu/mainMenuCard/Side.vue");
const Beverage = () =>
  import("../components/mainMenu/mainMenuCard/Beverage.vue");
const Section = () => import("@/components/mainMenu/Section.vue");
const Mainpayment = () => import("@/views/Mainpayment.vue");

const routes = [
  { path: "/", name: "firstPage", component: Mainpage }, // 메인 페이지 라우트
  {
    path: "/MainMenu",
    name: "MainMenu",
    component: MainMenu,
    redirect: { name: "suggest" }, // MainMenu 접근 시 suggest로 리다이렉트
    children: [
      {
        path: "Section",
        component: Section,
        children: [
          { path: "Suggest", name: "suggest", component: Suggest }, // 추천 메뉴 라우트
          { path: "SetMenu", name: "setMenu", component: SetMenu }, // 세트 메뉴 라우트
          { path: "Burger", name: "burger", component: Burger }, // 버거 메뉴 라우트
          { path: "Side", name: "side", component: Side }, // 사이드 메뉴 라우트
          { path: "Beverage", name: "beverage", component: Beverage }, // 음료 메뉴 라우트
        ],
      },
    ],
  },
  { path: "/mainpayment", name: "mainpayment", component: Mainpayment }, // 결제 페이지 라우트
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 브라우저 히스토리 API를 사용한 라우터 생성
  routes,
});

router.beforeEach((to, _from, next) => {
  const store = navRootStore(); // 네비게이션 스토어 인스턴스를 가져옵니다.
  const option = to.matched[to.matched.length - 1].name; // 현재 경로의 마지막 매치된 라우트 이름을 가져옵니다.
  if (option) {
    store.setSelectedOption(option); // 스토어의 선택된 옵션을 업데이트합니다.
  }
  next(); // 라우팅을 계속 진행합니다.
});

export default router; // 라우터 인스턴스를 내보냅니다.
