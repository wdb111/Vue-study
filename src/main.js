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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')