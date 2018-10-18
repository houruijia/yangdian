<template>
	<div class="Home">
		<div class="Home_wrap">
			<Search class="search"></Search>
			<banner class="banner"></banner>
		</div>
		<proList :info="proList.hot"></proList>
		<proList :info="proList.hot"></proList>
		<MenuBar></MenuBar>
	</div>
</template>
<script>
	import Search from '../.././components/Search.vue'
	import banner from './components/banner.vue'
	import proList from './components/proList.vue'
	export default{
		name:"Home",
		data(){
			return{
				proList:{
					hot:{
						titleIcon:"&#xe6a4;",
						title:"今日疯抢",
						proList:[{
							listArray:[{
								id:1,
								imgUrl:require("@/images/Home/pro01.jpg"),
								new_price:88,
								old_price:96,
								proInfo:"美国/SUPER MILD沐浴露500ml"
							},
							{
								id:2,
								imgUrl:require("@/images/Home/pro02.jpg"),
								new_price:88,
								old_price:96,
								proInfo:"美国/SUPER MILD沐浴露500ml"
							}
							]
						},
						{
							listArray:[{
								id:1,
								imgUrl:require("@/images/Home/pro01.jpg"),
								new_price:88,
								old_price:96,
								proInfo:"美国/SUPER MILD沐浴露500ml"
							},
							{
								id:2,
								imgUrl:require("@/images/Home/pro02.jpg"),
								new_price:88,
								old_price:96,
								proInfo:"美国/SUPER MILD沐浴露500ml"
							}
							]
						}]
					}
				}
			}
		},
		components:{
			Search,
			banner,
			proList
		}
	}
</script>
<style scoped>
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