//import track from "@/public/track";
import interfaceTrack from "../track/interfaceTrack" //引入埋点对象，如果想在接口中触发埋点，可以在此设置，并在拦截器中启用

export default {
	handleTrack(resp){
		let trk = interfaceTrack[resp.config?.trackName]
		if(!trk){
			return
		}
		setTimeout(()=>{
			//根据接口规则校验，执行不同的成功或者失败埋点
			let _trackType = trk.getTrackType(resp)
			let _trackValue = trk.getTrackValue(resp,trk[_trackType])
			this.sendPoint(_trackValue)
		})
	},
	sendPoint(v){
		//TODO 队列机制，排队发送
		setTimeout(()=>{
			let origin = location.origin;
			if(origin=="http://jean.corp.elong.com"){
				//track.collectNewPoint(v)
			}
		})
	},
	collectPagePoint(){
		setTimeout(()=>{
			let origin = location.origin;
			if(origin=="http://jean.corp.elong.com"){
				//track.collectPoint()
			}
		})
	}
}