<template>
  <div>
    <h3>vue中<span style="color:red">$event</span>的两个作用：</h3>
    <p>1.在原生事件中表现和默认的事件对象相同</p>
    <input type="text" @input="inputHandler('hello', $event)" />
    <p>{{msg}}</p>
    <p>2.在自定义事件中表现为捕获从子组件抛出的值</p>
    <Child @myEvent="getValue('123',$event)"></Child>
    <p>{{msg1}}</p>
  </div>
</template>

<script>
export default {
  name: "demo",
  props: {},
  components: {
    Child: () => import("./child")
  },
  data() {
    return {
      msg: "000",
      msg1:""
    };
  },
  computed: {},
  methods: {
    inputHandler(val, e) {
      // e.target 是你当前点击的元素
      // e.currentTarget 是你绑定事件的元素
      console.log(val, e.target);
      this.msg = e.target.value;
    },
    getValue(val, e) {
        //如果父组件中不传参，则第一个参数为子组件抛出的参数
      console.log(val, e);
      this.msg1=e
    }
  },
  created() {}
};
</script> 

<style lang='less' scoped>
</style>
