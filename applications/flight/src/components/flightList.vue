<template>
  <div class="flight-list">
    <h3>机票航班列表</h3>
    <ul>
      <li v-for="flight in flightList" :key="flight.FlightNo">{{flight.TakeoffAirportName}} - {{flight.ArrivalAirportName}} 【{{flight.AirCompanyName}}】</li>
    </ul>
    <div class="error-message">
      <pre>
        {{error}}
      </pre>
    </div>
  </div>
</template>

<script>
import http from "@/lib/http";
export default {
  name: 'FlightList',
  data() {
    return {
      flightList: [],
      error: ""
    }
  },
  methods: {
    getFlightList() {
      const params = {
        TakeoffDate: "2022-01-20",
        DepartureCity: "上海",
        ArrivalCity: "北京",
        Standard: JSON.stringify({"discount":"经济舱8折及以下","timestandard":"不限","statue":"1","limitAmount":"0","isFilterSuperCabin":false,"upgradeFlag":"0"}),
        OrderId: "",
        DepartureCityCode: "SHA",
        ArrivalCityCode: "BJS",
        Passengers: [],
        lang: "zh-CN",
        ExtendInfo: JSON.stringify({"CurrentOrderId":"","IsApproved":false,"tripType":"0","FormId":"CLSQ2201040268","flightExceedBookVO":"","hasFlightExceedControl":false}),
        trip: "",
        authenticate: "SE1xc2NzeW9YcUhMbWQxTmpUcFJMdlVoSWJlUGpkQk1IempaQXRvdmdhTEZaVk5RYVZwQjg4NWRWeGk3d1pzcnl1Qm9adVdSM3owdkxoVitueDhCVEE9PQ=="
      };
      http("post")("/flight/getFlightList", params).then(res => {
        console.log("获取的结果", res);
        if (res.Code === "SUCCESS") {
          this.flightList = res.Result.flightInformation;
        } else {
          this.error = JSON.stringify(res);
        }
      }).catch(err => {
        console.log("请求失败", err);
      })
    }
  },
  mounted() {
    this.getFlightList();
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
