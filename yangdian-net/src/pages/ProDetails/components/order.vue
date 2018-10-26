<template>
	<div class="order">
		<div class="header">
			<div class="image">
				<img :src="imgUrl">
			</div>
			<div class="text">
				<span class="price">{{proPrice}}</span>
				<span>库存123456件</span>
				<span>请选择商品属性</span>
			</div>
			<span class="close iconfont">&#xe6a4;</span>
		</div>
		<div class="buyNum">
			<span>购买数量</span>
			<form>
				<button type="button" @click="reduce()">-</button>
				<input type="text" v-model="text" @input="handelInput()">
				<button type="button" @click="add()">+</button>
			</form>
		</div>
		<div class="proStyle">
			<ul class="proStyle_ul">
				<li class="proStyle_li" v-for="(items,index) of proStyle" :key="index">
					<h4>{{items.title}}</h4>
					<ul class="proStyle_items">
						<li v-for="(item,a) of items.proCon" :key="a" :class="current===a? 'on':null" @click="handelOn(a)"
						>{{item}}</li>
					</ul>
				</li>
			</ul>
			<button class="sure" type="button" @click="sub()">确定</button>
		</div>
	</div>
</template>
<script>
	export default{
		name:"order",
		props:["value"],
		data(){
			return{
				current:0,
				text:1,
				proStyle:[{
					title:"大小",
					proCon:["1L","2L","3L","4L"]
				}],
				imgUrl:require("../../../images/details/head_img.jpg"),
				proPrice:445,
				title:this.value,
				id:1,
				arr:[]

			}
		},
		methods:{
			handelInput(){
				var rule = /^[0-9]*[1-9][0-9]*$/
				if (!rule.test(this.text)) {
					this.text = 1
				}
			},
			add(){
				this.text++
			},
			reduce(){
				if (this.text>1) {
				this.text--
				}else{
					this.text = 1
				}
			},
			handelOn(i){
				this.current = i
			},
			sub(){
				var proItems = {
					"id":this.id,
					"ImgUrl":this.imgUrl,
					"ProTitle":this.title,
					"Proprice":this.proPrice,
					"ProNums":this.text,
					"checked":false
				}
				this.arr.push(proItems)
				localStorage.setItem("proItems",JSON.stringify(this.arr))
				this.$emit('close')
				this.id++
			}
		},
		mounted(){
			if (localStorage.getItem("proItems")) {
				this.arr = JSON.parse(localStorage.getItem("proItems"))
			}
		}
	}
</script>
<style scoped>
	.header{
		width: 100%;
		height: 208px;
		position: relative;
		
	}
	.header .image{
		width: 202px;
		height: 202px;
		position: absolute;
		top: -21px;
		left: 49px;
		border: 7px solid #dddddd;
		border-radius: 7px;
	}
	.header .image img{
		width: 100%;
		height: 100%;

	}
	.header .text{
		width: 234px;
		height:136px;
		position: absolute;
		top: 60px;
		left: 300px
	}
	.header .text span{
		display: flex;
		font-size: 25px;
		line-height: 32px;
	}
	.header .text .price{
		color: red;
		font-size: 30px;
	}
	.header .close{
		display: block;
		font-size: 52px;
		position: absolute;
		right: 28px;
		top: 28px;
	}
	.order .buyNum{
		width: 100%;
		height: 80px;
		display: flex;
		justify-content: space-between;
		padding: 0px 40px;
		box-sizing: border-box;
	}
	.order .buyNum span{
		font-size: 30px;
		line-height: 80px;
	}
	.order .buyNum form{
		width: 196px;
		height: 46px;
		border: 2px solid #999999;
		margin-top: 15px
	}
	.order .buyNum form button{
		width: 48px;
		height: 46px;
		color: #fff;
		background: #999999;
		text-align: center;
		line-height: 46px
	}
	.order .buyNum form input{
		width: 100px;
		height: 46px;
		text-align: center;
		line-height: 46px;
	}
	.proStyle{
		width: 100%;
		
	}
	.proStyle_ul{

	}
	.proStyle_li{
		width:100%;
		padding: 0px 42px;
		box-sizing: border-box;
		margin-top: 45px;
	}
	.proStyle_items{
		display: flex;
		justify-content: flex-start;
	}
	.proStyle_items li{
		height: 45px;
		padding: 0px 40px;
		background: #dddddd;
		color: #999999;
		border-radius: 8px;
		margin-right: 20px;
		margin-top: 16px;
		font-size: 25px;
		line-height: 45px;
	}
	.proStyle_items .on{
		color: #fff;
		background: #ff9900;
	}
	.sure{
		width: 100px;
		height: 50px;
		margin: 10px 0px 0px 50px;
		border-radius: 10px;
		color: #999999;
		margin-top: 10px;
	}
</style>