import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index'
import Price from './views/price'
import Login from './views/login'
import notFound from './views/notFound'





Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component: index},
    {path:"*", component:notFound},
    {path:"/price",component:Price},
    {path:'/login',component:Login}

    /*{path:"/",component: Index},
    {path:"/index", component:Index},
    {path:"/details/:lid", component:Details, props:true},
    {path:"/login",component:Login},
    {path:"*", component:NotFound}*/
  ]
})
