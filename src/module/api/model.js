import http from "../http/http";


export default {
	init: (params,config) => http.post(`/init`, params, {
		cacheType: 0,//默认0，不使用，1：内存缓存，2：本地缓存
		expireTime:3000,//缓存过期时间，单位ms，0代表不过期（切换路由或强制更新会过期内存缓存）
		retry:3,
		trackName: 'init', //埋点名，在interfaceTrack查看
		timeout:6000,
		...(config || {}),
	}),
}