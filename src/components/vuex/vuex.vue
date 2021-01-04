<!--
  function: function description
  author: 王代彬
  email: 1303329454@qq.com
  time: 2020年04月29日 11:28:02
  version: v1.0
  Modification record: 
  Modification: 
  Modified by: 
  Modification time: 
-->
<template>
  <div>
    <div>Vuex数据：{{countAlias}}===={{countAlias1}}</div>
    <div>
        <el-button @click="SOME_MUTATION(5)">+5</el-button>
      <el-button @click="increment(10)">改变数据+10</el-button>
      <el-button @click="actionB">+1</el-button>
      <br>
      <hr>
      <h3>开发过程中会出现刷新后页面的vuex的state数据初始化问题</h3>
        <p>
            {{$store.state.count}}
        </p>
        <el-button @click="change">点击改变</el-button>
        <p>
            可以利用已有插件<a
                href="https://www.npmjs.com/package/vuex-along"
                target="_blank"
                >vue-along</a
            >来解决这个问题
        </p>
        <p>
            安装：
            <pre>
                npm install vuex-along --save
            </pre>
            <img src="@/assets/a.png" alt="">
            <br>
             <img src="@/assets/b.png" alt="">
        </p>
        
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    name: "demo",
    props: {},
    components: {},
    data() {
        return {};
    },
    computed: {
        ...mapState({ countAlias: "count", countAlias1: "count1" }),
    },
    methods: {
        ...mapMutations(["SOME_MUTATION"]),
        ...mapActions(["increment", "actionB"]),
        change() {
            // this.$store.commit("SOME_MUTATION", 5);
            this.SOME_MUTATION(5);
        },
    },
    created() {},
};
</script> 

<style scoped>
</style>
