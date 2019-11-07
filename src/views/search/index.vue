<template>
  <div class="xiaoguo" v-height>
    <div class="search">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <div class="bottom">
      <p>{{jianjie}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  created() {
    this.$store.dispatch("GETALL");
  },
  computed: {
    //table中的数据
    headerList() {
      return this.$store.state.headerList;
    },
    //底部简介的文字
    jianjie() {
      return this.$store.state.jianjie;
    }
  },
  methods: {
    //点击搜索
    onSearch() {
      if (this.value) {
        this.$store.dispatch("ONSEARCH", {
          value: this.value,
          cb: this.callback_go_router
        });
        this.value = "";
      }
    },
    //应该是在搜索完毕返回路径之后跳转路由,所以使用回调函数 cb:callback_go_router
    callback_go_router(url) {
      this.$router.push({ path: url });
    }
  }
};
</script>

<style scoped lang="stylus" src="../designSketch/css/designSketch.styl"></style>
