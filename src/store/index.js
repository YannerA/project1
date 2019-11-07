import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
<<<<<<< HEAD
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

=======
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
>>>>>>> 9b1aa9da1bbb86aab4c3a57a23f2d36788e70672
})
