import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import { defineAsyncComponent } from "vue";
import HomeView from "../views/HomeView.vue";
// const flightList = defineAsyncComponent(() => import("flight/flightList"));

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/vue2-in-vue3",
    name: "vue2InVue3",
    component: () =>
      import(/* webpackChunkName: "vue2-in-vue3" */ "../views/Vue2InVue3.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
