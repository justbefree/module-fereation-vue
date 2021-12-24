<template>
  <div class="hotel-list">
    <h3>酒店列表</h3>
    <ul>
      <li>七天酒店【世纪大道店】</li>
      <li>汉庭酒店【人民广场店】</li>
      <li>全季酒店 【新天地店】</li>
      <li>如家快捷酒店 【莘庄地铁站店】</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HotelList',
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
