<template>
	<div id="app" class="flexH">
		<header class="flex1" style="position: relative">
			<HeadMenu  :title="title"/>
		</header>
		<msg class="flex1">
			<Notice :notice="notice"></Notice>
		</msg>
		<main class="flex99" style="background:#f9f9f9;overflow-y: auto">
			<router-view/>
		</main>
		<footer class="flex1 footer">
			&copy;&nbsp;一切过往、皆为序章
		</footer>
	</div>
</template>

<script lang="ts">
import HeadMenu from './components/menus.vue'
import Notice from "./components/notice.vue";
import {defineComponent} from "vue";

export default defineComponent({
	components: {HeadMenu, Notice},
	setup(props,context){
		const title =`π=${Math.PI}`;
		return {
			title,
			notice:"基于vue3的一体化脚手架、vite、vue-router、vuex、element-plus、icon-font、api、localforage、cache、monitor、axios……"
		}
	}

})
</script>
<style lang="less">
@import  '../public/zone.css';
@import "module/icon/iconfont.css";

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	display: -webkit-flex;
	box-sizing: border-box;
	overflow: hidden;
}
.footer {
	font-size: 12px;
	color: #666;
	background: #fff;
}
</style>

