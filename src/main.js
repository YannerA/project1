import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(directives)
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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
