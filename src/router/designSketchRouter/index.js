export default {
    path:'/designSketch',
    name:'designSketch',
    component:()=>import('@/views/designSketch/index.vue'),
    children:[{
      path:'/designSketch/xiangqing/:id',
      component:()=>import('@/views/designSketch/xiangqing/index.vue')
    },{
      path:'/xiaoguotu/:id',
      meat:{
        isShowXq:false
      },
      component:()=>import('@/views/designSketch/index.vue')
    }]
  }