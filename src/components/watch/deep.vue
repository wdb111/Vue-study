<template>
  <div>
    <el-input v-model="studen.skill.run.speed"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studen: {
        name: "Joe",
        skill: {
          run: {
            speed: "fast"
          }
        }
      }
    };
  },
  watch: {
    studen: {
      handler: "sayName",
      deep: true
    }
  },
  methods: {
    sayName() {
      this.$message.success("触发watch了");
    }
  }
};
</script> 

<style lang='less' scoped>
</style>
