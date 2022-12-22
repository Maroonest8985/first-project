<template>
  <div id="app">
    <LayoutIndex>
      <router-view />
    </LayoutIndex>
  </div>
</template>
<script>

import LayoutIndex from "@/layout";
export default {
  name: 'App',
  components: {
    LayoutIndex,
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
}
</style>
