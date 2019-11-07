<template>
<<<<<<< HEAD
  <div>
      效果图
=======
  <div class="xiaoguo">
    <div class="box" v-show="!showXQ">
      <!--上面的table组件-->
      <tableUl :headerList="headerList"></tableUl>
      <div class="content">
        <!--图片数据的渲染-->
        <div class="main">
          <figure
            v-for="(item,index) of mainImg.length&&mainImg[FyIndex]"
            :key="index"
            @click="goXiangqing(item.url,index)"
          >
            <img :src="item.img_src" />
            <figcaption>{{item.pingfang}}m&sup2;&nbsp;{{item.miaoshu}}</figcaption>
            <p>{{item.jianshu}}</p>
          </figure>
        </div>
        <!--分页器-->
        <van-pagination
          v-model="currentPage"
          :page-count="num"
          mode="simple"
          class="page"
          @change="fenYe"
          :items-per-page="6"
        />
      </div>
    </div>
    <!--跳转到详情页面的路由 携带数据-->
    <router-view :mapList="mapList" v-show="showXQ"></router-view>
    <!--下面房先森的文字描述-->
    <div class="bottom">
      <JianJie :jianjie="jianjie"></JianJie>
    </div>
>>>>>>> bd3a62fb6612767420e94226a5208826c864f84f
  </div>
</template>

<script>
<<<<<<< HEAD
export default {

}
</script>

<style>

</style>
=======
import tableUl from "./table/index.vue";
import JianJie from "./text/index.vue";
export default {
  data() {
    return {
      currentPage: 1, //分页器当前所在页数
      FyIndex: 0, //分页器显示数据的下标
      mapList: {}, //详情页面的数据
      showXQ: false //详情页面和主体页面的显示、隐藏
    };
  },
  //生命周期中获取所有数据
  created() {
    if(this.$route.fullPath == '/designSketch'){
      this.$store.dispatch("GETALL");
    }else if(true){

    }
    
  },
  methods: {
    //跳转详情路由，获得数据
    async goXiangqing(url, index) {
      this.$router.push({ path: url });
      var mapList = await fetch("/getall").then(res => res.json());
      //console.log(this.$route.params.id)
      this.mapList = mapList.mainImg[index];
      // console.log(this.showXQ)
      this.showXQ = !this.showXQ;
    },
    //点击分页器，显示相对应的数据
    fenYe() {
      this.FyIndex = this.currentPage - 1;
    }
  },
  computed: {
    //table中的数据
    headerList() {
      return this.$store.state.headerList;
    },
    //底部简介的文字
    jianjie() {
      return this.$store.state.jianjie;
    },
    //主体页面的数据
    mainImg() {
      //  console.log('123')
        return this.$store.state.mainImg;
      
    },
    //分页总页数
    num() {
      return this.$store.state.num;
    }
  },
  //注册组件
  components: {
    tableUl,
    JianJie
  }
};
</script>

<style scoped lang="stylus" src="./css/designSketch.styl"></style>
>>>>>>> bd3a62fb6612767420e94226a5208826c864f84f
