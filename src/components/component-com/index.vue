<!--
  功能：功能描述
  作者：王代彬
  时间：2021年02月25日 15:48:50
  版本：v1.0
-->
<template>
    <div>
        <h2>
            props、$emit、$refs、$attrs、$listeners、provide、inject、$parent、$children、
            .sync、EventBus
        </h2>
        <p>父组件:</p>
        <div>
            <button @click="getChild('ref')">获取子组件数据($refs)</button>
            <button @click="getChild('child')">
                获取子组件数据($children)
            </button>
            <button @click="setData">全局eventBus（main.js中声明）</button>
            <p>ref：{{ refVal }}</p>
            <p>emit：{{ emitVal }}</p>
            <p>listeners：{{ listenersVal }}</p>
            <p>injectVal：{{ injectVal }}</p>
            <p>childrenVal：{{ childrenVal }}</p>
            <p>parentVal：{{ parentVal }}</p>
            <p>.sync：{{ syncVal }}</p>
        </div>
        <hr />
        <Child
            @get-msg="getMsg"
            :msg="msg"
            ref="child"
            attrsMsg="我是没有在props中定义的属性"
            :title.sync="syncVal"
        ></Child>
        <h2>vuex、插槽（v-slot）、路由传参</h2>
        <hr>
        <h2>render函数</h2>
        <Child1></Child1>
    </div>
</template>

<script>
import Child from "./child";
import Child1 from "./child1";
export default {
    name: "demo",
    props: {},
    components: { Child,Child1 },
    data() {
        return {
            msg: "我是父组件的数据",
            refVal: "",
            emitVal: "",
            listenersVal: "",
            injectVal: "",
            childrenVal: "",
            parentVal: "",
            syncVal: "",
        };
    },
    provide() {
        return {
            parentMsg: this.msg,
            parentEvent: this.getData,
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        setData() {
            //调用eventTarget函数（在index中声明的）
            this.$eventBus.$emit("eventTarget", "这是eventTarget传过来的值");
        },
        getDataByChild(val) {
            this.parentVal = val;
        },
        getData(val) {
            this.injectVal = val;
        },
        getChild(type) {
            if (type === "ref") {
                this.refVal = this.$refs.child.childMsg;
            } else {
                //$children和$parent 并不保证顺序，也不是响应式的,只能拿到一级父组件和子组件
                // console.log(this.$children)//可以拿到 一级子组件的属性和方法
                this.childrenVal = this.$children[0].childMsg;
            }
        },
        getMsg(val) {
            console.log(val);
            switch (val.type) {
                case "emit":
                    this.emitVal = val.data;
                    break;
                case "listeners":
                    this.listenersVal = val.data;
                    break;
            }
        },
    },
    created() {},
    mounted() {},
};
</script> 

<style lang='less' scoped>
</style>
