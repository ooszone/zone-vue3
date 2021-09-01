<template>
	<nav class="edox-header">
		{{ title }}
		<img class="logo" src="../assets/logo0.png"/>
		<div style="display: none">
			<router-link to="/">home</router-link>
			<router-link to="/edit">edit</router-link>
			<router-link to="/login">login</router-link>
		</div>
	</nav>
</template>

<script lang="js">
import {defineComponent} from "vue";

export default defineComponent({
	name: "menus",
	props: ["title"],
})
</script>

<style scoped lang="less">
.edox-header {
	user-select: none;
	font-size: 16px;
	color: #333;
	background: #fff;
	height: 44px;
	width: 100%;
	display: block;
	line-height: 44px;
	min-height: 44px;
	max-height: 44px;
	text-align: center;
	position: relative;
	font-weight: 500;
	top: 0;
	left: 0;
	z-index: 99;
	box-shadow: 0 0 2px 1px #ececec;
	
	.logo {
		display: block;
		width: 30px;
		height: 30px;
		position: absolute;
		top: 7px;
		left: 20px;
		border-radius: 100%;
	}
	
	#nav {
		a {
			font-weight: bold;
			color: #2c3e50;
			
			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
	
	.edox-menu {
		position: absolute;
		display: inline-block;
		height: 100%;
		width: auto;
		left: 60px;
		padding: 0 5px;
		color: #333;
		cursor: pointer;
		background: transparent;
		-webkit-tap-highlight-color: transparent;
		transform: rotateZ(90deg);
		font-family: Arial !important;
	}
	
	.edox-menu-open {
		transform: rotateZ(0deg);
	}
}

.edox-slide-menu {
	position: fixed;
	width: 10%;
	max-width: 320px;
	min-width: 200px;
	background: #fff;
	z-index: 98;
	left: 0;
	height: 100%;
	top: 44px;
	box-shadow: 0 0 2px 1px #ececec;
	
	.edox-menu-title {
		height: 44px;
		text-align: center;
		color: #333;
		background: #fff;
		font-size: 18px;
		line-height: 44px;
		box-shadow: 0 0 2px 1px #ececec;
	}
	
	.edox-menu-list {
		padding: 0;
		text-indent: 30px;
		border: none;
		
		.edox-menu-item {
			color: #333;
			font-size: 16px;
			line-height: 34px;
			text-align: left;
			padding: 0 10px;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			box-shadow: 1px 1px 1px #f5f5f5;
			
			a {
				color: #666;
			}
		}
	}
}

</style>
