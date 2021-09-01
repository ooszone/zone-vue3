<template>
	<marquee-c class="notice" :speed="0" v-if="notice&&notice!=0">{{ notice }}</marquee-c>
</template>

<script lang="js">
import marqueeC from "./marquee.vue"
import {defineComponent} from "vue";

export default defineComponent({
	components:{marqueeC},
	props: ['notice'],
})
</script>

<style scoped>
.notice {
	background-color: #c18f67;
	color: darkred;
	font-size: 14px;
	font-weight: bold;
	padding: 5px 0;
	height: 20px;
	line-height: 20px;
	border-top: 1px solid #333;
	min-height: 20px;
}
</style>