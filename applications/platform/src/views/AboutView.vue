<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hotel-list></hotel-list>
    <!-- <flight-list></flight-list> -->
    <div id="flightList"></div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { defineAsyncComponent } from "vue";
import flightList from "flight/flightList";
import { vue2ToVue3 } from "@/utils";
// const flightList = () => import("flight/flightList");
// const hotelList = () => import("hotel/hotelList");
// import hotelList from "hotel/hotelList";

// const trainList = () => import("train/trainList");
console.log("flightList", flightList);
// console.log("hotelList = ", hotelList);

@Options({
  name: "AboutView",
  components: {
    flightList: vue2ToVue3("flightList", flightList),
    hotelList: defineAsyncComponent(() => import("hotel/hotelList")),
  },
})
export default class AboutView extends Vue {}
</script>
