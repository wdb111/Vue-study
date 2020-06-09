<!--
  function: function description
  author: 王代彬
  email: 1303329454@qq.com
  time: 2020年04月27日 16:19:11
  version: v1.0
  Modification record: 
  Modification: 
  Modified by: 
  Modification time: 
-->
<template>
  <div>
    <h1>混入（mixin）</h1>
    <div>
      2+3
      <el-button @click="add">=</el-button>
      {{sum}}
    </div>
  </div>
</template>

<script>
import Mixin from "./mixin";
export default {
  name: "demo",
  mixins: [Mixin],
  data() {
    return {
      sum: ""
    };
  },
  methods: {
    add() {
      this.sum = this.publicAdd(2, 3);
    }
  },
  created() {}
};
</script> 

<style scoped>
</style>
