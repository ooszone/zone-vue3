/*接口被动检测*/
//import deployQueueCache from "@/module/cache/deployQueueCache";
export default {
	startCheck(config){
		this.checkStartDeploy(config)
	},
	checkStartDeploy(config){
		setTimeout(async ()=>{
			let cacheName = `${config.method}~${config.cacheType}~${config.url}`
			let deployName = `post~0~/v2/jean/applyDeploy`
			if(cacheName===deployName){
				let data = JSON.parse(config.data || "{}")
				// await deployQueueCache.addUKToDeployQueue({
				// 	uk:data.serviceName
				// })
			}
		})
	}
}