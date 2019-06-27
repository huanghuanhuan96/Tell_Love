import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import Product from './views/price'
import priceDetails from './views/priceDetails'
import Login from './views/login'
import Regist from './views/regist'
import NotFound from './views/notFound'
 
 



Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component: Index},
    {path:"/login",component:Login},
    {path:"/regist",component:Regist},
    {path:"/price",component:Product},
    {path:"/priceDetails/:pid",name:'priceDetails',component:priceDetails,props:true},
    {path:"*", component:NotFound}
    
   

    /*{path:"/",component: Index},
    {path:"/index", component:Index},
    {path:"/details/:lid", component:Details, props:true},
    {path:"/login",component:Login},
    {path:"*", component:NotFound}*/
  ]
})
