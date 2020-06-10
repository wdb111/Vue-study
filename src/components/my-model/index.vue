<template>
  <div class="parent">
    <p>我是父亲, 对儿子说： {{sthGiveChild}}</p>
    <Child v-model="sthGiveChild"></Child>
  </div>
</template>
<script>
import Child from "./child.vue";
export default {
  data() {
    return {
      sthGiveChild: "给你100块"
    };
  },
  components: {
    Child
  },
  methods: {}
};
</script>