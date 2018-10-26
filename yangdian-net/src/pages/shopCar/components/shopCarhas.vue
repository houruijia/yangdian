<template>
	<div class="shopCarhas">
		<ul>
			<li v-for="(item,index) of proList" :key="item.id">
				<div class="title">
					<span class="iconfont">&#xe606;</span>
					<p>杭州保税区仓</p>
				</div>
				<v-touch @swipeleft="swipeleftFn(index)" @swiperight="swiperightFn(index)" class="vtouch">
					<div class="main" ref="main">
						<div class="info">
							<label class="checkbox">
								<b :class="item.checked===true?'active':null" @click="item.checked = !item.checked">
								</b>
								<input type="checkbox" :checked="isChecked">
							</label>
							<img :src="item.ImgUrl">
							<div class="mes">
								<p>{{item.ProTitle}}</p>
								<form>
									<button type="button" @click="item.ProNums<=1? item.ProNums=1:item.ProNums--">-</button>
									<input type="text" v-model="item.ProNums">
									<button type="button" @click="item.ProNums++">+</button>
								</form>
							</div>
							<div class="price">
								<span>{{item.Proprice}}</span>
							</div>
						</div>
							<div class="remove" @click="remove(index)">删除</div>
					</div>
				</v-touch>
			</li>
		</ul>
		<div class="computed">
			<label class="allChecked" @click="allChecked()">
				<b :class="isChecked===true?'active':null"></b>
				<input type="checkbox" :checked="isChecked">
				<span>全选</span>
			</label>
			<label class="edit">
				<b></b>
				<input type="checkbox">
				<span>编辑</span>
			</label>
			<div class="total">
				<span>合计:<b>{{alltotal}}</b></span>
				<span>(不含运费)</span>
			</div>
			<button class="result" type="button">去结算</button>
		</div>
	</div>
</template>
<script>
	export default{
		name:"shopCarhas",
		data(){
			return{
			
				proList:[]
			}
		},
		methods:{
			swipeleftFn(index){
				this.$refs.main[index].className = 'left'
			},
			swiperightFn(index){
				this.$refs.main[index].className = 'main'
			},
			allChecked(){
				var that = this
				this.proList.forEach(function(item,i){
					// if (that.isChecked) {
							that.proList[i].checked=true
						// }else{
							// that.proList[i].checked=false
						// }
				})

			},
			remove(i){
				this.proList.splice(i,1)
				localStorage.setItem("proItems",JSON.stringify(this.proList))
			}
		},
		mounted(){
			var pro = JSON.parse(localStorage.getItem("proItems"))
			this.proList = pro
		},
		computed:{
			alltotal(){
			var total = 0
			var that = this
				this.proList.forEach(function(item,i){ 
					if (that.proList[i].checked) {
						total += item.ProNums*item.Proprice
					}
				})
				return total
			},
			isChecked(){
				var bool =true
				this.proList.forEach(function(item){
					if (item.checked === false) {
						bool = false
					}
				})
				return bool
			}
		}
	}
</script>
<style scoped>
	.shopCarhas{
		width: 750px;
		position: relative;
		padding-bottom: 220px;
	}
	.shopCarhas ul li{
		height: 328px;
	}
	.shopCarhas ul li .title{
		height: 100px;
		display: flex;
		line-height: 100px;
		background: #fafafa;
		padding-left: 38px;
	}
	.shopCarhas ul li .title span{
		color: #999999;
		font-size: 36px;
	}
	.shopCarhas ul li .title p{
		margin-left: 26px;
		font-size: 28px;
		color: #999999;
	}
	.shopCarhas ul li .main{
		width: 850px;
		display: flex;
		transition: all .2s;
	}
	.shopCarhas ul li .left{
		width: 850px;
		display: flex;
		margin-left: -100px;
		transition: all .2s;
	}
	.shopCarhas .info{
		width: 750px;
		height: 228px;
		display: flex;
		align-items: center;

	}
	.shopCarhas .info .checkbox b{
		display: block;
		width: 42px;
		height: 42px;
		background: url(../../../images/shopcar/check_none.png) no-repeat;
		background-size:42px; 
		margin-left: 38px;
	}
	.shopCarhas .info .checkbox .active{
		background: url(../../../images/shopcar/check.png) no-repeat;
		background-size: 42px;
	}
	.shopCarhas .info .checkbox input{
		display: none;
	}
	.shopCarhas .info img{
		display: block;
		width: 157px;
		height: 157px;
		margin-left: 28px;
	}
	.shopCarhas .info .mes{
		width: 284px;
		margin-left: 28px;
	}
	.shopCarhas .info .mes form{
		width: 228px;
		height: 41px;
		border: 3px solid #cccccc;
	}
	.shopCarhas .info .mes p{
		font-size: 32px;
		color: #333333;
		line-height: 36px;
		margin-bottom: 34px;
	}
	.info .mes form button{
		width: 71px;
		height: 41px;
		font-size: 32px;
		color: #666666;
		text-align: center;
		line-height: 41px;
	}
	.info .mes form input{
		width: 79px;
		height: 41px;
		border-left: 3px solid #cccccc; 
		border-right:  3px solid #cccccc;
		text-align: center;
		line-height: 41px;
	}
	.info .price{
		width: 130px;
		margin-left: 30px;
		text-align: center;
	}
	.remove{
		width: 100px;
		height: 211px;
		background:#ff9900;
		color: #fff;
		font-size: 32px;
		text-align: center;
		line-height: 211px;
		margin-top: 8px
	}
	.vtouch{
		touch-action: pan-y!important;
	}
	.shopCarhas .computed{
		width: 750px;
		height: 112px;
		border-top: 3px solid #eeeeee;
		border-bottom: 3px solid #eeeeee;
		display: flex;
		align-items: center;
		padding-left: 56px;
		position: fixed;
		bottom: 98px;
		background: #fff;
		
	}
	.shopCarhas .computed .allChecked{
		width: 60px;
		height: 80px;
		margin: 18px 70px 0px 0px;
	}
	.shopCarhas .computed .edit{
		width: 60px;
		height: 80px;
		margin: 18px 70px 0px 0px; 
	}
	.shopCarhas .computed .edit b,.allChecked b{
		display: block;
		width: 42px;
		height: 42px;
		background: url(../../../images/shopcar/check_none.png) center no-repeat;
		background-size:42px; 
	}
	.shopCarhas .computed .active{
		background: url(../../../images/shopcar/check.png) center no-repeat;
		background-size: 42px;
	}

	.shopCarhas .computed .allChecked span,.edit span{
		display: block;
		font-size: 28px;
		color: #747474;
		margin-top: 12px;
	}
	.computed input{
		display: none;
	}
	.computed .total{
		width: 200px;
	}
	.computed .total span{
		display: block;
		text-align: center;
		font-size: 24px;
		color: #999999;
	}
	.computed button{
		width: 232px;
		color: #fff;
		height: inherit;
		background: #ff5500;
		font-size: 37px;
	}
</style>