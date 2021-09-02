<template>
	<main class="main-demoList">
		<label style="margin:10px 0px;display:inline-block">各种<b>组件</b><b>Demo</b><b>模块</b>集合
			(请在支持H5的浏览器下体验)</label><br/>
		<ul class="long-list">
			<li>
				<i class="iconfont icon-integral1"></i>
				<router-link to="/demo/icon">图标-Icon</router-link>
			</li>
			<li class="disabled">
				<i class="iconfont">&#xe7d1;</i>
				<router-link to="/demo/title">标题-Title</router-link>
			</li>
			<li>
				<i class="iconfont">&#xe7a0;</i>
				<router-link to="/demo/button">按钮-Button</router-link>
			</li>
			<li>
				<i class="iconfont">&#xe890;</i>
				<router-link to="/demo/divider">分割线-Divider</router-link>
			</li>
			<li>
				<i class="iconfont">&#xe790;</i>
				<router-link to="/demo/circle">加载中-Loading</router-link>
			</li>
			<li class="disabled">
				<i class="iconfont">&#xe7e6;</i>
				<router-link to="/demo/longList">长列表-List</router-link>
			</li>
			<li class="disabled">
				<i class="iconfont">&#xe7ea;</i>
				<router-link to="/demo/diff">差异对比-Diff</router-link>
			</li>
			<li class="disabled">
				<i class="iconfont">&#xe8ea;</i>
				<router-link to="/demo/gitbook">文章-GitBook</router-link>
			</li>
		</ul>
	</main>
</template>

<style scoped>
.main-demoList {
	text-align: left;
	padding: 10px 20px;
	margin: 10px auto;
	box-sizing: border-box;
	max-width: 666px;
}

.long-list {
	list-style: none;
	margin: 0;
	padding: 0;
}

.long-list li {
	margin: 10px 0;
	padding: 0px 15px;
	background: #fff;
	border-radius: 5px;
	position: relative;
	box-shadow: 0 0 3px #ececec;
	line-height: 50px;
	height: 50px;
	font-size: 16px;
}

.long-list li:hover {
	box-shadow: none;
}

.long-list li a {
	display: block;
	text-decoration: none;
	color: #666;
	line-height: 50px;
	height: 50px;
	width: 100%;
}

.long-list li a:hover {
	text-decoration: underline;
	color: deepskyblue;
}

.long-list li .iconfont {
	position: absolute;
	right: 15px;
	top: 0px;
}

.long-list li:hover .iconfont {
	color: dodgerblue;
}

</style>