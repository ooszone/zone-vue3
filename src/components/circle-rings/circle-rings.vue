<template>
	<main>
		<circle-load-progress>
			<template v-slot:right>
				<circle-single ></circle-single>
			</template>
		</circle-load-progress>
	</main>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
	name: "circle-rings",
})
</script>
<style scoped>

</style>