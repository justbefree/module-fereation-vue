/*
 * @Author: Just be free
 * @Date:   2021-12-23 10:10:07
 * @Last Modified by:   Just be free
 * @Last Modified time: 2021-12-23 10:14:34
 * @E-mail: justbefree@126.com
 */

import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
