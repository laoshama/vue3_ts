<template>
  <Home />
</template>

<script>
import Home from "./Home.vue";
export default {
  components: {
    Home,
  },
  provide: {
    name: "老沙",
    age: 18,
  },
};
</script>

<style scoped>
</style>