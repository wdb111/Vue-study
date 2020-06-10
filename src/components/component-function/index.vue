<template>
  <div>
    <p>
      函数式组件是无状态，它无法实例化，没有任何的生命周期和方法。
      创建函数式组件也很简单，只需要在模板添加 functional 声明即可。
      一般适合只依赖于外部数据的变化而变化的组件，因其轻量，渲染性能也会有所提高。
    </p>
    <p>组件需要的一切都是通过 context 参数传递。它是一个上下文对象，具体属性查看文档。这里 props 是一个包含所有绑定属性的对象。</p>
    <hr />
    <myCom :list="list" :itemClick="item => (currentItem = item.title)" />
    <h6>{{currentItem}}</h6>
  </div>
</template>

<script>
export default {
  name: "demo",
  components: {
    myCom: () => import("./myCom")
  },
  data() {
    return {
      list: [
        {
          title: "标题1",
          content: "内容1"
        },
        {
          title: "标题2",
          content: "内容2"
        }
      ],
      currentItem: ""
    };
  }
};
</script> 

<style lang='less' scoped>
</style>
