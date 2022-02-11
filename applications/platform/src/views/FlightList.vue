<template>
  <div class="about">
    <h4>this is flight list loaded by DOM</h4>
    <div id="flightList"></div>
    <flight-list></flight-list>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { vue2ToVue3 } from "@/utils";
import flightList from "flight/flightList";

@Options({
  name: "FlightListInner",
  components: {
    FlightList: vue2ToVue3(flightList, "flightList"),
  },
})
export default class FlightListInner extends Vue {}
</script>
