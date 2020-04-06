//路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'



//修正vue原型上的push和replace方法
const originPush=VueRoyter.prototype.push
//给成功回调指定默认函数
VueRouter.prototype.push=function(location,onComplete=()=>{},onAbort){
  return originPush.call(this,location,onComplete,onAbort)
}
//调用失败的回调
// VueRouter.prototype.replace=function(location,onComplete,onAbort=()=>{}){
//   return originPush.call(this,location,onComplete,onAbort)
// }
VueRouter.prototype.replace=function(location,onComplete,onAbort){
  return originPush.call(this,location,onComplete,onAbort).catch(()=>{})
}

vue.use(VueRouter)
//向外暴露路由器对象
export default new VueRouter({
  //mode:'hash',路由路径带//#
  //mode:'history',路由路径不带#
  routes//配置应用中的所有路由
})