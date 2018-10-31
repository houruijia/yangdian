<template>
	<div class="Home">
		<div class="Home_wrap">
			<Search class="search"></Search>
			<banner class="banner" :datas="bannerList"></banner>
		</div>
		<proList :info="hot"></proList>
		<proList :info="baby"></proList>
		<proList :info="beauty"></proList>
		<proList :info="life"></proList>
		<proList :info="food"></proList>
		<proList :info="global"></proList>
		<MenuBar></MenuBar>
	</div>	
</template>
<script>
	import Search from '../.././components/Search.vue'
	import banner from './components/banner.vue'
	import proList from './components/proList.vue'
	import axios from 'axios'
	export default{
		name:"Home",
		data(){
			return{
					hot:"",
					baby:"",
					beauty:"",
					life:"",
					food:"",
					global:"",
					bannerList:""
			}
		},
		components:{
			Search,
			banner,
			proList
		},
		created(){
			var that = this
			axios.get('/api/homeJson')
			.then(function(res){
				that.hot = res.data.data.hot
				that.baby = res.data.data.baby
				that.beauty = res.data.data.beauty
				that.life = res.data.data.life
				that.food = res.data.data.food
				that.global = res.data.data.global
				that.bannerList = res.data.data.banner
			})
		}
	}
</script>
<style scoped>
	.Home{
		padding-bottom: 104px;
	}
	.Home .Home_wrap{
		height: 474px;
		position:relative;
	}
	.Home .banner{
		position : absolute;
		z-index: 1;
		left: 0;
		right: 0;
		margin: 0px auto;
	}
	.Home .search{
		position: absolute;
		z-index:2;
		left: 0;
		right: 0;
		margin: 14px auto 0px auto;
	}
</style>