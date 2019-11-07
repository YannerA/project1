import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    zhibo: [],
  },
  mutations: {
    GETALL(state, payload) {
      var SplitArray = function (N, Q) {
        var R = [], F;
        for (F = 0; F < Q.length;) R.push(Q.slice(F, F += N))
        return R
      }
      state.zhibo = SplitArray(3, payload.zhibo)
      // console.log(state.zhibo)
    }
  },
  actions: {
    async GETALL({ commit }, payload) {
      var data = await fetch('getall').then(res => res.json())
      // console.log(data)
      commit('GETALL', data)
    }

  },

})
