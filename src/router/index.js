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
                    component:()=>import('@/views/Public/public')
                    // component:resolve => require(['@/views/Public/public'], resolve)
                }
            ]
        },
        
    ]
})

export default router;