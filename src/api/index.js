// 接口请求函数
import ajax from './ajax'
//获取三级分类列表api/product/getBaseCategoryList,返回值是Promise
export const reqBaseCategoryList=()=>ajax('/product/getBaseCategoryList')
//登录列表/api/user/passport/login
export const reqLogin=(mobile,password)=>ajax.post('/user/passport/login',{mobile,password})
//export const reqLogin=({mobile,password})=>ajax.post('/user/passport/login',{mobile,password})