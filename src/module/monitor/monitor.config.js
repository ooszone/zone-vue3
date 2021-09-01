//window.$tips = {}

//全局错误监控
import trackExe from "@/module/track/trackExe";

window.onerror = function (e) {//全局错误监控
	$monitor.captureException(e)
}

//当Promise 被 reject 且没有 reject 处理器的时候，会触发 unhandledrejection 事件
window.onunhandledrejection = function ( e){
	$monitor.captureException(e)
};
window.addEventListener('click', (e)=>{
	let _type = e?.target?.nodeName || "";
	let _text =e?.target?.innerText || "";
	let _track = {
		eventid: "15101",
		category: "click",
		action: "user-click-button",
		label: "用户点击按钮",
		value:{innerText:_text,nodeName:_type}
	}
	trackExe.sendPoint(_track)
}, true)