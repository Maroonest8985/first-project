<template>
  <div class="app-main">
    <transition name="fade-transform" mode="out-in"></transition>
    <router-view :key="key" />
  </div>
</template>

<script>

export default {
  name: "AppMain",
  components: {
  },
  computed: {
    key() {
      return this.$route.path;
    }
  }
}
</script>

<style scoped>
.app-main {
  width: 100%;
  position: relative;
  overflow : hidden;
}
</style>
