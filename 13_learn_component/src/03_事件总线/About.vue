<template>
  <div>
    <h2>About</h2>
    <button @click="btnClick">about点击</button>
  </div>
</template>

<script>
import emitter from "./eventBus";

export default {
  methods: {
    btnClick() {
      emitter.emit("btnClick", { name: "老沙", age: 18 });
      console.log(1111111111);
    },
  },
};
</script>

<style scoped>
</style>