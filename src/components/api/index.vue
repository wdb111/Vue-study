<!--
  function: function description
  author: 王代彬
  email: 1303329454@qq.com
  time: 2020年05月11日 16:51:35
  version: v1.0
  Modification record: 
  Modification: 
  Modified by: 
  Modification time: 
-->
<template>
  <div>
    <h3>API</h3>
    <p>实例 property</p>
    <div>vm.$options：用于获取data之外的自定义属性————》》》{{a}}</div>
    <div>vm.$parent：父实例————》》》{{b}}</div>
  </div>
</template>

<script>
export default {
  name: "demo",
  props: {},
  components: {},
  myPrototype:"我是自定义属性",
  data() {
    return {
        a:"",
        b:"",
    };
  },
  computed: {
  },
  methods: {},
  created() {
      this.a=this.$options.myPrototype;
      this.b=this.$parent.msg;
  }
};
</script> 

<style scoped>
</style>
