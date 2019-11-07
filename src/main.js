import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 9b1aa9da1bbb86aab4c3a57a23f2d36788e70672
>>>>>>> e0b0a6ea6b262e4679d8db7f48a4178a9ed4d31c
>>>>>>> bd3a62fb6612767420e94226a5208826c864f84f
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入自定义事件height
import directives from './plugins/directives.js'
<<<<<<< HEAD
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(directives)


=======


Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(ElementUI);
Vue.use(Vant);
<<<<<<< Updated upstream
Vue.use(directives)
<<<<<<< HEAD
// 图片懒加载组件
import { Lazyload } from 'vant';

// options 为可选参数，无则不传
Vue.use(Lazyload);

// 全局导航钩子
router.beforeEach((to, from, next) => {
  if(to.meta.isLogin){
    if(sessionStorage.token){
     next()
    }else{
      alert('需要登陆')
      next('/login')
    }
  }else{
    next()
  }


  // 如果登陆以后 不能进到login页面
  if(to.fullPath == '/login'){
    if(sessionStorage.token){
      next({
        // 从哪来的回哪去
        path: from.fullPath
      })
    }else{
      next()
    }
  }
})
=======
<<<<<<< HEAD
//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
=======
=======
Vue.use(directives);

>>>>>>> Stashed changes

>>>>>>> 9b1aa9da1bbb86aab4c3a57a23f2d36788e70672

>>>>>>> e0b0a6ea6b262e4679d8db7f48a4178a9ed4d31c
>>>>>>> bd3a62fb6612767420e94226a5208826c864f84f

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
