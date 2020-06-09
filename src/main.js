import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //引入状态管理 store
import "./mock/load"//引入mockjs
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
