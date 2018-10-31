<template>
	<div class="proList">
		<h2>
			<span class="iconfont" v-html="info.titleIcon"></span>
			<span class="title">{{info.title}}</span>
		</h2>
		<swiper :options="swiperOption" tag="ul" class="proList_ul">
				<swiper-slide 
				tag="li"
				class="proList_li"
				v-for="(items,index) of info.proList"
				:key="index"
				>
					<ul class="proList_items">
						<li 
						class="proList_item"
						v-for="item of items.listArray"
						:key="item.id"
						>
							<router-link to="/ProDetails">
								<div class="image">
									<img :src="require(`@/images/Home/${item.imgUrl}.jpg`)">
								</div>
								<div class="price">
									<span class="new_price">{{item.new_price |floatNum|rmb}}</span>
									<span class="old_price">{{item.old_price |floatNum|rmb}}</span>
								</div>
								<p>
									{{item.proInfo |ellipsis}}
								</p>
							</router-link>
						</li>	
					</ul>
				</swiper-slide>
		</swiper>		
	</div>
</template>
<script>
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	export default{
		name:"proList",
		props:["info"],
		data(){
			return{
				swiperOption:{}
			}
		},
		components: {
			swiper,
			swiperSlide
		},
		filters:{
			floatNum(val){
				return val.toFixed(2)
			},
			rmb(val){
				return "￥"+val
			},
			ellipsis(val){
				var num =20
				if (val.length > num) {
					return val.substring(0,num)+"..."
				}
			}
		}
	}
</script>
<style scoped>
	.proList h2{
		height: 96px;
		line-height: 96px;
		padding-left: 20px;
		font-size: 28px;
		font-family: "宋体";
		
	}
	.proList h2 span{
		font-size: 38px;
		
	}
	.proList .proList_items{
		display: flex;
		justify-content: space-around;
		
	}
	.proList .proList_item{
		width: 324px !important;
		height: 464;
		border: 2px solid;
		padding-bottom: ;
	}
	.proList .proList_item .image{
		width: 324px;
		position: relative;
		padding-bottom: 100%;

	}
	.proList .proList_item img{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		width: 100%;
	}
	.proList .proList_item .price{
		height: 57px;
		display: flex;
		justify-content: space-around;
		line-height: 57px;
	}
	.proList .proList_item .new_price{
		color:#e60012;
	}
	.proList .proList_item .old_price{
		font-size: 28px;
		color: #000;
		text-decoration: line-through;
	}
	.proList .proList_item p{
		padding: 0 38px;
		font-size: 28px;
		font-family: "宋体";
		line-height: 42px;
	}
	
</style>