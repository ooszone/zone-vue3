<template>
	<div ref="iframLoadHtml" v-loading="loading" style="min-height: 30px">
		<iframe :src="url"
		        v-loading="loading"
		        @loadstart="initIframe"
		        @hashchange="initIframe"
		        ref="iframe-container"
		        class="iframe-load">
		</iframe>
	</div>
</template>
<script>

export default {
	name: "htmlLoad",
	props: ["url"],
	data() {
		return {
			loading: true
		}
	},
	methods: {
		loadHtml(url) {
			this.loading = true;
			$http.get(url, {
				accept: 'text/html, text/plain'
			}).then((res) => {
				let iframe = document.createElement("iframe")
				iframe.style = "border:1px solid transparnet;position:absolute;left:0;top:0;width:100%;height:100%"
				iframe.srcdoc = res.data;
				this.$refs["iframLoadHtml"].innerHTML = ""
				this.$refs["iframLoadHtml"].appendChild(iframe)
				this.$nextTick(()=>{
					this.loading = false;
				})
			}).catch((err) => {
				this.$nextTick(()=>{
					this.loading = false;
				})
			})
		},
		parseDom() {
			let iframe = this.$refs["iframe-container"]
			let origin = location.origin;
			let _hash = location.hash.split("#")[1]
			let hash = iframe.src.split(origin)[1]
			if (encodeURIComponent(hash) != _hash) {
				// if (hash.indexOf("gitbook/") != -1) {
				// 	location.hash = "/gitbook/" + encodeURIComponent(hash)
				// }
			}
		},
		initIframe() {
			this.loadHtml(this.url)
			//this.parseDom()
		}
	},
	mounted() {
		this.initIframe()
	}
}
</script>

<style scoped>
.iframe-load {
	border: 1px solid transparent;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%
}
/*自定义滚动条样式start*/

*::-webkit-scrollbar {
	width: 3px;
	height: 3px;
	/*display: none;*/
}

*:hover::-webkit-scrollbar {
	width: 3px;
	height: 3px;
	display: block;
}

/*— 整个滚动条.*/

*::-webkit-scrollbar-button {
	width: 3px;
	height: 3px;
	background: rgba(220, 220, 220, 0.5);
}

/*— 滚动条上的按钮 (上下箭头).*/

*::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background-image: -webkit-gradient(linear,
	40% 0%,
	75% 84%,
	from(rgba(5, 4, 28, 0.25)),
	to(rgba(5, 4, 28, 0.25)),
	color-stop(.6, rgba(5, 4, 28, 0.25)));
}

/*— 滚动条上的滚动滑块.*/

*::-webkit-scrollbar-track {
	width: 3px;
	background: #f5f5f5;
}

/*— 滚动条轨道.*/

*::-webkit-scrollbar-track-piece {
	width: 3px;
}

/*— 滚动条没有滑块的轨道部分.*/

*::-webkit-scrollbar-corner {

}

/*— 当同时有垂直滚动条和水平滚动条时交汇的部分.*/

*::-webkit-resizer {

}

/*— 某些元素的corner部分的部分样式(例:textarea的可拖动按钮).*/
</style>