<template>
  <div class="nav-wrapper">
    <div
      v-for="(item, index) in list"
      :key="item"
      :class="{ active: currentIndex === index }"
      @click="itemClick(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  emits: {
    itemClick: (index) => {
      console.log("拦截到" + index);
      return true;
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
        this.currentIndex = index
      this.$emit("itemClick", index);
    },
  },
};
</script>

<style scoped>
.nav-wrapper {
  display: flex;
  width: 200px;
  justify-content: space-around;
}

.nav-wrapper .active {
  text-decoration: underline;
  color: #f00;
}
</style>