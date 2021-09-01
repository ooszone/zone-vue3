/* eslint-disable */
// 基于axios的请求封装
import http from 'axios';
// import successResponse from "@/module/http/resp";//统一成功处理消息
// import errorResponse from "@/module/http/error";//统一失败处理消息
//import monitor from "@/module/monitor/monitor";
import store from "../../store/index";
import trackExe from "../track/trackExe";
import cacheExe from "../cache/cacheExe";
import passiveCheck from "../http/passiveCheck";
//错误监控

// 环境的切换
// const apiVersion = "v2"
// if (process.env.NODE_ENV == 'development') {
// 	http.defaults.baseURL = `${apiVersion}`;
// } else if (process.env.NODE_ENV == 'debug') {
// 	http.defaults.baseURL = `${apiVersion}`;
// } else if (process.env.NODE_ENV == 'production') {
// 	http.defaults.baseURL = `${apiVersion}`;
// }
const CONFIG = {
	useMockData: false,//是否使用测试数据
	cacheType: 0,//是否使用接口缓存 0,不使用，1，使用内存缓存，2，使用本地缓存
	forceUpdateCache: false,//是否强制更新缓存
	trackName: null,//埋点配置
	expireTime:0,//过期时间，单位ms，0代表不过期（切换路由或强制更新会过期内存缓存）
	timestamp: "",//请求时间
	retry:0,//失败重试次数，
	mergeRequest:false,//合并请求，该请求并发时，合并为一个请求，走（伪）队列模式，真队列模式会阻塞主线程，因此，只等待一段时间，未等到就单独请求
	//sync: false,//是否使用同步模式，promise方式,（update 直接使用await ,不再需要该参数）
	//cancelToken:null //此处不设置默认值，但是在API模块里可选该配置，一般设置为null时代表不自动终止请求，切换路由也不终止，不设置时，会自动终止
}
//创建新的请求对象
const serve = http.create({
	//Done 基本自带参数设置
	//baseURL: "v2",  // api的基本url，也可以直接写定好的url
	//timeout: 60000,  // 请求超时时间
	timeoutErrorMessage: "请求超时！",//超时错误文本
	withCredentials: true,//跨域访问需要发送cookie时一定要加
	
	//Done 自定义参数: 否使用测试数据，是否启用接口缓存
	...CONFIG
});


//Done 请求接口数据缓存、
//TODO 启用mock模式逻辑、
//TODO 同步模式逻辑、
//TODO 统一授权校验、
//Done 拦截短期内的重复请求，防止重复提交

