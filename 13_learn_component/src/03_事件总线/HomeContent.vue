<template>
  <h2>HomeContent</h2>
  <h2>name:{{ name }}</h2>
  <h2>age:{{ age }}</h2>
</template>

<script>
import emitter from "./eventBus";
export default {
  data() {
    return {
      name: "",
      age: 0,
    };
  },
  methods:{
    handleBtnClick({ name, age }){
      this.name = name;
      this.age = age;
    }
  },
  created() {
    emitter.on("btnClick", this.handleBtnClick);
  },
  beforeUnmount() {
    emitter.off('btnClick',this.handleBtnClick)
  },
};
</script>

<style scoped>
</style>