<template>
  <div id="app">
    <TopBar></TopBar>
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar/NavBar";
import TopBar from "@/components/TopBar/TopBar";
export default {
  name: 'App',
  components: {
    TopBar,
    NavBar
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
