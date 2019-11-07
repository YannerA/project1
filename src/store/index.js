import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    xiangqing:[]
  },
  mutations: {
    GETALL(state, payload){
      state.list = payload
    },
    XIANGQING(state, payload){
      state.list.lists.forEach(item => {
        if(item.id === payload){
          state.xiangqing = item
        }
      });
    }
  },
  actions: {
    async GETALL({commit}, payload){
      var list = await fetch("../../list.json").then(res => res.json());
      commit("GETALL",list)
    },
  },
  modules: {
  }
})
