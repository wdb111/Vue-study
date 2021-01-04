<!--
  function: function description
  author: 王代彬
  email: 1303329454@qq.com
  time: 2020年05月11日 16:06:39
  version: v1.0
  Modification record: 
  Modification: 
  Modified by: 
  Modification time: 
-->
<template>
    <div>
        <h3>自定义指令</h3>
        <p>自动聚焦</p>
        <!-- <input autofocus type="text" placeholder="请输入" /> -->
        <input v-focus v-model="msg" type="text" placeholder="请输入" />
        <div v-demo:foo.a.b="message"></div>
        <hr />
        <h3>通过自定义指令实现按钮权限</h3>
        <el-button @click="change">更改权限</el-button>
        <!-- 全局自定义指令 -->
        <el-button type="primary" v-powerInstruct >操作按钮</el-button>
        <p>自定义指令：</p>
         <h1 v-demoInstruct="title"></h1>
    </div>
</template>

<script>
import {mapMutations } from 'vuex'
export default {
    name: "Instructions",
    data() {
        return {
            message: "123",
            msg: "",
            value: false,
            title:'这是标题'
        };
    },
    directives: {//局部自定义指令
        focus: {
            //指令的定义
            inserted: function (el) {
                el.focus();
            },
        },
        demo: {
            bind: function (el, binding, vnode) {
                var s = JSON.stringify;
                el.innerHTML =
                    "name: " +
                    s(binding.name) +
                    "<br>" +
                    "value: " +
                    s(binding.value) +
                    "<br>" +
                    "expression: " +
                    s(binding.expression) +
                    "<br>" +
                    "argument: " +
                    s(binding.arg) +
                    "<br>" +
                    "modifiers: " +
                    s(binding.modifiers) +
                    "<br>" +
                    "vnode keys: " +
                    Object.keys(vnode).join(", ");
            },
        }
    },
    methods: {
      ...mapMutations([
      // `mapMutations` 也支持载荷：
      'PERMISSION' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
      change(){
        this.PERMISSION();
        this.$message.success('权限修改成功，刷新页面观察效果')
            // this.$store.commit('SOME_MUTATION',5)
        }
    },
    created() {},
};
</script> 

<style scoped>
</style>
