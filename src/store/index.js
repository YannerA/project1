import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
<<<<<<< Updated upstream
<<<<<<< HEAD
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
=======
    headerList: [],
    title:'',
    jianjie: '',
    mainImg: [],
    num: null
  },
  mutations: {
    //所有数据
    GETALL(state, payload) {
      state.headerList = payload.headerList 
      state.mainImg = payload.mainImg
      state.jianjie = payload.jianjie
      state.num = state.mainImg.length
    },
    //显示隐藏
    ISSHOW(state, payload) {
      state.headerList.map((item, index) => {
        if (index == payload.index) {
          item.isShow = !item.isShow
        }
      })
      //console.log(payload) //{index: 2, isShow: false}
    },
    //搜索
    ONSEARCH(state, payload) {
      // console.log(payload)
      state.mainImg = payload.data[1].mainImg
      // console.log(state.mainImg)
      state.num = state.mainImg.length
      //调用回调函数
      payload.cb(payload.data[0].search.url)
    },
    //点击table
    TABLE(state, payload) {
      console.log(payload)
     state.title=payload.title
      state.mainImg =  payload.mainImg
      state.num = state.mainImg.length
>>>>>>> Stashed changes
    }
  },
  //异步
  actions: {
<<<<<<< Updated upstream
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
=======
    //所有数据
    async GETALL({ commit }) {
      var data = await fetch('/getall').then(res => res.json());
      // console.log(data)
      commit('GETALL', data)
    },
    //异步搜索,使用同步更好
    async ONSEARCH({ commit }, payload) {
      // console.log(payload)
      var data = await fetch('/search', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({ value: payload.value })
      }).then(res => res.json());
      commit('ONSEARCH', {
        data,
        cb: payload.cb
      })

    },
    //异步table，使用同步更好
    async TABLE({ commit }, payload) {
      //console.log(payload)
      var data = await fetch('/table', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(payload)
      }).then(res => res.json());
      commit('TABLE', data)
    }
>>>>>>> Stashed changes
  }
=======
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
>>>>>>> e0b0a6ea6b262e4679d8db7f48a4178a9ed4d31c
})
