<template>
	<div class="vHeader">
		<header class="header">
			<slot name="left"></slot>
			<slot name="center"></slot>
			<slot name="right"></slot>
		</header>
	</div>
</template>
<script>
	export default{
		name:"vHeader"
	}
</script>
<style scoped>
	.header{
		width: 750px;
		height: 100px;
		background: #ff9900;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		padding: 0px 30px;
		box-sizing: border-box;
	}
	.header .iconfont{
		font-size: 41px;

	}
	.header span{
		font-size: 36px
	}
</style>
