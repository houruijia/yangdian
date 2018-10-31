<template>
	<div class="register">
		<vHeader>
			<template slot="left"><span class="iconfont">&#xe60e;</span></template>
			<template slot="center"><span>注册</span></template>
			<template slot="right"><span>登录</span></template>
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
				<div class="box code">
					<label for="code">验证码：</label>
					<input type="text" id="code" v-model="code">
					<img ref="codeImage" @click="reflash()" src="http://api.imecho.cn/dodiapi/code.php?n=4&info=30$80$40">
				</div>
					<input class="next" type="submit" value="下一步" @click.prevent="handelSubmit()">
				<div class="term">
					<input type="checkbox">
					<span>我已阅读并同意使用条款和隐私政策</span>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
	import vHeader from '../components/vHeader'
	export default{
		name:"register",
		components:{
			vHeader
		},
		data(){
			return{
				account:"",
				password:"",
				code:""
			}

		},
		methods:{
			handelSubmit(){
				var xhr = new XMLHttpRequest() //创建对象
				xhr.withCredentials = true
				xhr.onreadystatechange=function() //响应
					{
						if (xhr.readyState==4 && xhr.status==200)
						{
							window.console.log(xhr.responseText)
						}
					}
				xhr.open("post","http://api.imecho.cn/dodiapi/reg.php",true)
				xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded") //请求头
				xhr.send("account="+this.account+"&password="+this.password)
			},
			reflash(){
				this.$refs.codeImage.attributes.src.nodeValue="http://api.imecho.cn/dodiapi/code.php?n=4&info=30$80$40"
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
		height: 124px;
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
	.content .next{
		width: 602px;
		height: 100px;
		border-radius: 8px;
		background: #ff9900;
		line-height: 100px;
		text-align: center;
		color: #fff;
		font-size: 32px;
		margin: 50px 0px;
	}
	.term input{
		margin-right: 20px;
	}
	.term span{
		font-size: 28px;
		color: #666666;
	}
	.content .code input{
		width: 240px;
		text-align:center;
	}

</style>