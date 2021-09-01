<template>
    <main class="square">
        <div class="circle_progress">
                <div class="wrapper right">
                    <center class="circle rightcircle">
                        <slot name="right"></slot>
                    </center>
                </div>
                <div class="wrapper left">
                    <center class="circle leftcircle">
                        <slot name="left"></slot>
                    </center>
                </div>
        </div>
    </main>
</template>
<script>
export default {
    name:"circle-load-progress"
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
.circle_progress{
	position: absolute;
	width: 100%;
	height : 100%;
}
.circle_progress .wrapper{
	width: 50%;
	height: 100%;
	position: absolute;
	top:0;
	overflow: hidden;
}
.circle_progress .right{
	right:0;
}
.circle_progress .left{
	left:0;
}
.circle_progress .circle{
	width: 200%;
    height: 100%;
    border: 10px solid #16dbe2;
    /* border-image:linear-gradient(to bottom, #66ff66,#ccff66); */
    border-radius: 100%;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    /* background:linear-gradient(to left bottom, #66ff66,#ccff66); */
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
}
.circle_progress .rightcircle{
	
    
    border-bottom-color: transparent;
	border-left-color: transparent;
	right:1px;
    /* background: linear-gradient(to left bottom, #66ff66,#ccff66); */
	animation: circle_right 5s linear infinite;
}
.circle_progress .leftcircle{
	border-top-color: transparent;
	border-right-color: transparent;
	left:1px;
    background: transparent;
	animation: circle_left 5s linear infinite;
}
@keyframes circle_right{
	0%{
		-webkit-transform: rotate(-135deg);
	}
	50%,100%{
		-webkit-transform: rotate(45deg);
	}
}
@keyframes circle_left{
	0%,50%{
		-webkit-transform: rotate(-135deg);
	}
	100%{
		-webkit-transform: rotate(45deg);
	}
}
</style>