<template>
	<transition
		name="slide-fade"
		:enter-class="animationConfig.enter"
		:enter-active-class="animationConfig.enterActive"
		:enter-to-class="animationConfig.enterTo"
		:leave-class="animationConfig.leave"
		:leave-active-class="animationConfig.leaveActive"
		:leave-to-class="animationConfig.leaveTo">
		<div :class="`ex-alert `">
			<i class="iconfont">&#xe7e6;</i>
			<slot></slot>
		</div>
	</transition>
</template>

<script>
export default {
	name: "ex-alert",
	data() {
		return {
			animationConfig: {
				enter: "",
				enterActive: "",
				enterTo: "",
				leave: "",
				leaveActive: "",
				leaveTo: ""
			}
		}
		
	}
}
</script>

<style scoped>

</style>