<template>
  <div class="app-main">
    <transition name="fade" mode="out-in">
      <router-view :key="key" />
    </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
