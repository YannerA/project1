export default {
    path:'/site',
    name:'site',
    component:()=>import('@/views/site/index.vue'),
    children: [{
			path: '/site/:id',
			meta: {
				name: '详情',
				isShow: false
			},
			component: () => import('@/views/site/xiangqing.vue')
		}]
  }