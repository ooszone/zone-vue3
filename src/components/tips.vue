<template>
    <div>
        <div v-if="tips&&tips.isShow" class="edox-tips" :style="tips.style">{{tips.text}}</div>
    </div>
</template>

<script>
  import {defineComponent} from "vue";

  export default defineComponent({
    props:['tips'],
    name: 'tips'
  })
</script>

<style scoped lang="less">
    .edox-tips{
        display: block;
        color:#fff;
        font-size:12px;
        height: 12px;
        line-height: 12px;
        padding:5px 5px;
        text-align:left;
        background: #fb742b;
        margin:10px 0;
    }
</style>
