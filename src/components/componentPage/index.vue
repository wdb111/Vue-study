<template>
  <div class="hello">
    <hr>
    <p>我是父组件=======</p>
    <div>
      <div>父组件内容：{{msg}}</div>
      <br>
      <el-button @click="addChild">子组件值+1</el-button>
    </div>
    <hr />
    <Child ref="childref" :num="msg" @parentEvent="changeMsg">
      <template v-slot:header="slotProps">
        <div>
          <strong>获取子组件的内容：</strong>
          {{slotProps.user.age}}
        </div>
      </template>
      <template #body="{user}">
        <div>
          <strong>解构插槽 Prop：</strong>
          {{user.name}}
        </div>
      </template>
      <template #body1="{noData={a:123}}">
        <div>
          <strong>默认值：</strong>
          {{noData.a}}
        </div>
      </template>
      <p>动态插槽名</p>
      <el-button @click="changename('header')">插槽1</el-button>
      <el-button @click="changename('body')">插槽2</el-button>
      <el-button @click="changename('footer')">插槽3</el-button>
      <template v-slot:[slotName]>
        <div>我想放在底部</div>
      </template>
    </Child>
    <hr />
    <p>keep-alive==================>>>>>>>></p>
    <el-button @click="handleClick('Keep')">keep</el-button>
    <el-button @click="handleClick('Ordinary')">普通</el-button>
    <transition name="component-fade" mode="out-in">
      <keep-alive>
        <component v-bind:is="currentTabComponent"></component>
      </keep-alive>
    </transition>
    <hr />
    <p>依赖注入==================>>>>>>>>/</p>
    <div>父组件内容：{{relyOnData}}</div>
    <Ordinary></Ordinary>
    <Ordinary inline-template>
      <div>
        <p>内联模板（不推荐）</p>
      </div>
    </Ordinary>
  </div>
</template>

<script>
import Child from "./componentChild";
import Keep from "./keep";
// import Ordinary from "./ordinary";
export default {
  components: {
    Child,
    Keep,
    Ordinary: () => import("./ordinary")
  },
  data() {
    return {
      msg: 10,
      slotName: "footer",
      currentTabComponent: "Keep",
      relyOnData: 10
    };
  },
  provide() {
    //依赖注入
    return {
      relyAdd: this.relyAdd
    };
  },
  methods: {
    relyAdd(val) {
      this.relyOnData = val;
    },
    handleClick(val) {
      this.currentTabComponent = val;
    },
    changename(name) {
      this.slotName = name;
    },
    addChild() {
      this.$refs.childref.add();
    },
    changeMsg(val) {
      this.msg = val.num;
      console.log(val);
    }
  }
};
</script>

<style scoped>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
