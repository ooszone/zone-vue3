import localforage from "localforage";

export default {
	async addLocalCache(name,value,expireTime,timestamp){
		if(!await this.getLocalCache(name)){//校验是否已存在缓存
			await this.updateLocalCache(name,value,expireTime,timestamp)
			//console.info(`写入本地缓存成功:${name}`)
		}else{
			await this.updateLocalCache(name,value,expireTime,timestamp)
			//console.warn(`更新本地缓存成功:${name}`)
		}
	},
	async getLocalCache(name){
		return await this.getAsyncLocalCache(name)
	},
	getAsyncLocalCache(name){
		return new Promise((resolve)=>{
			localforage.getItem(name).then((cache)=>{
				resolve(JSON.parse(cache))
			}).catch(()=>{
				resolve(null)
			})
		})
	},
	updateAsyncLocalCache(name,cache,expireTime,timestamp){
		return new Promise((resolve)=>{
			localforage.setItem(name,JSON.stringify({
				value:cache,
				expireTime,
				timestamp
			})).then((value)=>{
				resolve(value)
			}).catch((err)=>{
				resolve("")
			})
		})
	},
	async updateLocalCache(name,cache,expireTime,timestamp){
		return await this.updateAsyncLocalCache(name,cache,expireTime,timestamp)
	}
}