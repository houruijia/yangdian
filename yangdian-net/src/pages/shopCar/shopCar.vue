<template>
	<div class="shopCar">
		<div class="header">
			<div class="left">
				<router-link to="/Classify">
					<span class="iconfont">&#xe60e;</span></router-link>
				<span class="title">购物车</span>
			</div>
		</div>
		<shopCarhas v-if="bool"></shopCarhas>
		<shopCarNo v-else></shopCarNo>
		<MenuBar></MenuBar>
	</div>
	
</template>
<script>
	import shopCarNo from './components/shopCarNo.vue'
	import shopCarhas from './components/shopCarhas.vue'
	export default{
		name:"shopCar",
		components:{
			shopCarNo,
			shopCarhas
		},
		data(){
			return{
				bool:false
			}
		},
		mounted(){
			if (localStorage.getItem("proItems")) {
				this.bool = true
			}else{
				this.bool = false
			}
		}
	}
</script>
<style scoped>
	.header{
		width: 100%;
		height: 100px;
		background: #ff9900;
	}
	.header .left{
		width: 430px;
		height: inherit;
		display: flex;
		justify-content: space-between;
		padding-left: 38px;
		box-sizing: border-box;
		line-height: 100px;
	}
	.header .left span{
		font-size: 37px;
		color: #fff;
	}
	.header .left .title{
		font-size: 42px;
		color: #fff;
	}
</style>