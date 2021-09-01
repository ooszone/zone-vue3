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
                <circle-single slot="right"></circle-single>
                <circle-single slot="left"></circle-single>
            </circle-load-progress>
        </section>
        
    </main>
</template>
<script>
export default {
    name:"circle",
    data(){
        return {
            innerCls:"class0",
            insetCls:"class0",
            outCls:"class0",
        }
    }
}
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