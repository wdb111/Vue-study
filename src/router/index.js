import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/home'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            name: "Home",
            component: Home,
            children:[
                {
                    path:"/router/:title",
                    name:"Router",
                    component:()=>import('@/views/Public/public'),
                    // component:resolve => require(['@/views/Public/public'], resolve)
                   
                },
                {
                    path:"/router",
                    name:"router",
                    component:()=>import('@/components/routerPage/index.vue'),
                    children:[
                        {
                            path:"/router-parmas/:menuId",
                            component:()=>import('@/components/routerPage/canshujieou.vue'),
                            props: true //1、组件内可通过props接收params参数（路由参数解耦）
                        },
                        {
                            path:"/router-parmas2",
                            component:()=>import('@/components/routerPage/canshujieou2.vue'),
                            props: (route) => ({//2、函数模式
                               menuId: route.query.menuId
                           }), //组件内可通过props接收params参数（路由参数解耦）
                        }
                   ]
                }
            ]
        },
        
        
    ]
})

export default router;