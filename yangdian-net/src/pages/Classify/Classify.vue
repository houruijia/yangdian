<template>
	<div class="Classify">
		<div class="header">
			<Search></Search>
		</div>
		<div class="main">
			<div class="slideBar">
				<ul>
					<li 
					v-for="(item,index) of slideBar" 
					:class="index===current?'on':null" 
					@click="handelClick(index)"
					:key="index"
					>{{item}}</li>
				</ul>
			</div>
			<div class="wrapper">
				<ul class="wrapper_ul">
					<li class="wrapper_li" v-for="(items,index) of porList" :key="index">
						<ul class="pro_items">
							<li class="pro_item" v-for="item of items" :key="item.id">
								<div class="image">
									<img :src="item.imgUrl">
								</div>
								<p class="text">{{item.text}}</p>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<MenuBar></MenuBar>
	</div>
</template>
<script>
import Search from '@/components/Search.vue'

	export default{
		name:"Classify",
		components:{
			Search
		},
		data(){
			return{
				current:0,
				slideBar:["母婴专区","美妆护肤","家居生活","食品营养","全球直邮"],
				porList:[
					[
					{
						"id":1,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"奶粉"
					},
					{
						"id":2,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"奶粉"
					},
					{
						"id":3,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"奶粉"
					},
					{
						"id":4,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"奶粉"
					},
					{
						"id":5,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"奶粉"
					},
					{
						"id":6,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"奶粉"
					},
					{
						"id":7,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"奶粉"
					},
					{
						"id":8,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"奶粉"
					},
					{
						"id":9,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"奶粉"
					},
					{
						"id":10,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"奶粉"
					},
					{
						"id":11,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"奶粉"
					},
					{
						"id":12,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"奶粉"
					}
					]
				]
			}
		},
		methods:{
			handelClick(i){
				this.current = i
			}
		}
	}
</script>
<style scoped>
	.header{
		height: 78px;
		background: #ff9900;
		padding-top: 60px;
	}
	.main{
		width: 100%;
		height: auto;
		display: flex;
	}
	.main .slideBar{
		width: 230px;
		height: auto;
	}
	.main .slideBar ul{
		
	}
	.main .slideBar ul li{
		width: 230px;
		height:94px;
		line-height: 94px;
		text-align: center;
		position: relative;
		font-size: 28px;
		font-family: "宋体";
	}
	.main .slideBar ul .on:before{
		content:"";
		width: 10px;
		height: 94px;
		background: #1d84a7;
		position:absolute;
		left: 0;
		top: 0;
	}
	.main .slideBar ul .on{
		color: #ff9900;
	}


	.main .wrapper{
		width: 520px;
		height: auto;
		
	}
	.main .wrapper .pro_items{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.main .wrapper .pro_items li{
		
		width: 224px;
		height: 233px;
		border: 3px solid #1d84a7;
		border-radius: 6px;
		margin: 22px 0px;

	}
	.pro_item .image{
		width: 224px;
		height: 188px;
		position: relative;
	}
	.pro_item .image img{
		width: 164px;
		height: 172px;
		position: absolute;
		left: 0;
		right: 0;
		top: 3px;
		bottom: 0;
		margin: auto;
	}
	.pro_item .text{
		width: 224px;
		height: 47px;
		text-align:center;
		line-height: 47px;
		background: #1d84a7;
		font-size: 24px;
		font-family: "宋体";
		color: #f5f8fa;
	}
</style>