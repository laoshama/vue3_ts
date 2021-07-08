<template>
  <div class="box">
    <button @click="handleAnimate">toggle</button>
    <transition
      name="laosha"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      :css="false"
    >
      <h2 id="my" v-show="isShow">gsap库的使用</h2>
    </transition>

    <input type="number" step="100" v-model="counter" />
    <h2>当前计数：{{ newCounter.toFixed(0) }}</h2>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      isShow: true,
      counter: 0,
      newCounter: 0,
    };
  },
  methods: {
    handleAnimate() {
      this.isShow = !this.isShow;
    },
    enter(el, done) {
      gsap.to(el, {
        rotation: 27,
        x: 100,
        duration: 1,
        onComplete: done,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        rotation: 0,
        x: 0,
        duration: 1,
        onComplete: done,
      });
    },
  },
  watch: {
    counter() {
      gsap.to(this, { newCounter: this.counter, duration: 1 });
    },
  },
};
</script>

<style scoped>
.box {
  width: 400px;
  height: 200px;
  margin: 200px auto;
}
#my {
  width: 100px;
  height: 100px;
  background-color: #f00;
}
</style>