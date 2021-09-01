
// 这个就是自己写的 ACE 组件
import ACE from './components/ace/custom-ace.vue'
import HtmlLoad from './components/html/htmlLoad.vue'
// import SingleCircle from './components/circle-rings/circle-single.vue'
// import CircleRings from './components/circle-rings/circle-rings.vue'
// import CircleLoading from './components/circle-rings/circle-loading.vue'
// import CircleLoadProgress from './components/circle-rings/circle-load-progress.vue'

//UI组件引入
import Alert from './module/ui/package/alert/src/alert.vue'
export default {
	install: function (Vue,options) {
		// 引号中的字符串就是之后的组件标签名，即 <ace></ace>
		Vue.component('ace', ACE)
		Vue.component('html-load', HtmlLoad)
		// Vue.component('circle-rings', CircleRings)
		// Vue.component('circle-single', SingleCircle,options)
		// Vue.component('circle-loading', CircleLoading)
		// Vue.component('circle-load-progress', CircleLoadProgress)
		
		//UI组件引入
		Vue.component(Alert.name, Alert)
		
	}
}