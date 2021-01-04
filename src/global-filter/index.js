import filters from './filters'
export default {
    // 注册插件 /
    install(Vue) {
        //添加过滤器 
        for (let key in filters) {
            Vue.filter(key, filters[key])
        }
    }
}