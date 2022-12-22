<template>
  <div id="layout">
    <top-bar />
    <div class="contents">
      <nav-bar />
      <app-main />
    </div>

  </div>
</template>

<script>
import TopBar from "@/layout/TopBar/TopBar";
import NavBar from "@/layout/NavBar/NavBar";
import AppMain from "@/layout/AppMain";
export default {
  name: "LayoutIndex",
  components: {
    AppMain,
    TopBar,
    NavBar,
  }
}
</script>

<style scoped>
.contents {
  display: flex;
  width: 100%;
}
</style>
