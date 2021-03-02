<!--
  功能：功能描述
  作者：王代彬
  时间：2021年02月25日 15:53:23
  版本：v1.0
-->
<template>
    <div>
        <p>子组件：</p>
        <div>获取父组件数据：</div>
        <p>props：{{ msg }}</p>
        <p>attrs：{{ attrsMsg }}</p>
        <p>inject：{{ parentMsg }}</p>
        <p>eventBus：{{eventbusVal}}</p>
        <button @click="setVal">传值给父组件($emit)</button>
        <button @click="getParentEvent">传值给父组件($listeners)</button>
        <button @click="parentEvent(childMsg)">传值给祖先组件(inject)</button>
        <button @click="doParentEvent(childMsg)">传值给父组件($parent)</button>
        <button @click="setVal1()">传值给父组件(sync+$emit)</button>
    </div>
</template>

<script>
export default {
    name: "demo",
    props: {
        msg: {
            type: String,
            default: "",
        },
    },
    inject: ["parentMsg", "parentEvent"],
    components: {},
    data() {
        return {
            childMsg: "我是子组件数据",
            attrsMsg: "",
            eventbusVal:''
        };
    },
    filters: {},
    computed: {},
    watch: {},
    methods: {
        doParentEvent(val) {
            //$children和$parent 并不保证顺序，也不是响应式的,只能拿到一级父组件和子组件
            // console.log(this.$parent);//可以拿到 parent 的属性和方法
            this.$parent.getDataByChild(val);
        },
        setVal() {
            let obj = {
                data: this.childMsg,
                type: "emit",
            };
            this.$emit("get-msg", obj);
        },
        setVal1() {
            this.$emit("update:title", this.childMsg);
        },
        getParentEvent() {
            // console.log(this.$listeners);//获取父组件事件

            let obj = {
                data: this.childMsg,
                type: "listeners",
            };
            this.$listeners["get-msg"](obj);
        },
    },
    created() {
        // console.log(this.$attrs)//获取未在props中定义的父组件属性
        this.attrsMsg = this.$attrs.attrsMsg;
    },
    mounted() {
        //声明eventTarget函数
        //可以实现平级,嵌套组件传值,但是对应的事件名eventTarget必须是全局唯一的
        this.$eventBus.$on("eventTarget", (v) => {
            // console.log("eventTarget", v); //这是eventTarget传过来的值
            this.eventbusVal=v;
        });
    },
};
</script> 

<style lang='less' scoped>
</style>
