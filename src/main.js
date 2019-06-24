import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'//放在node modules中的都不加./
//import 是ES6中引入模块的语法，只能在vue脚手架中使用
//等效于node中的const axios=require("axios")

//引入要作为全局组建的对象。将来只要是想在任何页面中用到一个组件，必须在main.js中
//引入再重新封装！！
import MyHeader from './components/header'
//将MyHeader 普通对象，重新封装为全局组件
Vue.component('my-header',MyHeader);
//引入脚部文件
import MyFooter from './components/footer'
Vue.component('my-footer',MyFooter);

 
Vue.config.productionTip = false
//让axios的请求携带验证信息到服务端
axios.defaults.withCredentials=true;
//将axios放进Vue的原型对象中
Vue.prototype.axios=axios;
//xxx.vue中： this.axios.get(...)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
