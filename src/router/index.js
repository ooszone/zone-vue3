import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import demo from './module/demo'
import Axios from "axios";
import store from "../store"
import cacheExe from "@/module/cache/cacheExe";

// webpack处理动态生成路由
// const reqRouter = require.context('../views', false, /\.vue$/)
// const autoLoadRoutes = []
// reqRouter.keys().forEach(name => {
// 	if (name !== 'Home') {
// 		console.log(name)
// 		autoLoadRoutes.push(...reqRouter(name).default)
// 	}
// })


//通过meta标签控制权限
let routes = [
	{
		path: '/',
		name: 'Home',
		meta: {
			roles: ['admin', 'user']
		},
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/list',
		name: 'List',
		component: () => import('../views/List.vue')
	},
	{
		path: '/edit',
		name: 'Edit',
		component: () => import('../views/Edit.vue')
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('../views/Register.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/article',
		name: 'Article',
		component: () => import('../views/Article.vue')
	}
]

/*合并导入其他路由模块*/
routes = routes.concat(demo) //导入demo模块

//导入404页面
// routes.push({
// 	path: '*',    // 此处需特别注意至于最底部
// 	name: '404',
// 	component: () => import('../views/404.vue'),
// })
console.log(routes)
const router = createRouter({
	history:createWebHashHistory(),
	//base: process.env.BASE_URL,
	routes
})

//TODO 引入vuex store
const vuexStore = store.state


//Done 接口预加载
const preLoadInterfaceFunc = function (preLoad){

}

//TODO 路由跳转埋点处理
// vue路由守卫，切换页面自动终止请求，
router.beforeEach((to, from, next) => {
	// cacheExe.removeAllCache()
	// //页面切换自动终止当前页面所有请求
	//
	// //Done 登录自动跳转原来页面
	// //util.goToLeavePage()
	//
	// //Done 页面切换自动终止当前页面所有请求
	// vuexStore.cache.httpToken.source.cancel && vuexStore.cache.httpToken.source.cancel()
	// //Done 缓存所有请求到vueStore.cache.httpToken内存
	// const CancelToken = Axios.CancelToken
	// store.commit("updateHttpToken", CancelToken.source())
	
	//预先加载接口，
	preLoadInterfaceFunc(to)
	
	//角色权限校验,没有设定权限的默认放行
	if(!to.meta.roles || to.meta.roles.includes(vuexStore.permission.role)){//角色类型来自登录赋值
		next()	//放行
	}else{
		next({path:"/404"})	//跳到404页面
	}}
)

export default router
