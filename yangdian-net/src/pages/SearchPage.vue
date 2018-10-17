<template>
	<div class="SearchPage">
		<button type="button" @click="handelReturn()">返回</button>
		<Search></Search>
		我是搜索页
	</div>
</template>
<script>
import Search from '.././components/Search.vue'
	export default {
		name:"SearchPage",
		components:{
			Search
		},
		methods:{
			handelReturn(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style scoped>
	
</style>