/*
* @Author: Just be free
* @Date:   2022-01-07 11:12:00
* @Last Modified by:   Just be free
* @Last Modified time: 2022-01-07 11:15:29
* @E-mail: justbefree@126.com
*/

import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/hotel/list",
      component: () => import("./views/hotelList.vue")
    }
  ]
});

export { router };
