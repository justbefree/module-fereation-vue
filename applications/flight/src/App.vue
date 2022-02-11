<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Flight app"/>
    <router-link to="/">机票首页</router-link> |
    <router-link to="/flight/list">机票列表页</router-link> |
    <router-link to="/train/list">火车列表页</router-link>
    <!-- <trainList></trainList> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './flight.css'
// const trainList = () => import("train/trainList");
export default {
  name: 'App',
  components: {
    HelloWorld,
    // trainList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
