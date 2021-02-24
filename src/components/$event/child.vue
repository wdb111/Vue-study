<template>
    <div class="bbb">
      <div class="ccc">
 <p>
            我是子组件中的随机颜色：{{ msg }}
            <el-color-picker v-model="msg"></el-color-picker>
        </p>
        <el-button @click="getVal">调用父组件函数</el-button>
      </div>
       
    </div>
</template>

<script>
export default {
    name: "demo",
    data() {
        return {
            msg: 0,
        };
    },
    computed: {},
    methods: {
        getVal() {
            this.$emit("myEvent", "子组件传递的参数");
        },
    },
    created() {
        let str = Math.random().toString(16).substr(-6);
        this.msg = '#'+str;
        console.log("created");
    },
    mounted() {
        console.log("mounted");
    },
};
</script> 

<style scoped>
.ccc {
  height: 100%;
}
</style>
