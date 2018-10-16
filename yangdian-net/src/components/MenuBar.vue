<template>
	<div class="MenuBar">
		<ul>
			<li>
				<router-link to="/">
					<span>首页</span>
				</router-link>
			</li>
			<li>
				<router-link to="Classify">
					<span>分类</span>
				</router-link>
			</li>
			<li>
				<router-link to="/shopCar">
					<span>购物车</span>
				</router-link>
			</li>
			<li>
				<router-link to="/User">
					<span>我</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:"MenuBar"
	}
</script>
<style scoped>
	
</style>