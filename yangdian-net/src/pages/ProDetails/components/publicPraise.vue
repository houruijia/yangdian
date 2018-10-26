<template>
	<div class="publicPraise">
		<div class="evaluate_title">
			<ul>
				<li v-for="(item,index) of title" :key="item.id" :class="current===index? 'on': null" @click="handelClick(index)">
					{{item.text}}
				</li>
			</ul>
		</div>
		<div class="evaluate_con">
			
		</div>
	</div>
</template>
<script>
	export default{
		name:"publicPraise",
		data(){
			return{
				title:[{
					id:1,
					text:"全部评价"
				},
				{
					id:2,
					text:"好评"
				},
				{
					id:3,
					text:"差评"
				},
				{
					id:4,
					text:"晒单"
				}],
				current: 0
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
	.publicPraise{
		
	}
	.publicPraise .evaluate_title{
		margin-top: 10px;
		width: 100%;
		height: 70px;
		border: 1px solid #dddddd;
	}
	.evaluate_title ul{
		display: flex;
		justify-content: space-around;
	}
	.evaluate_title ul li{
		width: 135px;
		height: 50px;
		border-radius: 50px;
		background: #999999;
		text-align: center;
		line-height: 50px;
		font-size: 24px;
		color: #fff;
		margin-top: 10px;
	}
	.evaluate_title ul li.on{
		background: #ff9900;
	}

</style>