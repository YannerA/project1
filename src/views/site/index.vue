<template>
  <div class="site">
    <div>
      <router-view :maplist="maplist"></router-view>
    </div>
    <div class="xia" v-show="!$route.params.id">
      <!-- 筛选 -->
      <div class="shaixuan"></div>
      <!-- 内容 -->
      <div
        class="content"
        v-for="(item, index) of zhibo[fenyeIndex]"
        :key="index"
        @click="goXiangqing(item.url, item.id)"
      >
        <div class="left">
          <img :src="'/site-img'+item.zhiboUrl" alt />
        </div>
        <div class="right">
          <p>{{item.loufang}}</p>
          <p class="gongcheng">{{ item.jieduan}}</p>
          <p class="sanshi">
            <span>{{item.huxing}}</span>
            <span>{{item.mianji}}m&sup3;</span>
            <span>{{item.juli}}</span>
          </p>
        </div>
      </div>
      <van-pagination
        v-model="currentPage"
        :total-items="10"
        :items-per-page="3"
        mode="simple"
        @change="shuliang"
      />
    </div>
    <wenzi></wenzi>
  </div>
</template>

<script>
import wenzi from "./wenzi";
export default {
  components: {
    wenzi
  },
  data() {
    return {
      isShow: false,
      maplist: [],
      currentPage: 1,
      fenyeIndex: 0
    };
  },
  created() {
    this.$store.dispatch("GETALL");
  },
  computed: {
    zhibo() {
      return this.$store.state.zhibo;
    }
  },
  methods: {
    // xianshi(){
    // 	this.isShow = !this.isShow
    // },
    async goXiangqing(url, id) {
      // console.log(id)
      this.$router.push({ path: url });
      var { maplist } = await fetch('/getall').then(res => res.json());
      // console.log(maplist)
      this.maplist = maplist[id - 1];
    },
    shuliang() {
      this.fenyeIndex = this.currentPage - 1;
      console.log(this.fenyeIndex);
    }
  }
};
</script>

<style scoped lang='stylus'>
html, body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.xia {
  width: 100%;
  // height 1000px
}

.cur {
  display: none;
}

.shaixuan {
  height: rem(50);
  background: #d1d1d7;
}

.content {
  width: 100%;
  height: rem(150);
  border: solid 1px;

  .left {
    width: 40%;
    height: rem(148);
    float: left;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .right {
    width: 55%;
    float: left;
    margin-left: 10px;

    p {
      margin: rem(10) 0;
      height: rem(40);
      line-height: rem(40);
    }

    .gongcheng {
      width: rem(80);
      height: rem(25);
      line-height: rem(25);
      background: green;
      color: #fff;
      border-radius: rem(10);
      text-align: center;
      font-size: 14px;
    }

    .sanshi {
      span {
        display: inline-block;
        width: rem(75);
      }

      span:nth-child(1) {
        width: rem(50);
      }

      span:nth-child(2) {
        width: rem(80);
      }

      span:nth-child(3) {
        padding-left: rem(20);
      }
    }
  }
}
</style>