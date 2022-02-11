<template>
  <div class="static-flight-list">
    <h3>机票航班列表</h3>
    <ul>
      <li v-for="flight in flightList" :key="flight.FlightNo">{{flight.TakeoffAirportName}} - {{flight.ArrivalAirportName}} 【{{flight.AirCompanyName}}】</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StaticFlightList',
  data() {
    return {
      flightList: [
        {FlightNo: "111", TakeoffAirportName: "双流机场", ArrivalAirportName: "浦东集成", AirCompanyName: "东方航空"},
        {FlightNo: "222", TakeoffAirportName: "首都机场", ArrivalAirportName: "大兴机场", AirCompanyName: "南方航空"},
        {FlightNo: "333", TakeoffAirportName: "大理机场", ArrivalAirportName: "迪拜机场", AirCompanyName: "阿联酋航空"},
        {FlightNo: "444", TakeoffAirportName: "浦东机场", ArrivalAirportName: "阿姆斯特丹机场", AirCompanyName: "荷兰皇家机场"},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
