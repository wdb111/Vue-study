import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //引入状态管理 store
import "./mock/load" //引入mockjs
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import buttonGlobal from './components/button-global'; //全局组件
import permission from './global-instruction'; //按钮权限
import filters from './global-filter';
Vue.use(filters)
Vue.use(ElementUI)
Vue.use(permission)
Vue.config.productionTip = false //设置为 false 以阻止 vue 在启动时生成生产提示。
// Vue.config.silent = true//取消 Vue 所有的日志与警告
//注册全局组件
Vue.component('button-global', buttonGlobal)

// 1.声明一个全局Vue实例变量 EventBus , 把所有的通信数据，事件监听都存储到这个变量上
// 2.类似于 Vuex。但这种方式只适用于极小的项目
// 3.原理就是利用$on和$emit 并实例化一个全局 vue 实现数据共享
// 4.可以实现平级,嵌套组件传值,但是对应的事件名eventTarget必须是全局唯一的
Vue.prototype.$eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')