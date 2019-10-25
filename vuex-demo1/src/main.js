import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  // 取值 State:提供一个响应式数据
  state: {
    count: 0,
  },
  // 赋值 Mutation：更改state方法
  mutations: {
    increment(state) {
      state.count++
    }
  },
  // 赋值 Action:触发mutation方法
  actions: {
    increment({commit}) {
      setTimeout(()=>{
        // state.count++ // 不要对state进行更改操作，应该通过commit交给mutations去处理
        commit('increment')
      }, 3000)
    }
  },
  // 取值 Getter:借助Vue的计算属性computed来实现缓存
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  }
})
// Module：Vue.set动态添加state到响应式数据中
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
