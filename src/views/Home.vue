<template>
	<section class="home">
		<Sign></Sign>
	</section>
</template>

<script >
import Sign from '../components/sign.vue'
import {defineComponent} from "vue";

export default defineComponent({
	name:"home",
	components:{Sign},
	setup() {
		return {
			signConfig: {
				type: "message",
				content: `一个人未来能去哪，不是靠想象，<br/>而是靠今天做了什么，<br/>做得怎么样。<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;------<a style="text-decoration: none;color:inherit" href="/list">胡言乱语</a>`,
			}
		}
	},
})
</script>

<style scoped lang="less">
.home {
	overflow: auto;
	transform: perspective(400px);
	//background: linear-gradient(to right, rgba(34, 193, 17, 0.5) 0%, rgba(83, 203, 241, 0.7) 40%, rgb(224, 116, 74) 100%); /* W3C */
}
</style>
