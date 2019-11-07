import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 授权登陆是否成功
    authorize: null,
    // 用户信息
    userinfo: null
  },
  mutations: {
    LOGIN(state, payload) {
      if (payload.token != undefined && payload.msg === 'ok') {
        sessionStorage.token = payload.token;
        // 授权成功跳转路由
        state.authorize = true
      } else if (payload.msg === 'error') {
        alert('密码错误！！！')
      } else {
        // 退出登陆 将 authorize 的值 恢复为默认的null
        state.authorize = payload.authorize
      }
    },
    ISLOGIN(state, payload) {
      state.userinfo = payload.userinfo
    },
    ZHUCE(state, payload) {
      console.log(payload)
      if (payload === undefined) {
        alert('用户已注册')
        return
      }else{
        alert('注册成功');
      }
    }
  },
  actions: {
    async LOGIN({ commit }, payload) {
      var { token, msg } = await fetch('/login', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then(res => res.json());
      commit("LOGIN", { token, msg })
    },
    async ISLOGIN({ commit }, payload) {
      var { userinfo } = await fetch('/is_login', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then(res => res.json());
      // 携带用户信息
      commit("ISLOGIN", { userinfo })
    },
    async ZHUCE({ commit }, payload) {
      var { users } = await fetch('/zhuce', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(payload)
      }).then(res => res.json())
      console.log(users)
      commit("ZHUCE", users)
    }
  },
  modules: {
  }
})
