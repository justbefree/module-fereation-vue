/*
* @Author: Just be free
* @Date:   2022-01-04 13:30:56
* @Last Modified by:   Just be free
* @Last Modified time: 2022-01-13 12:06:00
* @E-mail: justbefree@126.com
*/
import VueRouter from 'vue-router'

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/flight/list",
      component: () => import(/* webpackChunkName: "flight-list" */ './components/flightList.vue')
    },
    {
      path: "/train/list",
      component: () => import("train/trainListLayout")
    }
  ]
})

export { router }