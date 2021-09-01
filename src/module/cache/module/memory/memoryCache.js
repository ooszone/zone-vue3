/* eslint-disable */
import store from "@/store"
let vuexStore = store.state

export default {
	addInterfaceMemoryCacheQueue(options) {
		store.commit("addInterfaceMemoryCacheQueue",options)
	},
	getInterfaceCacheQueue(){
		return vuexStore.cache.interfaceMemoryCacheQueue
	},
	updateInterfaceCacheQueue(options){
		store.commit("updateInterfaceCacheQueue",options)
	},
	addMemoryCache(name,value,expireTime,timestamp){
		if(this.getMemoryCache(name)==undefined){//校验是否已存在缓存
			store.commit("addMemoryCache",{
				name:name,
				value:value,
				expireTime,
				timestamp
			})
			//console.info(`写入缓存成功:${name}`)
		}else{
			this.updateMemoryCache(name,value,expireTime,timestamp)
			//console.warn(`更新缓存成功:${name}`)
		}
	},
	removeMemoryCache(name){
		store.commit("removeMemoryCache",{
			name:name
		})
	},
	updateMemoryCache(name,value,expireTime,timestamp){
		store.commit("updateMemoryCache",{
			name:name,
			value:value,
			expireTime,
			timestamp,
		})
	},
	getMemoryCache(name){
		return vuexStore.cache.memoryCache[name] || null
	},
	removeInterfaceCacheQueue(){
		store.commit("updateInterfaceCacheQueue",[])
	},
	removeAllMemoryCache(){
		store.commit("removeAllMemoryCache")
		this.removeInterfaceCacheQueue()
	},
	getAllMemoryCache(){
		return vuexStore.cache.memoryCache
	}
}