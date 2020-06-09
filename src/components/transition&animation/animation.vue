<!--
  function: function description
  author: 王代彬
  email: 1303329454@qq.com
  time: 2020年04月27日 15:47:15
  version: v1.0
  Modification record: 
  Modification: 
  Modified by: 
  Modification time: 
-->
<template>
  <div>
    <h1>过渡&动画</h1>
    <button v-on:click="show = !show">Toggle</button>
    <button v-on:click="show1 = !show1">Toggle1</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <transition name="slide-fade">
      <p v-if="show1">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      show: false,
      show1: false
    };
  },
  methods: {}
};
</script> 

<style scoped>
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-to {
  color: red;
}
.fade-leave {
  font-size: 40px;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
