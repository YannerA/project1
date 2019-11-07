<template>
  <div class="xiangqing" >
      <!-- 详情页---{{ this.$route.params.id}} -->
      <div class="header">
      </div>
      <div class="neirong" >
          <div>
              <span>{{ maplist.name }}</span>
              <span class="nitu">{{ maplist.jieduan }}</span>
          </div>
          <div class="huxing">
              <span>户型：<a href="#">{{ maplist.huxing }}</a></span>
              <span>面积：<a href="#">{{ maplist.mianji }}</a>m&sup2;</span>
              <span>装修预算：<a href="#">{{ maplist.yusuan}}</a>万</span>
          </div>
          <div>
              <p v-height='40'>工地概况：<span>百万平米超级大盘，占据江湾万平米超级大盘，占据江湾万平米超级大盘，占据江和湿地</span></p>
          </div>
          <div class='pinglun'>
              <p class="iconfont icon-pencle" @click="pinglun(url)"> &nbsp;评论( <span>10</span> )</p>
              <p class="iconfont icon-tag"> &nbsp;预约参观工地</p>
              <router-view ></router-view>
          </div>
      </div>

     
      <div class="bottom-pinglun">
          <div class="sheji">
              <p>设计师： <span>吴飞柯</span></p>
              <p>项目经理: <span>王永龙</span></p>
          </div>
          <div class="shijian">
              <p>2016-07-11</p>
              <p>{{ maplist.jieduan}}</p>
              <p>验收阶段</p>
          </div>

          <div class="wenzi"><span>{{ maplist.jieduan}}</span> 验收成功</div>
          <div class="tupian">
              <img src="/site-img/001.jpg" alt="">
              <img src="/site-img/002.jpg" alt="">
              

          </div>
      </div>

  </div>
</template>

<script>
export default {
    name:'xiangqing',
    props:['maplist'],
    data(){
        return {
            url:"/pinglun"
        }
    },
    
    methods:{
        pinglun(url){
            console.log(url)
            this.$router.push({path: url})
        }
    }
    
}
</script>

<style scope lang='stylus'>
    .xiangqing{
        width 100%;
        // height 100px
        z-index 10
        background rgb(240,240,240)
        .header{
            height rem(50)
            background red
        }
        .neirong{
            width 100%
            // height rem(200)
            div{
                height rem(30)
                margin rem(10) 0 0 rem(10)
                .nitu{
                    display inline-block
                    width rem(80)
                    height rem(30)
                    line-height rem(30)
                    background green
                    color #fff
                    border-radius rem(10)
                    text-align center
                    margin-left rem(10)
                }
            }
            .huxing{

                display flex;
                justify-content space-around
                span:nth-child(1){
                    margin-left rem(-10)
                }
            }
        }
        .pinglun{
            
            display flex;
            justify-content space-around
            align-items center
            p{
                line-height rem(30)
                flex 1;
                border solid 1px #ccc
                text-align center
                margin-top rem(50)
            }
            p:nth-child(1){
                color #1b9af7
            }
             p:nth-child(2){
                color green
            }
        }
        .bottom-pinglun{
            width 100%;
            height 1000;
            
            margin-top rem(30)
            .sheji{
                height rem(40)
                line-height rem(40)
                display  flex;
                justify-content space-around 
                p{
                    flex 1
                    text-align center
                    margin-left rem(-20)
                }
            }
            .shijian{
                height rem(30)
                line-height rem(30)
                overflow hidden
               p{
                   float left
                   width 30%;
                   height rem(40)
                   text-align center
               }
               p:nth-child(1){
                   background #eaeaea;
                   color #666;
                   margin-left rem(10)
               }
               p:nth-child(2){
                   background #39c895;
                   color #fff
               }
               p:nth-child(3){
                   background #feb605;
                   color #fff;
                   margin-left rem(10)
               }
               
                
            }
            .wenzi{
                line-height rem(30)
                margin-left rem(20)
            }
            .tupian{
                display flex;
                flex-wrap wrap
                justify-content space-around
                
                img{
                    width 30%;
                    margin-top rem(10)
                }
            }
            
        }

    }
</style>