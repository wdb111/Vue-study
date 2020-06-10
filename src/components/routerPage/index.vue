<template>
  <div class="hello">
    <h1>路由页面</h1>
    <div>
      <el-button @click="goPage('1') ">路由参数解耦</el-button>
      <el-button @click="goPage('2')">路由参数解耦(函数模式)</el-button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "routerPage",
  data() {
    return {};
  },
  methods: {
    goPage(type) {
      if (type === "1") {
        this.$router.push("/router-parmas/123456");
      } else {
        this.$router.push({
          path: "/router-parmas2",
          query: {
            menuId: "123456789"
          }
        });
      }
    }
  }
};
</script>

<style scoped>
</style>
