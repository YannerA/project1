import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 登录
  {
    path: '/',
    name: 'index',
    component: () => import('../views/logins/index.vue')
  },
  // 首页
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  // 装修方案
  {
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
]

const router = new VueRouter({
  routes
})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
export default router
