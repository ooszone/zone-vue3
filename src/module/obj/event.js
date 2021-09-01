export default {
	onload(){
	
	},
	addEvent(dom,type,fn,options){
		//惰性模式，首次检测事件类型后重写原有方法，避免重复检测
		if (dom.addEventListener) {
			this.addEvent = function(dom,type, fn,options) {
				dom.addEventListener(type, fn, options==undefined?true:options || false);
			}
		} else if (dom.attachEvent) {
			this.addEvent = function(type, fn) {
				dom.attachEvent('on' + type, fn);
			}
		} else {
			this.addEvent = function(type, fn) {
				dom['on' + type] = fn;
			}
		}
		// 执行重定义后的方法
		this.addEvent(dom, type, fn,options);
	},
	removeEvent(){
	
	}
}