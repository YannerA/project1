<template>
  <ul>
    <!--上面的table组件-->
    <!--table切换-->
    <li v-for="(item,index) of headerList " :key="index" @click="show(index,item.isShow)">
      {{item.name}}
      <span
        class="iconfont icon-down"
        :class="{'icon-up':tableIndex===index&&item.isShow}"
      ></span>
      <!--table切换-->
      <div class="table" v-show="tableIndex===index&&item.isShow">
        <div class="title">
          <p
            v-for="(_item,_index) of item.children"
            :key="_index"
            @click="routerGoXQ2(_item.url,index,_index)"
            :class="{'cur':tableIndex2 === index&&pIndex === _index}"
          >{{_item.title}}</p>
        </div>
      </div>
    </li>
    <!--点击跳转到搜索页面-->
    <li class="iconfont icon-search" @click="routerGo(url)">
      <router-view v-show="isShow"></router-view>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["headerList"],
  data() {
    return {
      tableIndex: 0, //table切换
      url: "/search", //搜索路由
      pIndex: null,
      tableIndex2: null,
      isShow: false
    };
  },
  methods: {
    //table切换
    show(index, isShow) {
      this.tableIndex = index;
      this.$store.commit("ISSHOW", { index, isShow });
    },
    //点击table中的小title，跳转路由
    routerGoXQ2(url, index, _index) {
      this.tableIndex2 = index;
      this.pIndex = _index;
      // console.log('this.tableIndex2',this.tableIndex2)
      // console.log('this.pIndex',this.pIndex)
      $(".table").show();
      this.$store.dispatch("TABLE", { url: url });
      setTimeout(() => {
        this.$router.push({ path: url });
        $(".table").hide();
      }, 2000);
    },
    //点击跳转到搜索路由
    routerGo(url) {
      this.isShow = !this.isShow;
      this.$router.push({ path: url });
    }
  }
};
</script>

<style scoped lang="stylus">
ul {
  height: rem(50);
  line-height: rem(50);
  display: flex;
  background: #fff;

  li {
    font-size: rem(20);
    width: 25%;
    text-align: center;

    .table {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: absolute;
      top: rem(50);
      left: 0;
      z-index: 10;

      .title {
        padding-top: rem(10);
        width: 100%;
        height: rem(200);
        background: #eaeaea;
        display: flex;
        flex-flow: wrap;
        align-content: flex-start;

        p {
          width: 30%;
          height: rem(40);
          line-height: rem(40);
          text-align: center;
          background: #fff;
          margin: rem(10) 0 0 rem(9);
        }
      }
    }

    span.iconfont {
      display: inline-block;
      width: rem(25);
      height: rem(15);
      color: #999;
    }

    &.icon-search {
      font-size: rem(24);
      color: #04cc8b;
    }
  }
}

.cur {
  border: 1px solid #00ca92;
  color: #00ca92;
}
</style>