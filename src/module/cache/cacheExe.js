/* eslint-disable */
import cache from "@/module/cache/cache";
export default {
	addInterfaceCacheQueue(options){
		cache.addInterfaceMemoryCacheQueue(options)
	},
	getInterfaceCacheQueue(){
		return cache.getInterfaceCacheQueue()
	},
	updateInterfaceCacheQueue(queue){
		return cache.updateInterfaceCacheQueue()
	},
	removeInterfaceCacheQueue(resp){
		
		let config = resp.config;
		if(!config){
			return
		}
		setTimeout(()=>{
			let cacheName = `${config.method}~${config.cacheType}~${config.url}`
			let _qItem = JSON.stringify({
				name:cacheName,
				//timestamp:config.timestamp,
				//params:config.data,
				//ContentType:config.headers.head["Content-Type"]
			})
			let _queue = this.getInterfaceCacheQueue()
			//console.info(`请求中队列:`,_queue.length)
			for(let i=0;i<_queue.length;i++){
				if(_queue[i]==_qItem){
					_queue.splice(i,1)
					//console.info(`移除请求队列:${_qItem}`)
				}
			}
		})
		//console.info(`剩余队列`,_queue)
		//this.updateInterfaceCacheQueue(_queue)
	},
	handleCache(resp){
		if(!resp.config){
			return
		}
		
		setTimeout(async ()=>{
			if(resp.config.cacheType == 1){//内存缓存
				this.handleMemoryCache(resp)
			}else if(resp.config.cacheType == 2){//本地缓存
				await this.handleLocalCache(resp)
			}
		})
		
	},
	
	handleMemoryCache(resp){
		let config = resp.config;
		if(!config){
			return
		}
		let cacheName = `${config.method}~${config.cacheType}~${config.url}`;
		let expireTime = config.expireTime || 0;
		let timestamp = config.timestamp || 0;
		let cacheData = null
		if (resp?.data?.code==200) {
			cacheData = resp.data.data
		} else {
			cacheData = resp
		}
		//处理队列中的相同请求
		
		//记录缓存
		cache.addMemoryCache(cacheName,cacheData,expireTime,timestamp)
	},
	async handleLocalCache(resp){
		let config = resp.config;
		if(!config){
			return
		}
		let cacheName = `${config.method}~${config.cacheType}~${config.url}`
		let expireTime = config.expireTime || 0;
		let timestamp = config.timestamp || 0;
		let cacheData = null
		if (resp?.data?.code==200) {
			cacheData = resp.data.data
		} else {
			cacheData = resp
		}
		//处理队列中的相同请求
		
		//记录缓存
		await cache.addLocalCache(cacheName,cacheData,expireTime,timestamp)
	},
	async getCache(cacheName){
		try{
			let arr = cacheName.split("~")
			let _cache =null;
			switch (arr[1]){
				case "1": _cache = cache.getMemoryCache(cacheName);break;//内存缓存
				case "2": _cache = await cache.getLocalCache(cacheName);break;//本地缓存，indexdDB
			}
			return _cache
		}catch (err){
			return null
		}
	},
	async waitCache(cacheName){
		let arr = cacheName.split("~")
		if(arr[1]){
			let _memoryCache = cache.getMemoryCache(cacheName)
			if(_memoryCache){
				//console.info(`等待缓存成功:${cacheName}`)
				return _memoryCache
			}else{
				//console.warn(`缓存未就绪，继续等待:${cacheName}`)
				return  null
			}
		}else if(arr[1]==2){
			return await cache.getLocalCache(cacheName)
		}else{
			return null
		}
	},
	removeAllCache(){
		cache.removeAllMemoryCache();//暂时只移除内存缓存，未移除本地缓存
		console.clear();
		//console.warn(`已清空所有接口缓存`);
	}
}