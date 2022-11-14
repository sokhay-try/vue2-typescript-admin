import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import { AxiosPlugin } from "./plugins/axios";
import "./plugins/case-ability";

Vue.config.productionTip = false;
Vue.use(AxiosPlugin);

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
