/* 
搜索模块数据
*/
import {reqproductList} from '@/api'
const state = {
  productList: {}, // 搜索列表商品相关数据的对象
}
const mutations = {
  RECEIVE_PRODUCT_LIST(state,productList){
    state.productList=productList
  }
}
const actions={
  //根据指定搜索商品列表相关数据对象
async getProductList({commit},searchParams){
  //ajax请求数据
  const result =await reqProductList(searchParams)
  //成功交给mutation
    if(result.code===200){
      const productList=result.data
      commit('RECEIVE_PRODUCT_LIST',productList)
    } 
  }
}
const getters = {
  //返回商品列表
  trademarkList(state){
    return state.productList.trademarkList || []
  },
  //返回属性列表
  attrsList(state){
    return state.productList.attrsList || []
  },
  //返回商品列表
  goodsList(state){
    return state.productList.goodsList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}