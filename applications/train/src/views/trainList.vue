<template>
  <div class="train-list">
    <h2>train list</h2>
    <span @click="handleClick" class="train-toast">点击我会弹框</span>
    <div class="train-list-box">
      <ul>
        <li
          v-for="train in trainList"
          :key="
            train.train_no +
            '-' +
            train.train_start_date +
            train.run_time_minute
          "
        >
          {{ train.from_station_name }} - {{ train.end_station_name }}
        </li>
      </ul>
    </div>
    <div class="error-message">{{ errormsg }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import http from "@/lib/http";
import dayjs from "dayjs";
const now = dayjs();
import "./trainlist.scss";
import { YnToast } from "@dullar/earth";

@Component({
  name: "TrainList",
  components: {},
})
export default class TrainList extends Vue {
  public trainList = [] as Array<any>;
  public errormsg = "";
  getTrainList() {
    const params = {
      fromGeoId: "L00509",
      toGeoId: "L01086",
      fromCityName: "上海",
      toCityName: "武汉",
      needdistance: 1,
      lang: "zh-CN",
      type: 1,
      trip: "",
      from_station: "SHH",
      to_station: "WHN",
      train_date: "2022-01-14",
      purpose_codes: "ADULT",
      train_type: 0,
      authenticate:
        "allrd2RDeHJzeG9rRFJ2TTl1Ri9sN0FEVk5Zb0wwSGI4WXMvMnk0VnBkN25OYWJxaExSOGdkbGFYdGtuNGNYaStOQzl5QXBsWTNvVzVra2I0TjNYaVE9PQ==",
    };
    http("post")("/ykb_train/train_query", params)
      .then((res: any) => {
        if (res.flagcode === "200") {
          this.trainList = res.data;
        } else {
          this.errormsg = res.flagmsg;
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  handleClick() {
    // this.Toast("我弹出来了");
    YnToast("我弹出来了");
  }
  mounted() {
    this.getTrainList();
    console.log("当前时间是什么", now.format());
  }
}
</script>

<style type="text/css" scoped="scoped">
.train-toast {
  background: green;
}
</style>
