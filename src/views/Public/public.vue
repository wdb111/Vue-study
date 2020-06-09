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
      <!-- 动态组件 -->
      <component :is="$route.params.title" ></component>
    </div>
</template>
<script>

export default {
  name: 'Router',
  props: {},
  components: {
    myComponent:()=>import("@/components/componentPage"),
    myRouter:()=>import("@/components/routerPage"),
    myAnimation:()=>import("@/components/transition&animation/animation"),
    myMixin:()=>import("@/components/mixin"),
    myVuex:()=>import("@/components/vuex/vuex"),
    myDeep:()=>import("@/components/deep"),
    myInstructions:()=>import("@/components/instructions"),
    myApi:()=>import("@/components/api")
  },
  data () {
   return {
     msg:"我是公共组件的父实例"
   }
  },
  computed: {},
  methods: {},
  created () {
  },
}
</script> 

<style scoped>
/* 深度作用选择器：两种方式 */
.public-box /deep/ .deep-child {
  color: red;
}
.public-box >>> .deep-child {
  font:bold 30px "微软雅黑"

}
</style>
