/*
 * @Author: Just be free
 * @Date:   2021-12-23 10:21:18
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-12-23 10:21:31
 * @E-mail: justbefree@126.com
 */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
