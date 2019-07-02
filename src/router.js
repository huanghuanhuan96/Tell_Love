import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import Product from './views/price'
import priceDetails from './views/priceDetails'
import Login from './views/login'
<<<<<<< HEAD
import Regist from './views/regist'
import NotFound from './views/notFound'
 
 
=======
import NotFound from './views/notFound'
import Regist from './views/regist'
import Details from './views/details'
>>>>>>> 70d26869d6a5d5660e50d4e3b86718a46ed2a8f5



Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
    {path:"/",component: Index},
    {path:"/login",component:Login},
    {path:"/regist",component:Regist},
    {path:"/price",component:Product},
    {path:"/priceDetails/:pid",name:'priceDetails',component:priceDetails,props:true},
    {path:"*", component:NotFound}
    
   
=======
    {path:"/",component: index},
    {path:"*", component:NotFound},
    {path:"/price",component:Price},
    {path:'/login',component:Login},
    {path:'/regist',component:Regist},
    {path:"/details", component:Details}
>>>>>>> 70d26869d6a5d5660e50d4e3b86718a46ed2a8f5

    /*{path:"/",component: Index},
    {path:"/index", component:Index},
    {path:"/details/:lid", component:Details, props:true},
    {path:"/login",component:Login},
    {path:"*", component:NotFound}*/
  ]
})
