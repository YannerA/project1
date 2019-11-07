import Vue from 'vue'
import VueRouter from 'vue-router'
import siteRouter from './siteRouter'
// https://www.cnblogs.com/lxk0301/p/11671256.html
// 解决莫名其妙的报错 重写了一个push方法
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
Vue.use(VueRouter)

const routes = [
  // 登录
  {
    path: '/index',
    name: 'index',
    component: ()=>import('../views/login/index.vue')
  },
  // 首页
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  // 装修方案
  {
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
  siteRouter,
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
]

const router = new VueRouter({
  routes
})

export default router
