<template>
  <div class="box">
    <input type="text" v-model="seacrhName" />
    <transition-group
      tag="ul"
      name="ls"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <li v-for="(item, index) in showNames" :key="item" :data-index="index">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      names: [
        "abc",
        "cab",
        "nba",
        "whady",
        "lidaei",
        "hdbmm",
        "kacbobe",
        "jbames",
        "abc覃江",
        "abc覃江慧",
        "abc覃11",
        "abc覃22",
        "abc覃33",
        "abc覃44",
        "abc覃55",
      ],
      showNames: [],
      seacrhName: "",
    };
  },
  methods: {
    beforeEnter(el,done) {
      gsap.from(el, {
        opacity: 0,
        x: 100,
        delay: el.dataset.index * 0.1,
        onComplete: done,
      });
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        x:0,
        delay: el.dataset.index * 0.1,
        onComplete: done,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        x: 100,
        delay: el.dataset.index * 0.1,
        onComplete: done,
      });
    },
  },
  watch: {
    seacrhName(newV) {
      let rexp = new RegExp(newV);
      this.showNames = this.names.filter((item) => {
        return rexp.test(item);
      });
    },
  },
};
</script>

<style scoped>
.box {
  width:177px;
  height: 210px;
  overflow: hidden;
  margin: 100px auto;
  background-color: skyblue;
}
/* 
.ls-enter-from,
.ls-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.ls-enter-active,
.ls-leave-active {
  transition: 0.5s ease;
}

.ls-leave-active {
  position: absolute;
}

.ls-move {
  transition: 0.5s ease;
} */
.ls-move {
  transition: 0.5s ease;
} 
</style>