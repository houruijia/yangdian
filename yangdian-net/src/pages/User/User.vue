<template>
	<div class="User">
		<div class="header">
			<div class="top">
				<span class="iconfont">&#xe602;</span>
				<span>个人中心</span>
				<span class="iconfont">&#xe621;</span>
			</div>
			<div class="down">
				<div class="portrait">
					<img src="" alt="">
				</div>
				<h3>点击登录</h3>
			</div>
		</div>
		<div class="content">
			<div class="collect">
				<span class="iconfont">&#xe605;</span>
				<span>我的收藏({{count}})</span>
				<span>{{start}}</span>
			</div>
			<div class="order">
				<div class="top">
					<span>我的订单</span>
					<span>查看全部订单</span>
				</div>
				<div class="bottom">
					<ul>
						<li>
							<span class="iconfont">&#xe62a;</span>
							<h4>待付款</h4>
						</li>
						<li>
							<span class="iconfont">&#xe60a;</span>
							<h4>待发货</h4>
						</li>
						<li>
							<span class="iconfont">&#xe613;</span>
							<h4>待收货</h4>
						</li>
						<li>
							<span class="iconfont">&#xe628;</span>
							<h4>待评价</h4>
						</li>
						<li>
							<span class="iconfont">&#xe60d;</span>
							<h4>退款/售后</h4>
						</li>
					</ul>
				</div>
				<div class="address">
					收货地址管理
				</div>
			</div>

		</div>
		<MenuBar></MenuBar>
	</div>
</template>
<script>
	import { mapState } from 'vuex' //mapState 辅助型函数
	export default{
		name:"User",

		// computed:{
		// 	count(){
		// 		return this.$store.state.count
		// 	}
		// }
		
		// computed:mapState({
		// 	 count: state => state.count
		// })

		// computed:mapState([
		// 	'count','start'])

		computed:{
			localComputed () { /* ... */ },
			...mapState([
				'count','start'
			])
		}
	}
</script>
<style scoped>
	.User{
		width: 750px;

	}
	.header{
		width: 100%;
		height: 460px;

	}
	.header .top{
		width: 100%;
		height: 295px;
		background: #ff9900;
		display: flex;
		justify-content: space-between;
		padding: 20px 30px 0px 45px;
		box-sizing: border-box;
	}
	.header .top .iconfont{
		font-size: 50px;
		color: #fff
	}
	.header .top span{
		font-size: 41px;
		color: #fff;
	}
	.header .down{
		width: 100%;	
		height: 145px;
		
	}
	.header .down .portrait{
		width: 182px;
		height: 182px;
		border-radius: 50%;
		border: 13px solid #ffffff;
		background: #e6dfdf;
		margin: -134px auto 0 auto;
	}
	.header .down h3{
		width: 182px;
		margin: 10px auto 0px auto;
		text-align: center;
		font-size: 32px;
	}
	.content{
		width: 100%;
	}
	.content .collect{
		width: 100%;
		height: 106px;
		border-bottom: 14px solid #efeeee;
		padding-left: 40px;
		box-sizing: border-box;
		line-height: 106px;
	}
	.content .collect .iconfont{
		font-size: 36px;
		color: #ea443f;
		margin-right: 24px;
	}
	.content .collect span{
		font-size: 34px;
		color: #333333;
	}
	.content .order{
		width: 100%;
		height: 580px;

	}
	.content .order .top{
		width: 100%;
		height: 123px;
		border-bottom: 1px solid #b3b3b3;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 40px;
		box-sizing: border-box;
	}
	.content .order .bottom{
		width: 100%;
		height: 188px;
		border-bottom:14px solid #efeeee;
		padding: 0 30px;
		box-sizing: border-box;
	}
	.content .order .bottom ul{
		width: inherit;
		height: inherit;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.content .order .bottom ul li{
		text-align: center;
		
	}
	.order .bottom ul li .iconfont{
		font-size: 48px;
		color: #aaaaaa;
		

	}
	.order .bottom ul li h4{
		color: #666666;
		margin-top: 26px;
	}
</style>

