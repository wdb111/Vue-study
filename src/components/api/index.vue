<!--
  function: function description
  author: 王代彬
  email: 1303329454@qq.com
  time: 2020年05月11日 16:51:35
  version: v1.0
  Modification record: 
  Modification: 
  Modified by: 
  Modification time: 
-->
<template>
    <div>
        <h3>API</h3>
        <p>实例 property</p>
        <div>
            vm.$options：用于获取data之外的自定义属性————》》》{{
                $options.myPrototype
            }}
        </div>
        <div>vm.$parent：父实例————》》》{{ $parent.msg }}</div>
        <p>data：</p>
        <p>{{ obj.a }}--{{ obj.b }}</p>
        <p>
            如果在data中只定义一个空对象（obj:{}）,那么在双花括号中使用obj.a.b会报错，因为一旦创建实例后，就无法在根数据对象上添加响应式
            property
        </p>
        <el-button @click="clickHand">点击</el-button>
    </div>
</template>

<script>
export default {
    name: "demo",
    props: {},
    components: {},
    myPrototype: "我是自定义属性",
    data() {
        return {
            a: "123",
            obj: {
                b: "小花",
            },
        };
    },
    computed: {},
    methods: {
        clickHand() {
            this.obj.a = "小明";
            this.obj.b = "小兰";
        },
    },
    created() {},
};
</script> 

<style scoped>
</style>
