import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import { defineAsyncComponent } from "vue";
import HomeView from "../views/HomeView.vue";
// const staticFlightList = defineAsyncComponent(
//   () => import("flight/staticFlightList")
// );
import { vue2ToVue32 } from "@/utils";
// const staticFlightList = () => import("flight/staticFlightList");
import staticFlightList from "flight/staticFlightList";
console.log(vue2ToVue32(staticFlightList), HomeView);

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
  {
    path: "/flight-list",
    name: "flightList",
    component: vue2ToVue32(staticFlightList),
  },
  {
    path: "/flight-list-inner",
    name: "flightListInner",
    component: () =>
      import(
        /* webpackChunkName: "flight-list-inner" */ "../views/FlightList.vue"
      ),
  },
  {
    path: "/hotel-list",
    name: "hotelList",
    component: () => import("hotel/hotelList2"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
