<template>
	<section :class="`main-circle ${mainCls}`">
		<div :class="`out-layer-circle ${outCls}`">
			<div :class="`inset-layer-circle ${insetCls}`">
				<div :class="`inner-circle ${innerCls}`"></div>
			</div>
		</div>
	</section>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
	props: ["innerCls", "insetCls", "outCls", "mainCls"],
	name: "circle-single"
})
</script>
<style scoped lang="css">
.main-circle {
	box-sizing: border-box;
	width: 100%;
	height: 0%;
	padding-bottom: 100%;
	position: relative;
	background: transparent;
	overflow: hidden;
}

.main-circle::before {
	content: "";
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background: linear-gradient(to left bottom, #ff3300, #ff6699);
	border: 0px solid transparent;
	border-radius: 100%;
	overflow: hidden;
	z-index: 1;
}

.main-circle::after {
	content: "";
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
	border: 0px solid transparent;
	border-radius: 100%;
	overflow: hidden;
	z-index: 2;
}

.out-layer-circle {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background: transparent;
	background: linear-gradient(to left bottom, #ff3300, #ff6699);
	border: 0px solid transparent;
	border-radius: 100%;
	overflow: hidden;
	z-index: 3;
	animation: moveover 3s linear infinite;
	/* box-shadow:0px 0px 3px #000; */
}

.out-layer-circle::before {
	content: "";
	position: absolute;
	width: 80%;
	height: 80%;
	top: 10%;
	left: 10%;
	border: 0px solid transparent;
	background: transparent;
	background: linear-gradient(to left bottom, #66ff66, #ccff66);
	z-index: 3;
	box-sizing: border-box;
	border-radius: 100%;
}

.out-layer-circle::after {
	content: "";
	position: absolute;
	width: 80%;
	height: 80%;
	top: 10%;
	left: 10%;
	border: 0px solid transparent;
	background: rgba(0, 0, 0, 0.7);
	z-index: 3;
	box-sizing: border-box;
	border-radius: 100%;
	overflow: hidden;
	z-index: 4;
	/* animation: clippath 3s infinite linear; */
}

.inset-layer-circle {
	position: absolute;
	top: 10%;
	left: 10%;
	width: 80%;
	height: 80%;
	background: transparent;
	background: linear-gradient(to left bottom, #66ff66, #ccff66);
	border: 1px solid #000;
	box-sizing: border-box;
	border-radius: 100%;
	overflow: hidden;
	z-index: 5;
	animation: moveover 3s linear infinite;
	
}

.inset-layer-circle::before {
	content: "";
	position: absolute;
	width: 75%;
	height: 75%;
	top: 12.5%;
	left: 12.5%;
	border: 0px solid transparent;
	background: linear-gradient(to left, #33ccff, #66ccff);
	z-index: 6;
	box-sizing: border-box;
	border-radius: 100%;
}

.inset-layer-circle::after {
	content: "";
	position: absolute;
	width: 75%;
	height: 75%;
	top: 12.5%;
	left: 12.5%;
	border: 0px solid transparent;
	background: rgba(0, 0, 0, 0.7);
	z-index: 7;
	box-sizing: border-box;
	border-radius: 100%;
}

.inner-circle {
	position: absolute;
	top: 12.5%;
	left: 12.5%;
	width: 75%;
	height: 75%;
	background: transparent;
	background: linear-gradient(to left, #33ccff, #66ccff);
	border: 1px solid #000;
	border-radius: 100%;
	overflow: hidden;
	box-sizing: border-box;
	z-index: 8;
	animation: moveover 3s linear infinite;
}

.inner-circle::after {
	content: "";
	position: absolute;
	width: 65%;
	height: 65%;
	top: 17.5%;
	left: 17.5%;
	border: 0px solid transparent;
	background: #000;
	z-index: 9;
	box-sizing: border-box;
	border-radius: 100%;
	box-shadow: inset 0px 0px 1px #000;
	
}
</style>