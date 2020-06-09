<template>
  <div class="hello">
     <div class="user">{{nickName}}</div>
    <div class="title">
      <el-button v-for="(item,index) in dataList" :key="index" @click="goPage(item.url)">{{item.title}}</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { getUsers } from "@/api/load";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg:"根实例",
      nickName: "",
      dataList:[
        {
          title:"组件",
          url:"myComponent"
        },
        {
          title:"路由",
          url:"myRouter"
        },
        {
          title:"过渡&动画",
          url:"myAnimation"
        },
        {
          title:"混入",
          url:"myMixin"
        },
        {
          title:"状态管理",
          url:"myVuex"
        },
        {
          title:"深度作用选择器",
          url:"myDeep"
        },
        {
          title:"自定义指令",
          url:"myInstructions"
        },
        {
          title:"API",
          url:"myApi"
        }
      ]
    };
  },
  methods: {
    goPage(title){
      this.$router.push("/router/"+title)

    }
  },
  created() {
    getUsers().then(res => {
      this.nickName = res.data.nickName;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding: 20px;
}
.user {
  text-align: center;
  font:   bold 20px '微软雅黑';
}
</style>
