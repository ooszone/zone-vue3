<template>
	<section class="marquee-wrap">
		<div :class="`marquee ${animationType}`" ref="marquee" :style="{'animationDuration': duration}">
			<slot></slot>
		</div>
	</section>
</template>

<script>
export default {
	name: 'marquee-c',
	props: {
		/* 跑马灯数据 */
		data: {
			type: Array,
			default: () => []
		},
		/* 跑马灯速度，数值越大速度越快 */
		speed: {
			type: Number,
			default: 60
		},
		animationType:{
			type:String,
			default:""
		}
	},
	data () {
		return {
			duration: 0
		};
	},
	mounted () {
		/* 跑马灯速度，使用跑马灯内容宽度 除以 速度 得到完整跑完一半内容的时间 */
		this.duration = ~~this.$refs.marquee.getBoundingClientRect().width / this.speed  +'s';
	}
};
</script>

<style scoped>
.marquee-wrap {
	position: relative;
	overflow: hidden;
}
.marquee {
	white-space: nowrap;
	animation-name: marqueeType;
	animation-timing-function: cubic-bezier(.12,.84,.94,.18);
	animation-iteration-count: infinite;
	transform: scale(1);
}
.liner{
	animation-timing-function: linear;
}
@keyframes marqueeType {
	from {transform: translateX(100%);}
	to { transform: translateX(-100%);}
}
</style>