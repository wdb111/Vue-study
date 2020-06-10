<template functional>
  <div class="list">
    <h3>我是函数式组件，数据来自父组件</h3>
    <div class="item" v-for="item in props.list" :key="item.id" @click="props.itemClick(item)">
      <p>{{item.title}}</p>
      <p>{{item.content}}</p>
    </div>
    <!-- 这里的函数及绑定值无效 -->
    <el-button @click="num++">{{num}}</el-button>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      num: 0
    };
  },
  methods: {},
  created() {}
};
</script> 

<style lang='less' scoped>
</style>
