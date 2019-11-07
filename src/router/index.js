import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD

=======
<<<<<<< HEAD
import siteRouter from './siteRouter'
// https://www.cnblogs.com/lxk0301/p/11671256.html
// 解决莫名其妙的报错 重写了一个push方法
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
=======

>>>>>>> 9b1aa9da1bbb86aab4c3a57a23f2d36788e70672
>>>>>>> e0b0a6ea6b262e4679d8db7f48a4178a9ed4d31c
Vue.use(VueRouter)

const routes = [
  // 登录
  {
<<<<<<< HEAD
    path: '/',
    name: 'index',
    component: () => import('../views/logins/index.vue')
=======
    path: '/index',
    name: 'index',
    component: ()=>import('../views/login/index.vue')
>>>>>>> e0b0a6ea6b262e4679d8db7f48a4178a9ed4d31c
  },
  // 首页
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  // 装修方案
  {
<<<<<<< HEAD
    path: '/decoration',
    name: 'decoration',
    component: () => import('../views/decoration/index.vue')
  },
  // 效果图
  {
    path: '/designSketch',
    name: 'designSketch',
    component: () => import('../views/designSketch/index.vue')
  },
  // 设计师
  {
    path: '/stylist',
    name: 'stylist',
    component: () => import('../views/stylist/index.vue')
  },
  // 装修工地
  {
    path: '/site',
    name: 'site',
    component: () => import('../views/site/index.vue')
  },
  // 装修攻略
  {
    path: '/strategy',
    name: 'strategy',
    component: () => import('../views/strategy/index.vue')
  },
  // 装修贷款
  {
    path: '/loan',
    name: 'loan',
    component: () => import('../views/loan/index.vue')
  },
  // 免费预约
  {
    path: '/orderNow',
    name: 'orderNow',
    component: () => import('../views/orderNow/index.vue')
  },
  // 十秒报价
  {
    path: '/tenSecondsBid',
    name: 'tenSecondsBid',
    component: () => import('../views/tenSecondsBid/index.vue')
  },
  // 重定向
  {
    path: '/*',
    redirect: '/'
  }
=======
    path:'/decoration',
    name:'decoration',
    component:()=>import('../views/decoration/index.vue')
  },
  // 效果图
  {
    path:'/designSketch',
    name:'designSketch',
    component:()=>import('../views/designSketch/index.vue')
  },
  // 设计师
  {
    path:'/stylist',
    name:'stylist',
    component:()=>import('../views/stylist/index.vue')
  },
  // 装修工地
<<<<<<< HEAD
  siteRouter,
=======
  {
    path:'/site',
    name:'site',
    component:()=>import('../views/site/index.vue')
  },
>>>>>>> 9b1aa9da1bbb86aab4c3a57a23f2d36788e70672
  // 装修攻略
  {
    path:'/strategy',
    name:'strategy',
    component:()=>import('../views/strategy/index.vue')
  },
  // 装修贷款
  {
    path:'/loan',
    name:'loan',
    component:()=>import('../views/loan/index.vue')
  },
  // 免费预约
  {
    path:'/orderNow',
    name:'orderNow',
    component:()=>import('../views/orderNow/index.vue')
  },
  // 十秒报价
  {
    path:'/tenSecondsBid',
    name:'tenSecondsBid',
    component:()=>import('../views/tenSecondsBid/index.vue')
  },
<<<<<<< HEAD
   //评论
  {
    path:'/pinglun',
    name:'pinglun',
    component:()=>import('../views/pinglun/index.vue')
  }
 

  // 重定向
  // {
  //   path:'/*',
  //   redirect:'/index'
  // }
=======
  // 重定向
  {
    path:'/*',
    redirect:'/index'
  }
>>>>>>> 9b1aa9da1bbb86aab4c3a57a23f2d36788e70672
>>>>>>> e0b0a6ea6b262e4679d8db7f48a4178a9ed4d31c
]

const router = new VueRouter({
  routes
})
<<<<<<< HEAD
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
=======

>>>>>>> e0b0a6ea6b262e4679d8db7f48a4178a9ed4d31c
export default router
