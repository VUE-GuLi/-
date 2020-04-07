//vuex的核心管理对象
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

//引用
Vue.use(Vuex)

const moduleA = {
  state: {
    鸣人:雏田,
    佐助:小樱
  },
  mutations: { },
  actions: { },
  getters: { }
}

const moduleB = {
  state: { 
    鹿丸:[]
  },
  mutations: { },
  actions: { }
}

// const store = new Vuex.Store({
//   modules: {
//     a: moduleA,
//     b: moduleB
//   }
// })

//store.state.a // -> moduleA 的状态
//store.state.b // -> moduleB 的状态
//向外暴露store对象
export default new Vuex.Store({
  actions,
  getters,
  mutations,
  modules,
})