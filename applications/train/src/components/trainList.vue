<template>
  <div class="train-list">
    <h3>火车列表</h3>
    <ul>
      <li>上海虹桥 - 北京南【G2】</li>
      <li>上海虹桥 - 苏州站【G112】</li>
      <li>武汉站 - 上海站 【K1223】</li>
      <li>阳澄湖站 - 苏州北站 【G233】</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TrainList extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
a {
  color: #42b983;
}
</style>
