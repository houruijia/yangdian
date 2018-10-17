<template>
	<div class="Search">
		<form>
			<input class="text" type="text" placeholder="Montagne jeunesse" @click="handelClick()">
			<span class="iconfont btn">&#xe627;</span>
		</form>
	</div>
</template>
<script>
	
	export default{
		name:"Search",
		methods:{
			handelClick(){
				this.$router.push('SearchPage')
			}
		}
	}
</script>
<style scoped>
	.Search form{
		width: 516px;
		height: 62px;
		display: block;
		margin: 0 auto;
		overflow: hidden;
		border-radius: 12px;
		background: orange;
		opacity: 0.7;
		
		
	}
	.Search form .text{
		width: 436px;
		heigth: inherit;
		float: left;
		padding-left: 20px;
		font-size: 28px;
		line-height: 62px;
	}
	.Search form .btn{
		width: 60px;
		height: inherit;
		float: left;
		font-size: 40px;
		text-alien: center;
		line-height: 62px;
	}

</style>