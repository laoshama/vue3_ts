<template>
  <button @click="isShow = !isShow">toggle</button>
  <transition name="laosha" :duration="2000">
    <div v-show="isShow" class="box"></div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.box{
    width: 200px;
    height: 200px;
    background-color: #f00;
}

.laosha-enter-active {
   animation: bounce 1s ease;
}

.laosha-leave-active {
    animation: bounce 1s reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>