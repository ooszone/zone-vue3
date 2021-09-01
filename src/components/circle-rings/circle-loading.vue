<template>
    <main class="square">
        <div class='box'>
            <div class="box1"></div>
            <div class="box2"></div>
            <div class="box3"></div>
        </div>
    </main>
</template>
<script>
export default {
    name:"circle-loading"
}
</script>
<style scoped>
.square{
    width:100%;
    height:0;
    padding-bottom:100%;
    position:relative;
    overflow: hidden;
}
.box{
  position: absolute;
  width:100%;
  height:100%;
  border-radius:100%;
  overflow: hidden;
  box-shadow: 0 0 3px #ddd;
  /*整体旋转*/
  animation:moveover 3s linear infinite;
}
.box1{
  position:absolute;
  width: 50%;
  height: 100%;
  /* border-radius:100% 0 0 100%; */
  /* 起始最深颜色为 #999，过渡到中间颜色为 #d0cfcf */
  background: linear-gradient(green, orange);
  background-color: red;
  z-index:2;
}
.box2{
  position:absolute;
  width: 50%;
  height: 100%;
  /* border-radius:0 200% 200% 0; */
  left:50%;
  /* 过渡到中间颜色为 #d0cfcf 最终末尾颜色为 #eee */
  background: linear-gradient(green, orange);
  z-index:1;
}
.box3{
  position:absolute;
  width:80%;
  height:80%;
  top:10%;
  left:10%;
  border-radius:100%;
  background-color: transparent;
  z-index:2;
}
/*旋转动画*/
@keyframes moveover {
  0%   {transform:rotate(0deg);}
  100% {transform:rotate(360deg);}
}
</style>