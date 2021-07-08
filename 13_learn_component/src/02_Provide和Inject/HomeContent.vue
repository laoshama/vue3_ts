<template>
  <h2>HomeContent</h2>
  <h2>name:{{ name }}</h2>
  <h2>age:{{ age }}</h2>
</template>

<script>
export default {
  inject: ["name", "age"],
};
</script>

<style scoped>
</style>