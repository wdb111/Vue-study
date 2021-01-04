<!--
  功能：功能描述
  作者：王代彬
  时间：2020年12月31日 09:05:13
  版本：v1.0
-->

<!--此处用的是函数式组件-->
<template functional>
    <el-submenu
        v-if="props.itemData.children && props.itemData.children.length"
        :index="'/router/' + props.itemData.url"
    >
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ props.itemData.title }}</span>
        </template>
        <!-- 递归组件 -->
        <my-nav
            v-for="(item, index) in props.itemData.children"
            :key="index"
            :itemData="item"
        ></my-nav>
    </el-submenu>
    <el-menu-item v-else :index="'/router/' + props.itemData.url">
        <i class="el-icon-location"></i>
        <span>{{ props.itemData.title }}</span>
    </el-menu-item>
</template>

<script>
export default {
    name: "my-nav",
    // props: {
    //     // itemData: {
    //     //     type: Object,
    //     //     default: () => {},
    //     // },
    // },
    components: {},
    data() {
        return {};
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
};
</script>

<style lang='less' scoped>
</style>
