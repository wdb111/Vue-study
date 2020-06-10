<template>
  <div>
    <p>我是子组件</p>
    <el-button @click="getVal">调用父组件函数</el-button>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {};
  },
  computed: {},
  methods: {
      getVal(){
          this.$emit("myEvent","子组件传递的参数")
      }
  },
  created() {}
};
</script> 

<style lang='less' scoped>
</style>
