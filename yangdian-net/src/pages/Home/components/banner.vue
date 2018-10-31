<template>
	<div class="banner">
		<swiper v-if="datas.length>1" :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
		    <swiper-slide v-for="item of datas" :key="item.id">
		    	<img :src="require(`@/images/Home/${item.url}.jpg`)" class="image-item">
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
	</div>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		name:"banner",
		props:["datas"],
		data(){
			return{
				swiperOption: {
					pagination: {
					            el: '.swiper-pagination'
					          },
					          autoplay:{
					          	stopOnLastSlide:false,
					          	delay:2000,
					          	disableOnInteraction:false
					          },
					          loop:true
				        },
				        swiperSlides:[1,2,3]
				
			}
		},
		components: {
		    swiper,
		    swiperSlide
		  }
	}
</script>
<style scoped>
	.banner{
		width:750px;
		height:474px;
	}
	.banner .swiper-slide .image-item {
		width: 750px;
		height: 474px;
	}
	.banner >>> .swiper-pagination-bullet{
		width: 20px;
		height: 20px;
		display: inline-block;
	}
</style>