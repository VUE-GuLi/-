// 入口js
import Vue from 'vue'
import App from './App'
import router from './router'
import TypeNav from './components/TypeNav'
Vue.config.productionTip = false
//注册全局组件标签
Vue.component('TypeNav',TypeNav)
new Vue({
  render: h => h(App),//将App组件渲染到页面上
  router, //配置路由器(内部路由才能访问)
}).$mount('#app')
