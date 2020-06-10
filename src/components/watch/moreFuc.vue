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
    name: [
      "sayName1",
      function(newVal, oldVal) {
        this.sayName2();
      },
      {
        handler: "sayName3",
        immaediate: true
      }
    ]
  },
  methods: {
    sayName1() {
      console.log("sayName1==>", this.name);
    },
    sayName2() {
      console.log("sayName2==>", this.name);
    },
    sayName3() {
      console.log("sayName3==>", this.name);
    }
  }
};
</script> 

<style lang='less' scoped>
</style>
