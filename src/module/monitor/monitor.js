//错误监控
import trackExe from "@/module/track/trackExe";
import errorTrack from "@/module/track/errorTrack";

export  default {
	/**
	 * 手机异常
	 * @param err
	 */
	captureException(err){
		setTimeout(()=>{
			this.analysisError(err)
		})
	},
	/**
	 * 分析错误
	 * @param err
	 */
	analysisError(err){
		let env = "";
		if(env=="product"){
			//this.reportException(err)
		}else{
			//console.error(err)
		}
	},
	/**
	 * 上报异常
	 */
	reportException(err){
		let _track = errorTrack.monitorTrack
		try{
			trackExe.sendPoint({
				..._track,
				value:{
					_monitorError:err,
					_pageName:location.href,
					_msg:err.message
				}
			})
		}catch (e) {
		
		}
	},
	/**
	 * 暂存异常,上报失败，暂存，稍后重试
	 */
	storeCacheException(err){
		//localforage.setItem("key",err)
	}
}