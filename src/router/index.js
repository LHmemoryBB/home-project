import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue'
import login from '../views/account/login.vue';

Vue.use(VueRouter)

const routes = [
	// 主页ss
	{
		path: '/',
		name: 'index',
		component: index
	},
	// 登录
	{
		path: '/account/login',
		name: 'login',
		component: login
	},
	// 忘记密码
	{
		path: '/account/forgot',
		name: 'forgot',
		component: () => import('../views/account/forgot.vue')
	},
	// 注册账号
	{
		path: '/account/register',
		name: 'register',
		component: () => import('../views/account/register.vue')
	},
	// 媒体图片
	{
		path: '/media/image',
		name: 'media_image',
		component: () => import('../views/media/image.vue')
	},
	// 音乐
	{
		path: '/media/music',
		name: 'media_music',
		component: () => import('../views/media/music.vue')
	},
	// 媒体视频
	{
		path: '/media/video',
		name: 'media_video',
		component: () => import('../views/media/video.vue')
	},
	// 媒体视频
	{
		path: '/user_center/index',
		name: 'user_center_index',
		component: () => import('../views/user_center/index.vue')
	},
	// 文章路由
	{
		path: '/article/list',
		name: 'article_list',
		component: () => import('../views/article/list.vue')
	},
	{
		path: '/article/details',
		name: 'article_details',
		component: () => import('../views/article/details.vue')
	},
	// 浏览网站
	// 收藏路由
	{
		path: '/user/collect',
		name: 'collect_list',
		component: () => import('../views/user/collect.vue')
	},


	{
		path: '/comment/table',
		name: 'comment_table',
		component: () => import('../views/comment/table.vue')
	},
	{
		path: '/comment/view',
		name: 'comment_view',
		component: () => import('../views/comment/view.vue')
	},

	



	// 公告路由
	{
		path: '/notice/list',
		name: 'notice_list',
		component: () => import('../views/notice/list.vue')
	},
	{
		path: '/notice/details',
		name: 'notice_details',
		component: () => import('../views/notice/details.vue')
	},
	// 普通用户表格路由
	{
		path: '/regular_users/table',
		name: '/regular_users_table',
		component: () => import('../views/regular_users/table.vue')
	},
	// 普通用户详情路由
	{
		path: '/regular_users/view',
		name: '/regular_users_view',
		component: () => import('../views/regular_users/view.vue')
	},
	
	
		// 景点类型表格路由
	{
		path: '/types_of_attractions/table',
		name: '/types_of_attractions_table',
		component: () => import('../views/types_of_attractions/table.vue')
	},
	// 景点类型详情路由
	{
		path: '/types_of_attractions/view',
		name: '/types_of_attractions_view',
		component: () => import('../views/types_of_attractions/view.vue')
	},
	
	
		// 景点信息表格路由
	{
		path: '/attraction_information/table',
		name: '/attraction_information_table',
		component: () => import('../views/attraction_information/table.vue')
	},
	// 景点信息详情路由
	{
		path: '/attraction_information/view',
		name: '/attraction_information_view',
		component: () => import('../views/attraction_information/view.vue')
	},
	
		// 景点信息列表路由
	{
		path: '/attraction_information/list',
		name: '/attraction_information_list',
		component: () => import('../views/attraction_information/list.vue')
	},
	
		// 景点信息详情路由
	{
		path: '/attraction_information/details',
		name: '/attraction_information_details',
		component: () => import('../views/attraction_information/details.vue')
	},
		// 景点预约表格路由
	{
		path: '/attraction_reservation/table',
		name: '/attraction_reservation_table',
		component: () => import('../views/attraction_reservation/table.vue')
	},
	// 景点预约详情路由
	{
		path: '/attraction_reservation/view',
		name: '/attraction_reservation_view',
		component: () => import('../views/attraction_reservation/view.vue')
	},
		// 景点预约添加路由
	{
		path: '/attraction_reservation/edit',
		name: '/attraction_reservation_edit',
		component: () => import('../views/attraction_reservation/edit.vue')
	},
	
	
		// 景点退票表格路由
	{
		path: '/tourist_attraction_ticket_refund/table',
		name: '/tourist_attraction_ticket_refund_table',
		component: () => import('../views/tourist_attraction_ticket_refund/table.vue')
	},
	// 景点退票详情路由
	{
		path: '/tourist_attraction_ticket_refund/view',
		name: '/tourist_attraction_ticket_refund_view',
		component: () => import('../views/tourist_attraction_ticket_refund/view.vue')
	},
	
	
		// 美食分类表格路由
	{
		path: '/food_classification/table',
		name: '/food_classification_table',
		component: () => import('../views/food_classification/table.vue')
	},
	// 美食分类详情路由
	{
		path: '/food_classification/view',
		name: '/food_classification_view',
		component: () => import('../views/food_classification/view.vue')
	},
	
	
		// 美食信息表格路由
	{
		path: '/food_information/table',
		name: '/food_information_table',
		component: () => import('../views/food_information/table.vue')
	},
	// 美食信息详情路由
	{
		path: '/food_information/view',
		name: '/food_information_view',
		component: () => import('../views/food_information/view.vue')
	},
	
		// 美食信息列表路由
	{
		path: '/food_information/list',
		name: '/food_information_list',
		component: () => import('../views/food_information/list.vue')
	},
	
		// 美食信息详情路由
	{
		path: '/food_information/details',
		name: '/food_information_details',
		component: () => import('../views/food_information/details.vue')
	},
		// 民宿信息表格路由
	{
		path: '/homestay_information/table',
		name: '/homestay_information_table',
		component: () => import('../views/homestay_information/table.vue')
	},
	// 民宿信息详情路由
	{
		path: '/homestay_information/view',
		name: '/homestay_information_view',
		component: () => import('../views/homestay_information/view.vue')
	},
	
		// 民宿信息列表路由
	{
		path: '/homestay_information/list',
		name: '/homestay_information_list',
		component: () => import('../views/homestay_information/list.vue')
	},
	
		// 民宿信息详情路由
	{
		path: '/homestay_information/details',
		name: '/homestay_information_details',
		component: () => import('../views/homestay_information/details.vue')
	},
		// 民宿预约表格路由
	{
		path: '/homestay_reservation/table',
		name: '/homestay_reservation_table',
		component: () => import('../views/homestay_reservation/table.vue')
	},
	// 民宿预约详情路由
	{
		path: '/homestay_reservation/view',
		name: '/homestay_reservation_view',
		component: () => import('../views/homestay_reservation/view.vue')
	},
		// 民宿预约添加路由
	{
		path: '/homestay_reservation/edit',
		name: '/homestay_reservation_edit',
		component: () => import('../views/homestay_reservation/edit.vue')
	},
	
	
		// 民宿退款表格路由
	{
		path: '/refunds_for_homestays/table',
		name: '/refunds_for_homestays_table',
		component: () => import('../views/refunds_for_homestays/table.vue')
	},
	// 民宿退款详情路由
	{
		path: '/refunds_for_homestays/view',
		name: '/refunds_for_homestays_view',
		component: () => import('../views/refunds_for_homestays/view.vue')
	},
	
	
		// 论坛分享表格路由
	{
		path: '/forum_sharing/table',
		name: '/forum_sharing_table',
		component: () => import('../views/forum_sharing/table.vue')
	},
	// 论坛分享详情路由
	{
		path: '/forum_sharing/view',
		name: '/forum_sharing_view',
		component: () => import('../views/forum_sharing/view.vue')
	},
	
		// 论坛分享列表路由
	{
		path: '/forum_sharing/list',
		name: '/forum_sharing_list',
		component: () => import('../views/forum_sharing/list.vue')
	},
	
		// 论坛分享详情路由
	{
		path: '/forum_sharing/details',
		name: '/forum_sharing_details',
		component: () => import('../views/forum_sharing/details.vue')
	},
		// 积分商品表格路由
	{
		path: '/integral_products/table',
		name: '/integral_products_table',
		component: () => import('../views/integral_products/table.vue')
	},
	// 积分商品详情路由
	{
		path: '/integral_products/view',
		name: '/integral_products_view',
		component: () => import('../views/integral_products/view.vue')
	},
	
		// 积分商品列表路由
	{
		path: '/integral_products/list',
		name: '/integral_products_list',
		component: () => import('../views/integral_products/list.vue')
	},
	
		// 积分商品详情路由
	{
		path: '/integral_products/details',
		name: '/integral_products_details',
		component: () => import('../views/integral_products/details.vue')
	},
		// 商品兑换表格路由
	{
		path: '/product_exchange/table',
		name: '/product_exchange_table',
		component: () => import('../views/product_exchange/table.vue')
	},
	// 商品兑换详情路由
	{
		path: '/product_exchange/view',
		name: '/product_exchange_view',
		component: () => import('../views/product_exchange/view.vue')
	},
		// 商品兑换添加路由
	{
		path: '/product_exchange/edit',
		name: '/product_exchange_edit',
		component: () => import('../views/product_exchange/edit.vue')
	},
	
	
		// 在线客服表格路由
	{
		path: '/online_service/table',
		name: '/online_service_table',
		component: () => import('../views/online_service/table.vue')
	},
	// 在线客服详情路由
	{
		path: '/online_service/view',
		name: '/online_service_view',
		component: () => import('../views/online_service/view.vue')
	},
		// 在线客服添加路由
	{
		path: '/online_service/edit',
		name: '/online_service_edit',
		component: () => import('../views/online_service/edit.vue')
	},
	
	
	
	// 用户路由
	{
		path: '/user/index',
		name: 'user_index',
		component: () => import('../views/user/index.vue')
	},
	// 基本信息
	{
		path: '/user/info',
		name: 'user_info',
		component: () => import('../views/user/info.vue')
	},
	// 找回密码
	{
		path: '/user/password',
		name: 'user_password',
		component: () => import('../views/user/password.vue')
	},

	// 搜索
	{
		path: '/search',
		name: 'search',
		component: () => import('../views/search/index.vue')
	},
	// 局部搜索
	{
		path: '/search/details',
		name: 'search_details',
		component: () => import('../views/search/details.vue')
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

router.afterEach((to, from, next) => {
	let title = "江西乡村旅游服务平台-home";
	document.title = title;
	document.logo = "江西乡村旅游服务平台"
})

export default router
