import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import { AxiosPlugin } from "./plugins/axios";
import "./plugins/case-ability";
import { i18n } from "./plugins/vue-i18n";

Vue.config.productionTip = false;
Vue.use(AxiosPlugin);

new Vue({
  router,
  vuetify,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
