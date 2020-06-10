<template>
  <div>
    <el-input v-model="msgObj.msg1"></el-input>
    <el-input v-model="msgObj.msg2"></el-input>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      msgObj: {
        msg1: "apple",
        msg2: "banana"
      }
    };
  },
  compouted: {
    // msgObj() {
    //   //   const { msg1, msg2 } = this;
    //   return {
    //     msg1: this.msg1,
    //     msg2: this.msg2
    //   };
    // }
  },
  watch: {
    msgObj: {
      handler(newVal, oldVal) {
        console.log(6666,newVal, oldVal);
        if (newVal.msg1 != oldVal.msg1) {
          this.$message.success("msg1 is change");
        }
        if (newVal.msg2 != oldVal.msg2) {
          this.$message.success("msg2 is change");
        }
      },
      deep: true
    }
  }
};
</script> 

<style lang='less' scoped>
</style>
