import Vue from 'vue';
import Vuex from 'vuex'; //引入 vuex
import * as types from './mutation-types';
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
export default new Vuex.Store({
    state: {
        // 初始化状态
        count: 0,
        count1:0,
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
        ]
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
            state.count +=1
        },
        [types.PROMISE_ADD_TWO](state, payload) {
            state.count1 +=1
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
    }
})
