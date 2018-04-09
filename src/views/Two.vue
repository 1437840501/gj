<template>
	<div class="conta">
    <div class="lp">
    <div class="lp-1">
    <span>首页 ＞ 联系动态</span>
    </div>
    </div>
		<div class="conta_cont">
			<div class="conta_left">
				<div class="conta_text">
					<div class="block_kuai"></div>
					<p>联系我们 - CONTACE</p>
				</div>
				<div class="conta_contace">
					<ul>
						<li>
							<p>Tom <img src="../assets/8.png" alt="" /></p>
							<p class="p2">188 0000 0000  /  008-6666 6666</p>
						</li>
						<li>
							<p>Smith <img src="../assets/8.png" alt="" /></p>
							<p class="p2">188 0000 0000  /  008-6666 6666</p>
						</li>
						<li>
							<p>Andy <img src="../assets/8.png" alt="" /></p>
							<p class="p2">188 0000 0000  /  008-6666 6666</p>
						</li>
					</ul>
				</div>
				<div class="conta_p">
					<p class="p1">我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能设计出最具专业水准的网站。想创建一个简单的单页式站点，还是一个专业的公司网站，亦或是一个别具一格的博客？云建站可以满足您的所有需求。我们是响应式网站的倡导者，所有前端页面代码均采用HMLT5和CSS3实现。</p>
					<p class="p2">邮箱：info@realestate.com</p>
					<p class="p3">地址：上海市静安区南京西路时代大厦</p>
				</div>
			</div>
			<div class="conta_right">
				<input type="text" placeholder="称呼"/>
				<input type="text" placeholder="邮箱"/>
				<input type="text" placeholder="电话"/>
				<textarea placeholder="内容"></textarea>
				<input type="text" placeholder="验证码"/>
				<img src="../assets/9.png" alt="" />
				<button>提交</button>
			</div>
		</div>
		<div class="conta_map">
			<img src="../assets/10.png" alt="" />
		</div>
		

	</div>
</template>

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
	.conta_cont{
		width: 86%;
		height: 540px;
		margin: auto;
	}
	
	.conta_left {
		width: 63%;
		height: 540px;
		float: left;
	}
	
	.conta_text {
		width: 100%;
		height: 120px;
		line-height: 120px;
		font-size: 14px;
		border-bottom: 1px solid #ccc;
	}
	
	.block_kuai {
		width: 20px;
		height: 20px;
		background-color: #000000;
		float: left;
		margin: 50px 15px 50px 0;
	}
	.conta_contace{
		width: 100%;
		height: 100px;
		border-bottom: 1px solid #ccc;
	}
	.conta_contace li{
		list-style: none;
		float: left;
		font-size: 16px;
		line-height: 25px;
		margin-right: 32px;
	}
	.conta_contace li p{
		margin-top: 25px;
	}
	.conta_contace li .p2{
		font-size: 14px;
		margin-top: 0;
		color: blue;
	}
	.conta_p{
		width: 100%;
		height: 200px;
		font-size: 12px;
	}
	.conta_p .p1{
		line-height: 20px;
		margin: 35px 0;
	}
	.conta_p .p2{
		margin-bottom: 10px;
	}
	.conta_right{
		width: 32%;
		height: 380px;
		float: right;
		margin-top: 60px;
		background-color: #F7F7F7;
	}
	
	.conta_right input{
		border: none;
		width: 90%;
		height: 43px;
		margin-left: 5%;
		text-indent: 10px;
		border-bottom: 1px solid #ccc;
		background-color: #F7F7F7;
		outline: none;
		margin-top: 3px;
		font-size: 12px;
	}
	.conta_right textarea{
		border: none;
		width: 90%;
		height: 70px;
		margin-left: 5%;
		text-indent: 10px;
		border-bottom: 1px solid #ccc;
		background-color: #F7F7F7;
		line-height: 40px;
		outline: none;
		font-size: 12px;
	}
	.conta_right img{
		margin: 5px 5%;
	}
	.conta_right button{
		width: 110px;
		height: 32px;
		background-color: #000000;
		border: none;
		display: block;
		color: #ccc;
		font-size: 12px;
		outline: none;
		margin-left: 5%;
		margin-top: 3px;
	}
	.conta_map img{
		width: 100%;
	}
</style>