<template>
<!--详情页面-->
  <div class="xiangqing">
    <div class="img">
      <!--vue轮播图 点击轮播-->
      <md-card class="swiper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) of mapList.XQ[0].XQimg" :key="index">
            <img :src="item" />
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </md-card>
    </div>
    <!--对上面显示图片的描述-->
    <div class="text">
      <p>
        <span id="txt">设计诠释:</span>
        {{mapList.XQ[1].SJQS}}
      </p>
    </div>
  </div>
</template>
  </div>
</template>

<script>
export default {
  name: "xiangqing",
  //接收数据
  props: ["mapList"],
  data() {
    return {
      name: "",
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style  scoped>
body,
html,
#app {
  width: 100%;
  height: 100%;
}
.xiangqing {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 3;
  background: rgb(0, 0, 0);
  color: #fff;
}
.img {
  box-sizing: content-box;
  padding: 65px 0 !important;
}
.img,
.swiper,
.swiper-container,
img {
  width: 100%;
  height: 240px !important;
}
.text p {
  font-size: 18px;
  letter-spacing: 5px;
  line-height: 30px !important;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  padding-left: 13px !important;
  padding-bottom: 15px !important;
}
#txt {
  font-weight: bolder;
  font-size: 20px;
  letter-spacing: 4px;
}
</style>