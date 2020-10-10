<!--
  功能：功能描述
  作者：王代彬
  时间：2020年09月23日 09:18:15
  版本：v1.0
-->
<template>
    <div>
        <p>{{parentData.name}}</p>
    </div>
</template>

<script>
export default {
  name: 'MyChild',
  props: {
      parentData:{
          type:Object,
          default:()=>{}
      }
  },
  data () {
   return {}
  },
  methods: {},
  created () {
  },
}
</script> 

<style lang='less' scoped>

</style>
