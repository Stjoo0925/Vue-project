import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import plugins from './plugins/';
import service from './service';


Vue.config.productionTip = false;

createApp(App).mount('#app')

new Vue({
    router,
    store,
    plugins,
    service,
    render: h => h(App)
  }).$mount('#app');