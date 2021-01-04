import Vue from 'vue';
import Vuex from 'vuex'; //引入 vuex
import * as types from './mutation-types';
import vuexAlong from "vuex-along";
import createVuexAlong from "vuex-along";
// import user from './user'
// import public from './public'

Vue.use(Vuex); //使用 vuex
//使用模块
// export default new Vuex.Store({
//     modules: {
//       load,
//       public
//     }
//   })
const moduleA = {
    state: {
        a1: "hello",
        a2: "world",
    },
};
export default new Vuex.Store({
    state: {
        // 初始化状态
        count: 0,
        count1: 0,
        todos: [{
                id: 1,
                text: '...',
                done: true
            },
            {
                id: 2,
                text: '...',
                done: false
            }
        ],
        permission:false,
        pageName:'myComponent'
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    },
    //同步
    mutations: {
        // 处理状态
        [types.SOME_MUTATION](state, payload) {
            state.count += payload || 1;
        },
        [types.PROMISE_ADD_ONE](state, payload) {
            state.count += 1
        },
        [types.PROMISE_ADD_TWO](state, payload) {
            state.count1 += 1
        },
        [types.PERMISSION](state){
            state.permission=!state.permission;
        },
        [types.PAGENAME](state,param){
            state.pageName=param;
        }
    },
    //异步
    actions: {
        // 提交改变后的状态
        increment(context, param) {
            context.state.count += param;
            setTimeout(() => { //模拟异步
                context.commit(types.SOME_MUTATION, context.state.count) //提交改变后的state.count值
            }, 1000)

        },
        actionA({
            commit
        }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit(types.PROMISE_ADD_ONE)
                    resolve()
                }, 1000)
            })
        },
        actionB({
            dispatch,
            commit
        }) {
            return dispatch('actionA').then(() => { //等A执行了才执行B
                commit(types.PROMISE_ADD_TWO)
            })
        },
        incrementStep({
            state,
            commit,
            rootState
        }) {
            if (rootState.count < 100) {
                store.dispatch('increment', { //调用increment()方法
                    step: 10
                })
            }
        }
    },
    modules: {
        ma: moduleA,
    },
    plugins: [vuexAlong()],
    // plugins: [
    //     createVuexAlong({
    //       // 设置保存的集合名字，避免同站点下的多项目数据冲突
    //       name: "hello-vuex-along",
    //       local: {
    //         list: ["ma"],
    //         // 过滤模块 ma 数据， 将其他的存入 localStorage
    //         // isFilter: true,
    //       },
    //       session: {
    //         // 保存模块 ma 中的 a1 到 sessionStorage
    //         list: ["ma.a1"],
    //         isFilter: true,
    //       },
    //     }),
    //   ],
})