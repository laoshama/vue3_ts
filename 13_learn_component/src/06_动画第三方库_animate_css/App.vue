<template>
  <div class="box">
    <button @click="isShow = !isShow">toggle</button>
    <transition
      name="laosha"
      enter-active-class="animate__animated animate__bounceInLeft "
      leave-active-class="animate__animated animate__bounceOutRight"
      appear
    >
      <h2 v-show="isShow">animate.css库的使用</h2>
    </transition>
  </div>
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
.box {
  width: 500px;
  height: 200px;
  margin: 200px auto;
}
</style>