<template>
  <div class="hotel-list">
    <h2>hotel list</h2>
    <p>这个是路由参数，如果通过模块联邦的方式可以打开控制台查看 {{routerParams}}</p>
    <ul>
      <li v-for="hotel in hotelList" :key="hotel.HotelId">{{ hotel.HotelName }}</li>
    </ul>
    <div>{{errormsg}}</div>
  </div>
</template>

<script type="text/javascript">
  import http from "@/lib/http";
  export default {
    name: "HotelList",
    data() {
      return {
        errormsg: "",
        hotelList: [],
        routerParams: ""
      }
    },
    methods: {
      getHotelList() {
        const params = {
          ArrivalDate: "2022-01-11",
          CityName: "北京",
          DepartureDate: "2022-01-12",
          ElongIdList: [],
          GeoId: "L00001",
          HighRate: 450,
          InvoiceType: "all",
          LowRate: 0,
          PageIndex: 1,
          PayType: "all",
          Platform: "schedule",
          Policy: 450,
          Position: null,
          QueryText: "",
          QueryType: 0,
          Sort: "0",
          StarRate: "0,1,2,3,4,5",
          authenticate: "ZzI5Ty9GQTJKSXVMVnhLZFlpTWZnRHFKZ2JMV2JzZVVqQ1ZNOFUyWWRKZllGREV6TW9qQ2dXQTNVY3JzSURySWxGMnJSSS9TU0Z3dXpVenhSVVcwVHc9PQ==",
          lang: "zh-CN"
        }
        http("postJSON")("/Hotel/Hotels", params).then(res => {
          if (res.Code === 0) {
            console.log(res);
            this.hotelList = res.Result;
          } else {
            this.errormsg = JSON.stringify(res);
          }
        }).catch(err => {
          console.log("请求失败", err);
        })
      }
    },
    mounted() {
      console.log("这个是路由参数 - ", this.$route.query);
      this.routerParams = JSON.stringify(this.$route.query);
      this.getHotelList();
    }
  }
</script>
<style type="text/css">
  ul li {
    list-style-type: none;
    margin: 5px auto;
  }
</style>