import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index'
import Price from './views/price'
import Login from './views/login'
import NotFound from './views/notFound'
import Regist from './views/regist'
import Details from './views/details'



Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component: index},
    {path:"*", component:NotFound},
    {path:"/price",component:Price},
    {path:'/login',component:Login},
    {path:'/regist',component:Regist},
    {path:"/details", component:Details}

    /*{path:"/",component: Index},
    {path:"/index", component:Index},
    {path:"/details/:lid", component:Details, props:true},
    {path:"/login",component:Login},
    {path:"*", component:NotFound}*/
  ]
})
