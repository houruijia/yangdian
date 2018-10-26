<template>
	<div class="shopCarNo">
		<div class="main">
			<span class="iconfont">&#xe606;</span>
			<p>购物车还是空的快去逛逛吧~</p>
		</div>
	</div>
</template>
<script>
	export default{
		name:"shopCarNo"
	}
</script>
<style scoped>
	.shopCarNo{
		width: 750px;
		height: 1087px;
		position: relative;
	}
	.shopCarNo .main{
		width: 246px;
		height: 210px;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		text-align: center;
	}
	.shopCarNo .main span{
		font-size: 86px;
		color: #666666;
	}
	.shopCarNo .main p{
		font-size: 32px;
		color: #333333;
	}
</style>