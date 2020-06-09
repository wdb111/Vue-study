<!--
  function: function description
  author: 王代彬
  email: 1303329454@qq.com
  time: 2020年04月27日 14:48:25
  version: v1.0
  Modification record: 
  Modification: 
  Modified by: 
  Modification time: 
-->
<template>
    <div>
       普通组件
       <el-button @click="relyAdd(11)">父组件数变为11</el-button>
    </div>
</template>

<script>
export default {
  name: 'ordinary',
  props: {},
  components: {},
  inject:["relyAdd"],//依赖注入
  data () {
   return {}
  },
  computed: {},
  methods: {
  },
  created () {
  },
}
</script> 

<style scoped>

</style>
