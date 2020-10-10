<!--
  功能：功能描述
  作者：王代彬
  时间：2020年09月23日 09:18:15
  版本：v1.0
-->
<template>
    <div>
        <h3>解决自定义组件切换时数据不更新问题</h3>
        <el-tabs v-model="activeName">
            <el-tab-pane label="用户管理" name="first">
                <my-child key="xiaoming" :parentData="parentData1"></my-child>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">
                <my-child key="xiaohua" :parentData="parentData2"></my-child>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import MyChild from "./child.vue"
export default {
    components: {
          MyChild
    },
    data() {
        return {
            activeName: 'second',
            parentData1: {
                name: "小明",
            },
            parentData2: {
                name: "小花",
            },
        };
    },
    filter: {},
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
};
</script> 

<style lang='less' scoped>
</style>
