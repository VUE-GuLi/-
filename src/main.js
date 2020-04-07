// 入口js
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav'
Vue.config.productionTip = false
//注册全局组件标签<TypeNav />
Vue.component('TypeNav',TypeNav)
new Vue({
  render: h => h(App),//将App组件渲染到页面上
  router, //配置路由器(内部路由才能访问)
  store,//配置vuex核心管理对象store=>组件中通过$store得到store对象
}).$mount('#app')
