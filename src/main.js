import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD

=======
>>>>>>> 9b1aa9da1bbb86aab4c3a57a23f2d36788e70672
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
<<<<<<< HEAD
//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
=======

>>>>>>> 9b1aa9da1bbb86aab4c3a57a23f2d36788e70672


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
