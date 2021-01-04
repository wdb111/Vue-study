<!--
  function: function description
  author: 王代彬
  email: 1303329454@qq.com
  time: 2020年04月24日 17:49:10
  version: v1.0
  Modification record:
  Modification:
  Modified by:
  Modification time:
-->
<template>
  <div class="public-box">
    <h3>{{$route.params.title}}</h3>
    <p>{{msg}}</p>
    <!-- 动态组件 -->
    <component :is="$route.params.title"></component>
  </div>
</template>
<script>
export default {
  name: "Router",
  props: {},
  components: {
    myComponent: () => import("@/components/componentPage"),
    myAnimation: () => import("@/components/transition&animation/animation"),
    myMixin: () => import("@/components/mixin"),
    myVuex: () => import("@/components/vuex/vuex"),
    myDeep: () => import("@/components/deep"),
    myInstructions: () => import("@/components/instructions"),
    myApi: () => import("@/components/api"),
    componentOfFunction: () => import("@/components/component-function"),
    myWatch: () => import("@/components/watch"),
    myEvent:()=>import("@/components/$event"),
    myModel:()=>import("@/components/my-model"),
    myCustomComponent:()=>import("@/components/custom-component"),
    customComponents:()=>import("@/components/custom-component/btn.vue"),
    myFilters:()=>import('@/components/filters')

  },
  data() {
    return {
      msg: "我在公共组件的父实例中"
    };
  },
  computed: {},
  methods: {},
  created() {}
};
</script>

<style scoped>
/* 深度作用选择器：两种方式 */
.public-box /deep/ .deep-child {
  color: red;
}
.public-box >>> .deep-child {
  font: bold 30px "微软雅黑";
}
</style>
