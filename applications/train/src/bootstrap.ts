/*
 * @Author: Just be free
 * @Date:   2021-12-23 10:21:18
 * @Last Modified by:   Just be free
 * @Last Modified time: 2022-02-11 13:44:41
 * @E-mail: justbefree@126.com
 */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// 引入第三方库
import Earth from "@dullar/earth";
Vue.use(Earth);

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
