<template>
  <div>
    <el-input v-model="name"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Joe"
    };
  },
  watch: {
    name: {
      handler: "sayName",
      immediate: true
    }
  },
  methods: {
    sayName() {
        this.$message.success('触发watch了')
    }
  },
  created() {}
};
</script> 

<style lang='less' scoped>
</style>
