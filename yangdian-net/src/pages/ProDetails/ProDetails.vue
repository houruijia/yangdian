<template>
	<div class="ProDetails" ref="ProDetails">
		<div class="main">
			<div class="header">
				<div class="top">
					<span>&lt;</span>
					<div>
						<router-link to="/shopCar">
							<span class="iconfont">&#xe606;</span>
						</router-link>
						<span>...</span>
					</div>	
				</div>		
				<banner class="banner"></banner>
			</div>
		<div class="info">
			<div class="title">
				<p>Aptamil 德国爱他美  婴儿奶粉  2段800/克 3罐装  6-10月</p>
				<div class="collect">
					<span class="iconfont">&#xe606;</span>
					<span>收藏</span>
				</div>
			</div>
			<div class="mes">
				<div class="price">
					<span class="new_price">445</span>
					<span class="old_price">998</span>
				</div>
				<div class="list">
					<ul class="list_top">
						<li>6.5折</li>
						<li>包邮</li>
					</ul>
					<ul class="list_bottom">
						<li>正品货源</li>
						<li>一件代发</li>
						<li>全球直邮</li>
						<li>售后无忧</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="tab">
			<ul class="item_title">
				<li v-for="(item,index) of tabTitle" :key="item.id" :class="current===index?'on':null" @click="handelClick(index)">
					<router-link :to="item.url">{{item.name}}</router-link>
				</li>
			</ul>
			<div class="tab_com">
				<router-view></router-view>
			</div>
		</div>
		</div>
		<!-- 遮罩层 -->
		<div class="mask" v-show="bool">
			<div class="bg" @click="clearMask()"></div>
			<order class="order" :value="title" @close="clearMask()"></order>
		</div>
		<div class="alert" v-show="boolB">
			添加购物车成功
		</div>
		<div class="buyMemu">
			<button class="addBuyCar" type="button" @click="showMask()">加入购物车</button>
			<button class="buy" type="button">立即购买</button>
		</div>
	</div>
</template>
<script>
	import banner from './components/banner'
	import detailsPage from './components/detailsPage'
	import publicPraise from './components/publicPraise'
	import order from './components/order.vue'
	export default{
		name:"ProDetails",
		components:{
			banner,
			detailsPage,
			publicPraise,
			order
		},
		data(){
			return{
				tabTitle:[
				{
					id:1,
					name:"商品详情",
					url:"/ProDetails/detailsPage"
				},
				{
					id:2,
					name:"买家口碑",
					url:"/ProDetails/publicPraise"
				}
				],
				current:0,
				bool:false,
				boolB:false,
				title:"Aptamil 德国爱他美  婴儿奶粉  2段800/克 3罐装  6-10月"
			}
		},
		methods:{
			handelClick(i){
				this.current = i
			},
			showMask(){
				this.bool = true
				this.$refs.ProDetails.className='proMask'
			},
			clearMask(){
				this.bool = false
				this.$refs.ProDetails.className=''
				this.boolB = true
				var that = this
				setTimeout(function(){
					that.boolB = false
				},2000)
			}
		}
	}
</script>
<style scoped>
	.ProDetails{
		position: relative;
	}
	.main{
		position: absolute;
		z-index: 1;
	}
	.header{
		width: 750px;
		height: 542px;
		margin: 0 atuo;
		position: relative;
	}
	.header .top{
		width: 100%;
		height: 72px;
		display: flex;
		justify-content: space-between;
		padding: 0px 22px;
		box-sizing: border-box;
		position: absolute;
		top: 0;
		z-index: 2;
	}
	.header .top span{
		color:#fff;
		font-size: 30px;
		width: 52px;
		height: 52px;
		display: block;
		background: #dddddd;
		border-radius: 52px;
		text-align: center;
		line-height: 52px;
		margin: 10px 0px;
		opacity: 0.5;
	}
	.header .top div{
		width: 145px;
		display: flex;
		justify-content: space-between;
	}


	.buyMemu{
		width:100%;
		height:97px;
		display: flex;
		justify-content: flex-end;
		position: fixed;
		bottom: 0;
		border-top: 1px #dddddd solid;
		z-index: 999;
		background: #fff;
	}
	.buyMemu button{
		width: 200px;
		height:97px;
		color: #fff;
		text-align: center;
		line-height: 97px;
		font-family: "苹方";
	}
	.buyMemu .addBuyCar{
		background:#ff9900;
	}
	.buyMemu .buy{
		background:#eb2222;
	}
	.main .header .banner{
		position: absolute;
		z-index: 1;
	}

	.info{
		width: 100%;
		border-top: 1px solid #eeeeee;
		border-bottom: 32px solid #eeeeee;
		padding: 0 28px;
		box-sizing: border-box;
	}
	.info .title{
		display: flex;
		justify-content: space-between;
		position: relative;
	}
	.info .title p{
		width: 575px;
		font-size: 30px;
		letter-spacing: 1px;
	}
	.info .title .collect{
		width: 60px;
		height: 70px;
	}
	.info .title .collect span{
		display: block;
		color: red;
		font-size: 30px;
		text-align: center;
		margin: 5px 0px;
	}
	.info .mes{
		display: flex;
	}
	.info .mes .price{
		width: 170px;
		height: 90px;
	}
	.info .mes .new_price{
		font-size: 34px;
		color: #eb2222;
		display: block;
		margin-bottom: 10px; 
	}
	.info .mes .old_price{
		font-size: 24px;
		color: #999999;
		text-decoration: line-through;
	}
	.info .mes .list ul{
		display: flex;
		flex-wrap: wrap;
	}
	.info .mes .list ul li{
		margin: 5px 10px;
		text-align: center;
		font-size: 20px;

	}
	.info .mes .list_top li{
		width: 70px;
		height: 30px;
		background: #ff9900;
		color: #fff;
		line-height: 30px;
	}
	.info .mes .list_bottom li{
		height: 24px;
		border: 3px solid #ff9900;
		color: #ff9900;
		line-height: 24px;
		padding: 0 4px;
	}
	.tab{
		height: 3283px;
		width: 750px;
		margin: 0 auto;
	}
	.tab ul{
		display: flex;
		justify-content: space-around;
	}
	.tab ul li{
		width: 150px;
		height: 59px;
		text-align: center;
		line-height: 59px;
		color: #999999;
	}
	.tab ul li.on{
		border-bottom: 3px solid #ff9900;
		
	}
	.tab ul li.on a{
		color: #ff9900;
	}
	.mask{
		width: 100%;
		height: 1196px;
		position:relative;
		z-index: 12;
	}
	.mask .bg{
		width: inherit;
		height: inherit;
		background: #000;
		opacity: 0.5;
	}
	.mask .order{
		width: inherit;
		background:#fff;	
		position: absolute;
		bottom: 0px;
	}
	.proMask{
		height:1196px;
		width: 100%;
		overflow: hidden;
		position: relative;
	}
	.alert{
		width: 240px;
		height: 80px;
		color: orange;
		opacity: 0.6;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		z-index: 10;
		background: #000;
		border-radius: 18px;
		text-align: center;
		line-height: 80px;
		font-size: 30px;
	}
</style>