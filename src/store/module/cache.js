//const maxSize = 1024
//TODO 最大缓存
export default {
	state:()=>({
		httpToken:{
			source:{
				cancel:null,
				token:null
			}
		},
		memoryCache:{
		
		}
	}),
	mutations: {
		updateHttpToken(state,source){
			state.httpToken.source = source
		},
		cancelAllToken(state){
			state.httpToken.source&&state.httpToken.source.cancel()
		},
		addMemoryCache(state,options) {
			state.memoryCache[options.name] = options.value
			//console.log(`add memory cache ${options.name}`)
		},
		removeMemoryCache(state,options) {
			state.memoryCache[options.name] = null
			//console.log(`removed memory cache ${options.name}`)
		},
		updateMemoryCache(state, options) {
			if(state.memoryCache[options.name]!=undefined){
				state.memoryCache[options.name] = options.value
			}else{
				throw Error(`Memory cache [${options.name}] is undefined`)
			}
			
		},
		removeAllMemoryCache(state) {
			state.memoryCache = {}
		},
	},
	actions: {},
	getters: {}
}