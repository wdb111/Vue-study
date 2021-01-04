import permissions from './instructions';

// const install = (Vue)=> {
//     Vue.directive('permission', permission);
// };
// if (window.Vue) {
//     window['permission'] = permission;
//     Vue.use(install); // eslint-disable-line
// }
// permission.install = install;
// export default permission;

// 注册插件 /
export default {
    install(Vue) {
        //添加过滤器 
        for (let key in permissions) {
            Vue.directive(key, permissions[key]);
        }
    }
}