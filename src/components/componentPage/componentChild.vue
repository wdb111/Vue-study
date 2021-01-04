<!--
  function: function description
  author: 王代彬
  email: 1303329454@qq.com
  time: 2020年04月26日 17:33:11
  version: v1.0
  Modification record: 
  Modification: 
  Modified by: 
  Modification time: 
-->
<template>
  <div>
    <p>我是子组件==========</p>
    <p>父组件数据：{{num}}</p>
    <p>子组件数据：{{childMsg}}</p>
    <el-button @click="changeParent">父组件数+2</el-button>
    <hr />
    <p>插槽===========</p>
    <slot>插槽默认内容</slot>
    <br>
    插槽1：
    <slot name="header" v-bind:user="user">{{user.name}}</slot>
    插槽2：
    <slot name="body" :user="user">插槽默认内容</slot>
    <slot name="body1" :user="user">插槽默认内容</slot>
    插槽3：
    <slot name="footer">插槽默认内容</slot>
  </div>
</template>

<script>
export default {
  name: "demo",
  props: {
    num: {
      type: Number
    }
  },
  components: {},
  data() {
    return {
      childMsg: 20,
      user:{
        name:"小明",
        age:20
      }
    };
  },
  computed: {},
  methods: {
    add() {
      this.childMsg++;
    },
    changeParent() {
      let newNum = this.num + 2;
      this.$emit("parentEvent", { num: newNum });
    }
  },
  created() {}
};
</script> 

<style scoped>
</style>
