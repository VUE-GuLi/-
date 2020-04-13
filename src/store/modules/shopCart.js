/* 
用于操作首页模块数据的vuex模块
*/
import { reqAddToCart } from '@/api'
const state = {
 cartList:[],//所有购物车列表数据
}
const mutations = {}
const actions = {
  async addToCart({commit},{skuId,skuNum,callback}){
    const result=await reqaddToCart(skuId,skuNum)
    if(result===200){
      callback('')
    }else{
      callback(result.message || '添加购物车失败')
    }
  },
  async addToCart2({commit},{skuId,skuNum}){
    const result=awaitreqAddToCart(skuId,skuNum)
    return result.code===200 ? '' : (result.message || '添加失败')
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}