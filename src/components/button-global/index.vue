<!--
  功能：功能描述
  作者：王代彬
  时间：2020年12月30日 17:16:04
  版本：v1.0
-->
<template>
    <div>
        <el-button style="color:red" @click="num++">我是全局组件{{num}}</el-button>
    </div>
</template>

<script>
export default {
  name: 'demo',
  props: {},
  components: {},
  data () {
   return {
       num:0
   }
  },
  filters: {},
  computed: {},
  watch: {},
  methods: {},
  created () {
  },
  mounted () {
  },
}
</script> 

<style lang='less' scoped>

</style>
