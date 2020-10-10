<!--
  功能：功能描述
  作者：王代彬
  时间：2020年09月28日 08:56:22
  版本：v1.0
-->
<template>
    <div>
        <p>开发过程中会出现刷新后页面的vuex的state数据初始化问题</p>
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
        </p>
        <p>
            {{$store.state.count}}
        </p>
        <el-button @click="change">点击改变</el-button>
    </div>
</template>

<script>
export default {
    name: "demo",
    props: {},
    components: {},
    data() {
        return {};
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        change(){
            this.$store.commit('SOME_MUTATION',5)
        }
    },
    created() {},
    mounted() {},
};
</script> 

<style lang='less' scoped>
</style>
