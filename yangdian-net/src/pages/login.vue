<template>
	<div class="login">
		<vHeader>
			<template slot="left"><span class="iconfont">&lt;</span></template>
			<template slot="center"><span>登录</span></template>
			<template slot="right"><span>注册</span></template>
		</vHeader>
		<div class="content">
			<form>
				<div class="box">
				<label for="phone">手机号：</label>
				<input type="text" id="phone">
			</div>
			<div class="box password">
				<label for="password">密码：</label>
				<input type="text" id="password">
			</div>
			<div>
				<span class="lose">忘记密码</span>
			</div>
			<input type="submit" value="登录">
			</form>
		</div>
	</div>
</template>
<script>
	import vHeader from '../components/vHeader.vue'
	export default{
		name:"login",
		components:{
			vHeader
		}
	}
</script>
<style scoped>
	.content form{
		width: 602px;
		margin: 120px auto 0px auto;
	}
	.content form .box{
		display: flex;
	}
	.content form .box{
		border-bottom: 2px solid #707070;
	}
	.content form label{
		display: block;
		width: 130px;
		height: 125px;
		line-height: 125px;
		font-size: 32px;
		color: #333333;
	}
	.content form .password input{
		height: 59px;
	}
	.content form .password label{
		letter-spacing: 11px;
	}
	.content .box input{
		width: 472px;
		height: 125px;
		line-height: 125px;
		font-size: 32px;
	}
	.content .lose{

	}
</style>