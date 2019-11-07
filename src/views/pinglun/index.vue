<template>
  <div>
    <header></header>
    <div class="wu">
		<div>
			暂无信息
		</div>

		<div class="zhanshi">
			<ul>
				<li>
					<div class="touxiang">
						<img src="/site-img/001.jpg" alt="">
						<p>姓名呵护</p>
						<p>2017-20-10</p>
					</div>
					<p>
						可撒就会犯困了士大夫撒都会好的方式减肥后将大煞风景，末班萨达姆加班费
					</p>
				</li>
				<li>
					<div class="touxiang">
						<img src="/site-img/001.jpg" alt="">
						<p>姓名呵护</p>
						<p>2017-20-10</p>
					</div>
					<p>
						可撒就会犯困了士大夫撒都会好的方式减肥后将大煞风景，末班萨达姆加班费
					</p>
				</li>
			</ul>
		</div>
	</div>
    <div class="lun">
		<div class="top-btn">
			<button type="button">取消</button>
			<span>写评论</span>
			<button type="button" @click="fasong">发送</button>
		</div>
		<textarea > rtyuio</textarea>

	</div>

    <div class="bi">
      	<van-cell is-link @click="showPopup" class="iconfont icon-pencle"></van-cell>
      	<van-popup v-model="show" position="bottom"  :style="{ height: '20%' }">
			  请先<a href="#">登陆</a>或<a href="#">注册为房先森用户</a>
      	</van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
	},
	fasong(){
		console.log(111)
	}
  }
};
</script>

<style scoped lang='stylus'>
header {
  width: 100%;
  height: rem(60);
  background: red;
}
.bi{
  position fixed
  top 60%
  right 0
}
.iconfont.icon-pencle.van-cell.van-cell--clickable{
	width rem(60)
	height rem(60)
	border-radius 50%
	background #1b97fa
	color #fff
	padding-top rem(20)
}
.iconfont.icon-pencle.van-cell.van-cell--clickable::before{
	font-size  rem(30)
}
.lun{
	position fixed;
	bottom 0
	width 100%
	border solid 1px
}
.top-btn{
	height rem(40)
	line-height rem(40)
	
	display flex
	justify-content space-around
	text-align center
	button:nth-child(1){
		width rem(70)
		background  #eee
		color #000
	}
	button{
		width rem(70)
		background  green
		color #fff
	}
	
}
textarea{
	// background red
	width 100%
	height rem(90)
	margin rem(10) 0
	border solid 1px #ccc
}
.zhanshi{
	
	li{
		height rem(100)
		margin-top rem(5)
		border solid 1px
		img{
			width rem(50)
			height rem(50)
			border-radius 50%
		}
	}
}
.touxiang{
	display flex
	justify-content space-around
	text-align center
}
</style>