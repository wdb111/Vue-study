<!--
  function: function description
  author: 王代彬
  email: 1303329454@qq.com
  time: 2020年04月29日 11:28:02
  version: v1.0
  Modification record: 
  Modification: 
  Modified by: 
  Modification time: 
-->
<template>
  <div>
    <div>Vuex数据：{{countAlias}}===={{countAlias1}}</div>
    <div>
        <el-button @click="SOME_MUTATION(5)">+5</el-button>
      <el-button @click="increment(10)">改变数据+10</el-button>
      <el-button @click="actionB">+1</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations,mapActions } from "vuex";
export default {
  name: "demo",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({ countAlias: "count",countAlias1:"count1" })
  },
  methods: {
    ...mapMutations(["SOME_MUTATION"]),
    ...mapActions(["increment","actionB"])
  },
  created() {}
};
</script> 

<style scoped>
</style>
