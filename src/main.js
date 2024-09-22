import "./assets/css/Lee-css.css";
import "./assets/css/reset.css";
import "./assets/css/font.css";
import "./assets/css/index.css";
import "./assets/css/mainmenu-popup.css";
import "./assets/css/payment.css";
import "./assets/css/global.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");
