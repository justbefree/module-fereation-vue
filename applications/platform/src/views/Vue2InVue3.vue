<template>
  <div class="about">
    <h4>There you are</h4>
    <count-index :count="count"></count-index>
    <div id="vue2Button"></div>
    <vue2-button @btnClick="inc" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CountIndex from "@/components/CountIndex.vue";
import { vue2ToVue3 } from "@/utils";
import Vue2Button from "flight/vue2Button";

@Options({
  name: "Vue2InVue3",
  components: {
    CountIndex,
    vue2Button: vue2ToVue3(Vue2Button, "vue2Button"),
  },
})
export default class Vue2InVue3 extends Vue {
  public count = 0;
  public inc(): void {
    this.count++;
  }
}
</script>
