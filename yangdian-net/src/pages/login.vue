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
				<input type="text" id="phone" v-model="account">
			</div>
			<div class="box password">
				<label for="password">密码：</label>
				<input type="text" id="password" v-model="password">
			</div>
			<div>
				<span class="lose">忘记密码</span>
			</div>
				<input class="submit" type="submit" value="登录" @click.prevent="handelSubmit()">
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
		},
		data(){
			return{
				account:"",
				password:""
			}
		},
		methods:{
			handelSubmit(){
				var that = this
				var xhrLogin = new XMLHttpRequest() //创建对象
				xhrLogin.withCredentials = true
				xhrLogin.onreadystatechange=function() //响应
					{
						if (xhrLogin.readyState==4 && xhrLogin.status==200)
						{
							var value = JSON.parse(xhrLogin.responseText).code
							if (value==="100") {
								that.$router.push('/User')
							}
						}
					}
				xhrLogin.open("post","http://api.imecho.cn/dodiapi/login.php",true)
				xhrLogin.setRequestHeader("Content-type","application/x-www-form-urlencoded") //请求头
				xhrLogin.send("account="+this.account+"&password="+this.password)
			}
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
		height: 125px;
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
		display: block;
		float: right;
		margin-top: 20px;
	}
	.content .submit{
		width: 100%;
		height: 100px;
		background: #ff9900;
		font-size: 32px;
		color: #fff;
		margin: 50px 0px;
	}
</style>