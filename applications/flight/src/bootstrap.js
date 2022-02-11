/*
* @Author: Just be free
* @Date:   2021-12-23 10:24:13
* @Last Modified by:   Just be free
* @Last Modified time: 2022-01-04 13:40:11
* @E-mail: justbefree@126.com
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { router } from './router'

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')