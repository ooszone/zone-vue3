/*统一引入公共库,扩展到Window对象上*/
//import localforage from "localforage" //处理localstorage和indexedDB
//import lodash from "lodash" //公共函数库，可扩展
//import extend from ".//extend/extend"; //新增自定义扩展lodash方法
import model from "./api/model";
import http from "./http/http";
import cache from "./cache/cache";
import monitor from "./monitor/monitor";
import "./monitor/monitor.config.js"
import "./track/track";
//import event from ".//obj/event";

//全局方法绑定,只读，不可覆盖
//TODO 有时会提示$api或者其他全局变量 未定义，需要在.eslintrc中配置eslintConfig.globals
Object.defineProperties(Window.prototype, {
	"$api": {//api模块
		get() {
			return model || {}
		},
		set() {
		}
	},
	// "$zone":{//自定义对象函数模块
	// 	get() {
	// 		return {
	// 			...event
	// 		}
	// 	},
	// 	set() {
	//
	// 	}
	// },
	/*// "$localforage": {//统一管理localstorage和indexDB
	// 	get() {
	// 		return localforage
	// 	},
	// 	set() {}
	// },
	// "$lodash": {//常用工具函数库，带有自定义扩展
	// 	get() {
	// 		return lodash.assign(extend, lodash)
	// 	},
	// 	set() {}
	// },*/
	"$http": {//单独请求方法，有了统一API管理，最好不要单独使用
		get() {
			return http
		},
		set() {
		}
	},
	//缓存，包括内存缓存和本地缓存
	"$cache": {
		get() {
			return cache
		},
		set() {
		}
	},
	"$monitor": {//监控类
		get() {
			return monitor
		},
		set() {
		}
	},
	// "$track": {//埋点对象
	// 	get() {
	// 		return track
	// 	},
	// 	set() {}
	// },
})

