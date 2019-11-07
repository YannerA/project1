<template>
<<<<<<< HEAD
    <div class="box">
        <header id="ding">

        </header>
        <div class="shaixuan">
            <ul>
                <li @click="show">筛选V</li>
                <li>风格V</li>
                <li>排序V</li>
                <li><img src="../../../public/img/common/icon_qzone.png" alt=""></li>
            </ul>
            <div class="hei" v-if="isshow" @mousewheel.prevent @touchmove.prevent>
                <ol>
                    <li v-for="(item, index) of shaixuan" :key="index">
                        <h3>{{item.jibie}}</h3>
                        <dl>
                            <dt 
                                v-for="(items , indexs) of item.jibies" 
                                :key="indexs" 
                                :class="{'cur' : index_s == indexs}"   
                                @click="xuan(indexs, index)" >
                                {{items}}</dt>
                        </dl>
                    </li>
                <button type="button">确定</button>

                </ol>
            </div>
        </div>
        <router-view></router-view>
        <div class="xian"></div>
        <section>
            <ul>
                <li v-for="(item, index) of list" :key="index" @click="tiao(item.url,item.id)">
                    <div class="touxiang">
                        <img :src="item.touxiang" alt="">
                    </div>
                    <div class="xinxi">
                        <div class="mingzi">
                            <div class="mingzis">
                                <h1>{{item.xingming}}</h1>
                                <p>{{item.youxiu}}</p>
                            </div>
                            <div class="renqi">
                                <span>{{item.renqi}}</span>人气
                            </div>
                        </div>
                        <div class="zuopin">
                            作品：<span>{{item.zuopin}}</span>
                            经验：<span>{{item.jingyan}}</span>
                            评价：<span>{{item.pingjia}}</span>
                        </div>
                        <div class="fengge">
                            擅长风格：<span>{{item.fengge}}</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="fenye">
                <van-pagination 
                
                mode="simple" 
                v-model="dangqian"
                :total-items="5"
                :items-per-page="2"
                />
            </div>
            <a href="#ding" id="tou"></a>
        </section>
        <div class="xian"></div>
        <footer>
            <div class="jio_text">
                <span v-for="(item, index) of text" :key="index">
                    {{item}}
                </span>
            </div>
            <div class="xian"></div>
        </footer>
        <div class="jio">

        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Pagination } from 'vant';
export default {
    data(){
        return {
            dangqian:1,
            // pageall:5,
            fenyeindex:0,
            isshow:false,
            index_s:0,
            index_num:0
        }
    },
    created(){
        this.$store.dispatch("GETALL");
    },
    computed:{
        list(){
            return this.$store.state.list.lists;
        },
        text(){
            return this.$store.state.list.wenzi;
        },
        shaixuan(){
            return this.$store.state.list.shaixuan;
        }
    },
    methods:{
        tiao(url,id){
            this.$router.push({path:url})
            this.$store.commit("XIANGQING",id)
            
        },
        show(){
            this.isshow = !this.isshow
        },
        xuan(indexs,index){
            this.index_s = indexs;
            this.index_num = index;
        }
    }
    
}
</script>
<style lang="stylus" scoped>
    html,body{
        overflow-x hidden;
    }
    header{
        width 100%;
        height rem(60px);
    }
    .xian{
        width 100%;
        height rem(18px);
        background #F4F4F4;
    }
    .shaixuan{
        width:100%;
        border-top 1px solid #999;
        ul{
            display flex;
            align-items center;
            li{
                flex 1;
                text-align center;
                padding rem(10px) 0;
                img{
                    width rem(30px);
                }
            }
        }
        .hei{
            width 100%;
            height 100%;
            background rgba(0,0,0,0.75);
            position absolute;
            z-index 9999;
            ol{
                width:100%;
                background #f4f4f4;
                li{
                    width 95%;
                    margin 0 auto;
                    padding-top rem(15px);
                }
            }
            dl{
                width 100%;
                margin 0 auto;
                display flex;
                flex-wrap wrap;
                dt{
                    width 32%;
                    padding rem(5px) 0;
                    border 1px solid #fff;
                    background #fff;
                    color #999;
                    text-align center;
                    margin-top rem(15px);
                    margin-right rem(4.75px);
                    &:first-child{
                        border 1px solid #00b2b2;
                    }
                }
                .cur{
                        border 1px solid #00b2b2;
                        color #00b2b2;

                }
            }
            button{
                width 100%;
                padding rem(15px) 0;
                color #fff;
                background #00b2b2;
                border none;
                margin-top rem(15px);
            }
        }
    }
    section{
        width 95%;
        margin 0 auto;
        ul{
            width:100%;
            li{
                display flex;
                align-items center;
                padding rem(10px) 0;
                border-bottom 1px solid #f4f4f4;
                .touxiang{
                    padding-right rem(10px);
                    img{
                        width rem(80px);
                        height rem(80px);
                        border-radius 50%;
                    }
                }
                .xinxi{
                    flex 1;
                    .mingzi{
                        display flex;
                        justify-content space-between;
                        align-items center;
                        .mingzis{
                            h1{
                                display inline-block;
                                font-weight 500;
                            }
                            p{
                                display inline-block;
                                margin-left rem(20px);
                                padding rem(5px);
                                color #fff;
                                background #39c894;
                                border-radius rem(5px);
                            }
                        }
                        .renqi{
                            color #999;
                            font-size rem(20px);
                            span{
                                color #F9BC47;
                            }
                        }
                    }
                    .zuopin{
                        span{
                            color #999;
                            padding-right rem(15px);
                        }
                    }
                    .fengge{
                        span{
                            color #999;
                        }
                    }
                }
            }
        }
        .fenye{
            padding rem(15px) 0;
        }
    }
    footer{
        width:100%;
        .jio_text{
            width:95%;
            margin 0 auto;
            text-indent 2em;
            font-size rem(19px);
            padding rem(15px) 0;
            span{
                line-height rem(30px);
            }
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
=======
  <div>
      设计师
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
>>>>>>> bd3a62fb6612767420e94226a5208826c864f84f
