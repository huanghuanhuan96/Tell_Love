import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import Product from './views/price'
import priceDetails from './views/priceDetails'
import Login from './views/login'
import Regist from './views/regist'
import NotFound from './views/notFound'
import Details from './views/details'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component: Index},
    {path:"/login",component:Login},
    {path:"/regist",component:Regist},
    {path:"/price",component:Product},
    {path:"/priceDetails/:pid",name:'priceDetails',component:priceDetails,props:true},
    {path:"*", component:NotFound},  
    {path:"/",component: index},
    {path:"*", component:NotFound},
    {path:"/price",component:Price},
    {path:'/login',component:Login},
    {path:'/regist',component:Regist},
    {path:"/details", component:Details}
  ]
})
