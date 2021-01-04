<!--
  功能：功能描述
  作者：王代彬
  时间：2020年12月30日 16:23:28
  版本：v1.0
-->
<template>
    <div>
        <h3>过滤器中无法使用this(vm),但是过滤器可以传递参数，绑定值默认为第一个参数</h3>
        <p>还可以这样使用(值依次向后传)：
          <pre> message | filterA | filterB </pre>
          </p>
        <p>局部过滤器：{{str | filterStr(this,'abc')}} 全局过滤器：{{str | globalFilter}}</p>
        <p>通过过滤器传参改变的：{{num}}</p>
        <h3>这是另一个全局过滤器返回的值：{{number | addZeroFilter}}</h3>
    </div>
</template>

<script>
export default {
    name: "demo",
    props: {},
    components: {},
    data() {
        return {
            str: "abcdefg",
            num: 0,
            number:6
        };
    },
    filters: {
        filterStr(val, that, param3) {
            that.num = 100;
            return val.toUpperCase();
        },
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
};
</script> 

<style lang='less' scoped>
</style>
