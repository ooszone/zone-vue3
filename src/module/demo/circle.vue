<template>
    <main style="padding:20px 20px;">
        <section class="load-container">
            <circle-loading></circle-loading>
        </section>
        <section class="load-container">
            <circle-single :insetCls="insetCls" :innerCls="innerCls" :outCls="outCls"></circle-single>
        </section>
        <section class="load-container">
            <circle-load-progress ></circle-load-progress>
        </section>
        <section class="load-container">
            <circle-rings></circle-rings>
        </section>
        <section class="load-container">
            <circle-load-progress >
	            <template v-slot:right>
		            <circle-single ></circle-single>
	            </template>
	            <template v-slot:left>
		            <circle-single ></circle-single>
	            </template>
            </circle-load-progress>
        </section>
        
    </main>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
    name:"circle",
    setup(){
        return {
            innerCls:"class0",
            insetCls:"class0",
            outCls:"class0",
        }
    }
})
</script>
<style>
  .class0{
      background: transparent !important;
  }
</style>
<style scoped>
    .load-container{
        display: inline-block;
        width:100px;
        margin:10px 10px;
        /* transform: scaleY(0.5); */
    }
</style>