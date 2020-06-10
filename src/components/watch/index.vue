<template>
  <div>
    <el-button
      v-for="(item,index) in data"
      :key="index"
      @click="change(item.componentId)"
    >{{item.title}}</el-button>
    <hr />
    <component :is="componentId"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "立即执行",
          componentId: "Now"
        },
        {
          title: "深度监听",
          componentId: "Deep"
        },
        {
          title: "监听执行多个方法",
          componentId: "MoreFuc"
        },
        {
          title: "监听多个变量",
          componentId: "MoreVar"
        }
      ],
      name: "Joe",
      componentId: ""
    };
  },
  components: {
    Now: () => import("./now"),
    Deep: () => import("./deep"),
    MoreFuc:()=>import("./moreFuc"),
    MoreVar:()=>import("./moreVar")
  },
  methods: {
    change(componentId) {
      this.componentId = componentId;
    }
  },
  created() {}
};
</script> 

<style lang='less' scoped>
</style>
