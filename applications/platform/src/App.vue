<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/vue2-in-vue3">vue2-in-vue3</router-link>|
    <router-link to="/flight-list">flight-list-vue-router</router-link>|
    <router-link to="/flight-list-inner">flight-list-inner</router-link>|
    <router-link to="/hotel-list">hotel-list-vue-router</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
