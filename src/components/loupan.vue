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
							<p class="p1">{{i.p1xq}}</p>
							<p class="p2">{{i.span}}</p>
							<p class="p3">{{i.p2xq}}</p>
						</li>
					</ul>
				</div>
			</div>