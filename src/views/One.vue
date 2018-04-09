<template>
  <div class="new">
    <div class="lp">
    <div class="lp-1">
    <span>首页 ＞ 楼市动态</span>
    </div>
    </div>
		<div class="new_cont">
			<div class="new_left">
				<div class="new_text">
					<div class="block_kuai"></div>
					<p>楼市动向 - NEWS</p>
				</div>
				<div class="new_contace">	
					<ul>
						<li v-for="i in arr">
							<img :src="i.img" alt="" />
							<p class="p1">{{i.tit}}</p>
							<p class="p2">{{i.rq}}</p>
							<p class="p3">{{i.nr}}</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="new_right"></div>
		</div>
  </div>
</template>
<script>
	export default {
		data(){
			return {
				arr:[]
			}
		},
		created(){
			this.$http.get("http://localhost:3000/news").then(e=>this.arr=e.body)
		}
	}
</script>
<style>

.lp{
width:100%;
height:80px;
background:#f4f4f4;
float:left;
}
.lp-1{
width:87%;
margin:0 auto;
}
.lp-1 span{
line-height:80px;
}
	.new_cont{
		width: 93%;
		height: 1035px;
		margin-left: 7%;
	}
	.new_left {
		width: 44%;
		float: left;
	}
	
	.new_text {
		width: 100%;
		height: 120px;
		line-height: 120px;
		font-size: 14px;
	}
	
	.block_kuai {
		width: 20px;
		height: 20px;
		background-color: #000000;
		float: left;
		margin: 50px 15px 50px 0;
	}
	
	.new_contace{
		width: 100%;
	}
	.new_contace li{
		margin-bottom: 40px;
		list-style: none;
	}
	.new_contace li img{
		float: left;
		margin-right: 20px;
	}
	.new_contace li .p2{
		font-size: 16px;
		color: blue;
		line-height: 38px;
	}
	.new_contace li .p3{
		font-size: 16px;
		color: #ccc;
	}
	.new_right{
		width: 53%;
		height: 850px;
		float: right;
		margin-top: 55px;
		background: url(../assets/6.jpg);
	}
</style>