const vuexStore = store.state
// 添加请求拦截器
serve.interceptors.request.use(async (config) => {
	let _return = true
	//Done 添加V2版本标签
	if (config.url.indexOf("/jean/") == 0) {
		config.url = config.url.replace("/jean/", "/v2/jean/");
	}
	
	//Done 配置继承默认值，TODO 增加默认值,可根据环境变更不同的默认值，TODO 比如线上强制不使用MockData
	let _timestamp = Date.now()
	config = {
		...CONFIG,
		...config,
		timestamp: _timestamp
	}
	
	/**!!!!!!!!!!!!!!!!!!Important!!!!!!!!!!!!!!!!!!!!**/
	let _source = http.CancelToken.source() // //注意，此处不同的source 使用不同 || vuexStore.cache.httpToken.source
	// 注意，此处如果想要在点击或者切换路由时终止请求，请保证token使用router.js里的全局缓存；如果想使用缓存及合并请求等，token需要是单独创建的
	config.cancelToken = config.cancelToken==undefined?(config.cacheType&&!config.forceUpdateCache? _source.token:vuexStore.cache.httpToken.source.token):config.cancelToken
	
	
	//post类型默认请求格式
	let method = config.method.toLowerCase();
	if (method === "post") {
		config.headers.ContentType = "application/json";
	}
	
	// //TODO 使用测试数据逻辑
	// if (config.useMockData) {
	// 	//
	// }
	//
	
	//Done 检测是否开启缓存策略，有缓存并返回命中的缓存，Done 并发策略,TODO 时间过期过期策略，
	let cacheName = `${config.method}~${config.cacheType}~${config.url}`
	let _qItem = JSON.stringify({
		name:cacheName,
		//timestamp:config.timestamp,
		//params:config.data,
		//ContentType:config.headers.head["Content-Type"]
	})
	
	if (!config.forceUpdateCache && config.cacheType) {//非强制更新缓存
		let _cache = await cacheExe.getCache(cacheName)
		if (_cache?.value&&((config.timestamp-_cache.timestamp)<_cache.expireTime || config?.expireTime==0)) {//Done 命中缓存，手动取消，并返回缓存_cache,在response拦截器里处理_cache并返回
			_source.cancel({
				_interfaceCache: JSON.stringify(_cache?.value)
			});
		} else{
			//TODO 队列
			let _queue = cacheExe.getInterfaceCacheQueue() || []
			if(config.mergeRequest&&_queue.includes(_qItem)){
				_return = false
				const setDelay = (millisecond) => {
					return new Promise((resolve, reject)=>{
						if (typeof millisecond != 'number') reject(new Error('参数必须是number类型'));
						let _st= setTimeout(()=> {
							resolve(`我延迟了${millisecond}毫秒后输出的`)
							clearTimeout(_st)
						}, millisecond)
					})
				}
				await setDelay(30).then(async ()=>{
					let waitCache = await cacheExe.getCache(cacheName)
					if(waitCache?.value&&((config.timestamp-waitCache.timestamp)<waitCache.expireTime || config?.expireTime==0)){
						_source.cancel({
							_interfaceCache: JSON.stringify(waitCache?.value)
						})
					}
					_return = true
				})
			}
		}
	}
	//正常请求都加入队列
	if(_return){
		cacheExe.addInterfaceCacheQueue(_qItem)
		return config;
	}
}, (error) => {
	//console.error(error)
	$monitor.captureException(error)//接口请求错误监控
	return Promise.resolve(error)//替换reject为resolve，取消程序异常导致的中断
});


// 添加响应拦截器
serve.interceptors.response.use((resp) => {
	//Done 使用接口埋点逻辑
	trackExe.handleTrack(resp)
	
	//TODO 失败重试(不同接口可能不同)
	if(resp.config.retry&&(resp?.data?.code!=200&&resp?.data?.data?.code!=200)){
		resp.config.retry = resp.config.retry - 1;
		return serve.request(resp.config || {})
	}
	
	//Done 使用接口内存缓存逻辑
	cacheExe.handleCache(resp)
	
	//Done 处理接口队列数据
	cacheExe.removeInterfaceCacheQueue(resp)
	
	//Done 接口被动检测触发
	passiveCheck.startCheck(resp.config)
	
	//alert(successResponse(resp).message)
	if (resp?.data?.code == 200&&resp?.data?.data) {
		return resp.data.data
	} else {
		return resp
	}
}, (error) => {
	//alert(errorResponse(error).message)
	//console.error(error)
	//TODO 失败重试
	
	
	//TODO 请求超时，重新请求
	// if (error.message?.msg==='------接口请求中，需要等待，并重新请求------') { // 401错误表示未登录授权或者token失效()
	// 	//debugger
	// 	return serve.request(JSON.parse(error.message._config || "{}")) // 这里是核心代码，登录成功后重新请求！返回Promise对象。
	// }
	
	//Done 使用接口埋点逻辑
	trackExe.handleTrack(error)
	
	//Done 手动取消相同请求，并返回缓存
	if (error?.message?._interfaceCache) {
		return Promise.resolve(JSON.parse(error.message._interfaceCache))
	}
	
	//Done 使用接口内存缓存逻辑
	cacheExe.handleCache(error)
	
	//Done 处理接口队列数据
	cacheExe.removeInterfaceCacheQueue(error)
	
	$monitor.captureException(error)//接口错误监控
	
	return Promise.resolve(error)//替换reject为resolve，取消程序异常导致的中断
});

export default serve
