<!--
  功能：功能描述
  作者：王代彬
  时间：2021年02月25日 17:23:21
  版本：v1.0
-->
<template>
    <div>
        <child :level="level">Hello world!</child>
    </div>
</template>

<script>
import Vue from "vue";
Vue.component("child", {
    render(h) {
        const tag = ["div", "p", "strong", "h1", "h2", "textarea"][this.level];
        return h(tag, this.$slots.default);
    },
    props: {
        level: { type: Number, required: true },
    },
});
export default {
    name: "demo",
    props: {},
    components: {},
    data() {
        return {
            level: 3,
        };
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
