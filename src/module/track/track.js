
// import Vue from 'vue' //引入vue框架
// import trackExe from "./trackExe"

// 注册一个全局自定义指令 `v-track`引入埋点指令，
// Vue.directive("track", {
// 	bind: (el,binding) => {
// 		//Done 根据绑定的track名称，继承并覆盖原来的点击事件，并把track名称对应的埋点信息注入到代码里
// 		el.onclick = Object.assign( event => {
// 			//可以监听链接点击,路由跳转点击
// 			exe.sendPoint(binding.value,event) //发送埋点，顺序
// 		},el.click);
// 	},//只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
// 	// inserted: () => {
// 	// 	//：
// 	// },//被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
// 	// update: () => {
// 	// 	//：
// 	// },//所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
// 	// //我们会在稍后讨论渲染函数时介绍更多 VNodes 的细节。
// 	// componentUpdated: () => {
// 	// 	//：
// 	// },//指令所在组件的 VNode 及其子 VNode 全部更新后调用。
// 	// unbind: () => {
// 	// 	//：
// 	// }//只调用一次，指令与元素解绑时调用。
// })
// //全局混入埋点
// Vue.mixin({
// 	mounted() {
// 		setTimeout(()=>{
// 			let btnObj = document.getElementsByTagName('button');
// 			for(let i in btnObj){
//
// 			}
// 			//Done 页面加载埋点
// 			//trackExe.collectPagePoint();
// 		})
// 	}
// })
//TODO 埋点可视化，开启开关之后，页面点击展示对应位置历史埋点数据分析

// export default {
// 	init(){
//
// 	}
// }

