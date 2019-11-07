<template>
  <div class="box1">
      <header>
        <!-- {{datas}} -->
      </header>
      <section>
        <div class="box">
          <div class="xinxi">
            <div class="touxiang" id="ding">
              <img :src="datas.touxiang" alt="">
            </div>
            <div class="xinxi_suoyou">
              <div class="xingming">
                <h1>{{datas.xingming}}</h1><span>{{datas.youxiu}}</span>
              </div>
              <div class="zuopin">
                作品：<span>{{datas.zuopin}}</span>&nbsp;&nbsp;&nbsp;经验：<span>{{datas.jingyan}}</span>
              </div>
              <div class="fengge">
                擅长风格：<span>{{datas.fengge}}</span>
              </div>
              <div class="linian">
                设计理念：<span>{{datas.linian}}</span>
              </div>
            </div>
          </div>
          <div class="xinxi_xia">
            <ul>
              <li v-for="(item, index) of datas.renqis" :key="index">
                <img :src="item.url" alt="">
                <p>{{item.txt}}{{item.num === und ? '' : `(${item.num})`}}</p>
              </li>
            </ul>
          </div>
          <div class="jianli">
            个人简历：<span>{{datas.jianli}}</span>
          </div>
        </div>
        <div class="xian"></div>
        <div class="xiati">
          <div class="xiati_tou">
            <h1>设计作品</h1>
            <h5>设计收费&nbsp; 50-100元/平米</h5>
          </div>
          <ul>
            <li v-for="(item, index) of datas.sheji" :key="index">
              <img :src="item.img_url" alt="">
              <div>
                <p>{{item.jieshao}}</p>
                <span>{{item.price}}</span>
              </div>
            </li>
            
          </ul>
        </div>
        <div class="xian"></div>
        <div class="jio_text">
          <span>
            {{datas.wenzi}}
          </span>
        </div>
        <div class="xian"></div>
        <a href="#ding" id="tou"></a>
      </section>
      <footer>

      </footer>
  </div>
</template>

<script>

export default {
  data(){
    return {
      data:{
        "touxiang":"../../../img/common/icon_qzone.png",
        "xingming":"陈冲",
        "youxiu":"优秀",
        "zuopin":"8个",
        "jingyan":"5年",
        "fengge":"现代/美式简约/新古典",
        "linian":"在满足使用功能的前提下达到审美功能的最大化"
      },
      xinxi:[],
      und:undefined
    }
  },
  computed:{
    datas(){
      return this.$store.state.xiangqing;
    }
  }
}
</script>

<style lang="stylus" scoped>
  html img{
    outline-width 0;
    vertical-align top;
  }
  .box1{
    background #fff;
    position absolute;
    z-index 999;
    top 0;
    left 0;
  }
  section{
    width:100%;
  }
  .box{
    width:95%;
    margin:0 auto;
  }
  .xinxi{
    width:100%;
    padding: rem(20px) 0;
    display:flex;
    .xingming{
      display flex;
      padding-top rem(5px);
      align-items center;
      h1{
        font-weight 500;
      }
      span{
        display block;
        color #fff;
        margin-left rem(15px);
        padding:rem(2px);
        background-color #39c894;
        border-radius rem(3px);
      }
    }
    .zuopin{
      padding-top rem(5px);
      span{
        color #999;
      }
    }
    .linian{
      padding-top rem(5px);
      span{
        color #999;
      }
    }
    .fengge{
      padding-top rem(5px);
      span{
        color #999;
      }
    }
    .touxiang{
      padding-right:rem(10px);
      img{
        width:rem(100px);
        border-radius: 50%;
      }
    }
  }
  .xinxi_xia{
    width:100%;
    ul{
      width:100%;
      padding rem(20px) 0;
      margin 0 auto;
      display flex;
      justify-content space-around;
      li{
        width:20%;
        font-size rem(14px);
        text-align center;
        img{
          width:100%;
          border-radius 50%;
        }
      }
    }
  }
  .jianli{
    width:100%;
    padding-top rem(20px);
    span{
      color: #999;
      line-height rem(25px);
    }
  }
  .xian{
    width:100%;
    height:rem(12px);
    margin rem(15px) 0;
    background:#eaeaea;
  }
  .xiati{
    width:95%;
    margin:0 auto;
    .xiati_tou{
      display flex;
      padding-bottom rem(15px);
      justify-content space-between;
      align-items center;
      h1{
        font-weight 500;
        border-left rem(5px) solid #2bb281;
        padding-left rem(10px);
      }
      h5{
        color:#999;
      }
    }
    ul{
      display flex;
      justify-content space-between;
      flex-wrap wrap;
      li{
        width:49%;
        text-align center;
        padding-bottom rem(8px);
        img{
          width:100%;
        }
        div{
          width:100%;
            border:1px solid #ccc;
            border-top none;
          p{
            font-size rem(18px);
            padding rem(3px) 0;
          }
          span{
            font-size rem(14px);
            color #999;
          }
        }
      }
    }
  }
  .jio_text{
    width:95%;
    margin 0 auto;
    text-indent 2em;
    font-size rem(19px);
    span{
      line-height rem(30px);
    }
  }
  #tou{
    display block;
    width:rem(60px);
    height:rem(60px);
    border 1px solid #999;
    border-radius 50%;
    position fixed;
    bottom rem(130px);
    right rem(20px);
    background #fff;
  }
</style>
