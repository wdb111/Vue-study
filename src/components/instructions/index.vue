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
    
  </div>
</template>

<script>
export default {
  name: "Instructions",
  data() {
    return {
      message: "123",
      msg: "",
      value: false
    };
  },
  directives: {
    focus: {
      //指令的定义
      inserted: function(el) {
        el.focus();
      }
    },
    demo: {
      bind: function(el, binding, vnode) {
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
      }
    }
  },
  methods: {
  },
  created() {}
};
</script> 

<style scoped>
</style>
