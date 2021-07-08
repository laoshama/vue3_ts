<template>
  <div>
    <button @click="addNum">添加</button>
    <button @click="removeNum">删除</button>
    <button @click="shuffleNum">数字洗牌</button>
    <button @click="sortNum">重新排序</button>
    <transition-group tag="p" name="laosha">
      <span v-for="item in numbers" :key="item">{{ item }}</span>
    </transition-group>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      addNumber: 10,
    };
  },
  methods: {
    addNum() {
      this.numbers.splice(this.randomIndex(), 0, this.addNumber++);
    },
    removeNum() {
      this.numbers.splice(this.randomIndex(), 1);
    },
    shuffleNum() {
      this.numbers = _.shuffle(this.numbers);
    },
    sortNum() {
      this.numbers.sort((a, b) => a - b);
    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
  },
};
</script>

<style scoped>
span {
  display: inline-block;
  margin: 0 20px;
}

.laosha-enter-from,
.laosha-leave-to {
  transform: translateY(20px);
  opacity: 0;
  background-color: #f00;
}

.laosha-leave-active {
  position: absolute;
}

.laosha-enter-active,
.laosha-leave-active {
  transition: 1s ease;
}

.laosha-move {
  transition: 1s ease;
}
</style>