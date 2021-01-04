<template>
  <div class="parent">
    <h3>自定义组件v-model</h3>
    <p>{{sthGiveChild}}</p>
    <!-- @input="handInput" -->
    <my-input v-model="sthGiveChild" ></my-input>
    <br>
    <p>{{checkedValue}}</p>
     <!-- @change="handChange" -->
    <my-checkbox v-model="checkedValue"></my-checkbox>
  </div>
</template>
<script>
import MyInput from "./input.vue";
export default {
  data() {
    return {
      sthGiveChild: '请输入...',
      checkedValue:false
    };
  },
  components: {
    MyInput,
    MyCheckbox:()=>import('./checkbox.vue')
  },
  methods: {
    handInput(val){
      console.log(val)
      // this.sthGiveChild=val;
    },
    handChange(val){
      console.log(val)
    }
  }
};
</script>