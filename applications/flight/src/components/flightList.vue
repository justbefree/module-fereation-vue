<template>
  <div class="flight-list">
    <h3>机票航班列表</h3>
    <ul>
      <li>上海 - 北京 【东方航空】</li>
      <li>上海 - 迪拜 【阿联酋航空】</li>
      <li>上海 - 北京 【厦门航空】</li>
      <li>日本 - 北京 【春秋航空】</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FlightList',
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
