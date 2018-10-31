<template>
	<div class="Classify">
		<div class="header">
			<Search></Search>
		</div>
		<div class="main">
			<div class="slideBar" ref="left">
				<ul>
					<li 
					v-for="(item,index) of slideBar" 
					:class="{on:index===current}" 
					@click="handelClick(index,$event)"
					:key="index"
					>{{item}}</li>
				</ul>
			</div>
			<div class="wrapper" ref="wrapper">
				<ul class="wrapper_ul">
					<li class="wrapper_li" v-for="(items,index) of porList" :key="index" ref="wrapper_li">
						<ul class="pro_items">
							<li class="pro_item" v-for="item of items" :key="item.id">
								<router-link to="/ProDetails">
									<div class="image">
										<img :src="item.imgUrl">
									</div>
									<p class="text">{{item.text}}</p>
								</router-link>
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
	import BetterScroll from 'better-scroll'
	export default{
		name:"Classify",
		components:{
			Search
		},
		data(){
			return{
				scrollY:0,
				slideBar:["母婴专区","美妆护肤","家居生活","食品营养","全球直邮"],
				listHeight:[],
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
					],
					[
					{
						"id":1,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"美妆"
					},
					{
						"id":2,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"美妆"
					},
					{
						"id":3,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"美妆"
					},
					{
						"id":4,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"美妆"
					},
					{
						"id":5,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"美妆"
					},
					{
						"id":6,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"美妆"
					},
					{
						"id":7,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"美妆"
					},
					{
						"id":8,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"美妆"
					},
					{
						"id":9,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"美妆"
					},
					{
						"id":10,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"美妆"
					},
					{
						"id":11,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"美妆"
					},
					{
						"id":12,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"美妆"
					}
					],
					[
					{
						"id":1,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"家具"
					},
					{
						"id":2,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"家具"
					},
					{
						"id":3,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"家具"
					},
					{
						"id":4,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"家具"
					},
					{
						"id":5,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"家具"
					},
					{
						"id":6,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"家具"
					},
					{
						"id":7,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"家具"
					},
					{
						"id":8,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"家具"
					},
					{
						"id":9,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"家具"
					},
					{
						"id":10,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"家具"
					},
					{
						"id":11,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"家具"
					},
					{
						"id":12,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"家具"
					}
					],
					[
					{
						"id":1,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"食品"
					},
					{
						"id":2,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"食品"
					},
					{
						"id":3,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"食品"
					},
					{
						"id":4,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"食品"
					},
					{
						"id":5,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"食品"
					},
					{
						"id":6,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"食品"
					},
					{
						"id":7,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"食品"
					},
					{
						"id":8,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"食品"
					},
					{
						"id":9,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"食品"
					},
					{
						"id":10,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"食品"
					},
					{
						"id":11,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"食品"
					},
					{
						"id":12,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"食品"
					}
					],
					[
					{
						"id":1,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"全球"
					},
					{
						"id":2,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"全球"
					},
					{
						"id":3,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"全球"
					},
					{
						"id":4,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"全球"
					},
					{
						"id":5,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"全球"
					},
					{
						"id":6,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"全球"
					},
					{
						"id":7,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"全球"
					},
					{
						"id":8,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"全球"
					},
					{
						"id":9,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"全球"
					},
					{
						"id":10,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"全球"
					},
					{
						"id":11,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"全球"
					},
					{
						"id":12,
						"imgUrl":require('../.././images/classify/pro01.jpg'),
						"text":"全球"
					}
					]
				]
			}
		},
		// better-scroll会将点击事件去掉，如果滚动部分需要有点击事件，需要在参数里加上click：true。同时，在PC上或某些手机端，由于未成功将touchend事件move掉，点击事件会执行两次
		methods:{
			handelClick(i){
				if (!event._constructed) {
					return
				}else{
					var right = this.$refs.wrapper_li
					var el = right[i]
					this.rights.scrollToElement(el,300)
					// window.console.log(right);
				}
				
			},
		//初始化
			initScroll(){
				this.lefts = new BetterScroll(this.$refs.left,{
					click:true
				})
				this.rights = new BetterScroll(this.$refs.wrapper,{
					probeType:3,
					click:true
				})
				this.rights.on('scroll',(props)=>{
					this.scrollY = Math.abs(Math.round(props.y))
					// console.log(this.scrollY);
				})
			},
			// 获取高度
			getHeight(){
				// 获取整个li
				var itemHeight = this.$refs.wrapper_li
				// 定义初始高度
				var height=0
				this.listHeight.push(height)
				var that = this
				for (var i = 0; i < itemHeight.length; i++) {
					height+=itemHeight[i].clientHeight
					that.listHeight.push(height)
				}
				// console.log(this.listHeight);
			}
		},
		mounted(){
			var that = this
			this.$nextTick(function(){
				that.initScroll()
				that.getHeight()
			})
		},
		computed:{
			current(){
				for (var i = 0; i < this.listHeight.length-1; i++) {
					var h1 = this.listHeight[i]
					var h2 = this.listHeight[i+1]
					if (this.scrollY >= h1 &&this.scrollY < h2) {
						return i
					}
					if (this.scrollY>= this.listHeight[this.listHeight.length-1]) {
						return 0
					}
				}
			}
		}
	}
</script>
<style scoped>
	.Classify{
		padding-bottom: 104px;
	}
	.header{
		height: 85px;
		width: 100%;
		background: #ff9900;
		overflow: hidden;
		position: fixed;
		top: 0;
		z-index:998;
		padding-top: 23px;
	}
	.header .search{
		margin-top: 25px;
	}
	.main{
		width: 100%;
		display: flex;
		height: 1617px;
		overflow: hidden;
		margin-top: 108px;
	}
	.main .slideBar{
		width: 234px;
		background: #fafafa
	}
	.main .slideBar ul{
		
	}
	.main .slideBar ul li{
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


	.wrapper{
		width: 516px;
	}
	.main .wrapper_ul{
		
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
		margin: 17px 0px;

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