<template>
  <div>
    <nav-list :list="list" @itemClick="showMsg" />
    <div>
      <h2>{{ contentList[currentIndex] }}</h2>
    </div>
  </div>
</template>

<script>
import NavList from "./NavList.vue";
export default {
  data() {
    return {
      currentIndex: 0,
      list: ["衣服", "鞋子", "裤子"],
      contentList: ["衣服展示", "鞋子展示", "裤子展示"],
    };
  },
  components: { NavList },
  methods: {
    showMsg(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>