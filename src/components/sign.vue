<template>
	<main class="sign-container flexH" title="绵绵用力、久久为功">
		<section class="flex1 sign-top">
			Pikachu
		</section>
		
		<section class="flex6">
			<img class="sign-img" src="../assets/imgs/pika.gif"/>
		</section>
		
		<section class="flex2 sign-txt" >
			一个人未来能去哪，不是靠想象，<br/>
			而是靠今天做了什么，<br/>做得怎么样。<br/><br/>
			&emsp;&nbsp;
			<router-link  class="entrance"  to="/demo" title="积沙成山、积水成渊">积沙成山、积水成渊</router-link>
		</section>
		
		<div class="sign-blink"></div>
	</main>
</template>


<script setup>
import {defineComponent} from "vue";
defineComponent({
	data() {
		return {
			signConfig: {
				type: "message",
				content: `一个人未来能去哪，不是靠想象，<br/>而是靠今天做了什么，<br/>做得怎么样。<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;------<a style="text-decoration: none;color:inherit" href="/list">胡言乱语</a>`,
			}
		}
	}
})
</script>

<style scoped lang="less">
.sign-container {
	user-select: none;
	position: relative;
	width: 217px;
	height: 386px;
	border:3px solid #333;
	border-image-outset: unset;
	border-image-source: linear-gradient(to bottom, #666,#333, #666);
	border-image-slice: 30%;
	border-image-repeat: stretch;
	box-sizing: border-box;
	margin: 160px auto;
	transform: rotateZ(30deg) scale(1.2);
	animation:rotatingY 10s linear infinite;
	animation-timing-function: cubic-bezier(.5,.5,.5,.5);
	background: linear-gradient(to bottom, rgb(114, 65, 3),yellow, #1b221b);;
	overflow: hidden;
	clip-path: inset(0 round 5px);
	filter: hue-rotate(360deg);
	
	box-shadow: 0px 0 5px 5px yellow;
	z-index: 3;
	
	&:hover{
		transform:scale(1.2);
		animation:none;
	}
	
	&:after {
		content: "";
		-moz-filter: blur(5px);
		background: transparent url("../assets/imgs/pika.gif");
		position: absolute;
		width: 100%;
		height: 100%;
		left:0;
		top:0;
		border-radius: 8px;
		background: -moz-linear-gradient(top, rgba(34, 193, 17, 0.8) 0%, rgba(83, 203, 241, 0.7) 40%, rgb(224, 116, 74) 100%); /* FF3.6+ */
		background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(34, 193, 17, 0.5)), color-stop(40%, rgba(83, 203, 241, 0.7)), color-stop(100%, rgb(224, 116, 74))); /* Chrome,Safari4+ */
		background: -webkit-linear-gradient(to bottom, rgba(34, 193, 17, 0.5) 0%, rgba(83, 203, 241, 0.7) 40%, rgb(224, 116, 74) 100%); /* Chrome10+,Safari5.1+ */
		background: -o-linear-gradient(top, rgba(34, 193, 17, 0.5) 0%, rgba(83, 203, 241, 0.7) 40%, rgb(224, 116, 74) 100%); /* Opera11.10+ */
		background: -ms-linear-gradient(top, rgba(34, 193, 17, 0.5) 0%, rgba(83, 203, 241, 0.7) 40%, rgb(224, 116, 74) 100%); /* IE10+ */
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#8087e0fd', endColorstr='#05abe0',GradientType=0); /* IE6-9 */
		background: linear-gradient(to bottom, rgba(34, 193, 17, 0.5) 0%, rgba(83, 203, 241, 0.7) 40%, rgb(224, 116, 74) 100%); /* W3C */
		z-index:-2;
		opacity: 0.95;
	}
	
	//&:before {
	//	content: "";
	//	background-color: transparent;
	//	//background-image: url("../assets/imgs/pika.gif");
	//	background-position: center;
	//	background-size:contain;
	//	background-origin: content-box;
	//	background-repeat: no-repeat;
	//	position: absolute;
	//	width:100%;
	//	height:100%;
	//	top: 10px;
	//	left: 5px;
	//	z-index:-1;
	//	// 核心代码：
	//	filter: blur(10px);
	//	transform: scale(0.5) rotateY(-5deg) rotateX(-245deg) rotateZ(0deg);
	//	opacity: 0.55;
	//}
	
	.sign-top {
		max-height: 30px;
		position: relative;
		font-size:14px;
		color:#fff;
		line-height: 34px;
		background: linear-gradient(to left, rgb(114, 65, 3),yellow, #1b221b);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation:scratchy 5s linear infinite;
		animation-timing-function: cubic-bezier(.25,.75,.95,.5);
		font-weight: bolder;
		text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 50px #fff, 0 0 100px #fff, 0 0 200px #fff;
		
		&:before {
			content: "";
			height: 2px;
			width: 100%;
			position: absolute;
			left:0;
			top:30px;
			background: linear-gradient(to left, rgb(114, 65, 3),yellow, #1b221b);
			//width: 20px;
			//height: 20px;
			//border-radius: 100%;
			//border: 2px solid #2c3e50;
			//background: #f5f5f5;
			//top: 50%;
			//margin-top: -11px;
			//left: 50%;
			//margin-left: -11px;
			//position: absolute;
		}
	}
	
	
	.sign-img {
		display: block;
		width: 50%;
		height: auto;
		margin: 60px auto;
	}
	
	.sign-txt {
		padding: 15px;
		font-size: 12px;
		color: rgb(114, 65, 3);
		text-align: left;
	}
	
	.sign-blink{
		position: absolute;
		top:0;
		left:0;
		width: 100%;
		height: 100%;
		background: lime;
		overflow: hidden;
		border:2px solid orangered;
		box-sizing: border-box;
		border-radius:8px;
		z-index:-3;
		
		&:before{
			content:"";
			position: absolute;
			top:-40px;
			left:0;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			border-top:193px solid #b7b409;
			border-bottom:193px solid yellow;
			border-left:105px solid #e2ca29;
			border-right:105px solid #c3d618;
			z-index:-4;
			animation:rotatingK 1s linear infinite;
			animation-timing-function: cubic-bezier(.5,.5,.5,.5);
			opacity: 0.5;
		}
		&:after{
			content:"";
			position: absolute;
			top:-40px;
			left:0;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			border-top:193px solid #b7b409;
			border-bottom:193px solid yellow;
			border-left:105px solid #e2ca29;
			border-right:105px solid #c3d618;
			z-index:-5;
			animation:rotatingS 0.5s linear infinite;
			animation-timing-function: cubic-bezier(.5,.5,.5,.5);
		}
	}
}

.entrance{
	background: linear-gradient(to left, rgb(114, 65, 3),yellow, #1b221b);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation:scratchy 5s linear infinite;
	animation-timing-function: cubic-bezier(.5,.5,.5,.5);
	text-decoration: none;
	color:#fff;
	text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 50px #fff, 0 0 100px #fff, 0 0 200px #fff;
}
@keyframes  scratchy {
	0% {
		background-position: -108px 108px;
	}
	100% {
		background-position: 108px -108px;
	}
}
@keyframes rotatingY {
	0% {
		transform:rotateY(0deg) rotateZ(30deg) scale(1.2);
		filter: hue-rotate(0deg);
	}
	100% {
		transform:rotateY(360deg) rotateZ(30deg) scale(1.2);
		filter: hue-rotate(360deg);
	}
}
@keyframes rotatingK {
	0% {
		transform:rotate(0deg) scale(5);
	}
	100% {
		transform:rotate(360deg) scale(5);
	}
}
@keyframes rotatingS {
	0% {
		transform:rotate(90deg) scale(5);
	}
	100% {
		transform:rotate(450deg) scale(5);
	}
}

@keyframes huerotate {
	0% {
		filter: hue-rotate(0deg);
	}
	100% {
		filter: hue-rorate(360deg);
	}
}
</style>
