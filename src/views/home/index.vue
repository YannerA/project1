<template>
    <div class="home" v-height>
        <!-- 中间 -->
        <div v-height="60" class="content">
            <!-- 轮播 -->
            <van-swipe :autoplay="3000" class="home-lunbo" v-lazy="img">
                <van-swipe-item v-for="(item, index) in images" :key="index">
                    <img :src="item" />
                </van-swipe-item>
            </van-swipe>
            <!-- 路由导航 -->
            <list :list="list"></list>
            <!-- 全屋装修 -->
            <div class="home-whole">
                <dl class="home-whole-title">
                    <dt>{{whole_WholeHouse.h3}}</dt>
                    <dd>{{whole_WholeHouse.txt}}</dd>
                </dl>
                <swiper :options="swiperOption" class="home-whole-banner" @click="whole">
                    <swiper-slide
                        v-for="(item, index) of whole_WholeHouse_banner"
                        :key="index"
                        style="touch-action: none;"
                    >
                        <img :src="item" />
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="home-whole-bottom">
                    <figure v-for="(item, index) of font" :key="index">
                        <p :class="['iconfont',item.icon]"></p>
                        <figcaption>{{item.txt}}</figcaption>
                    </figure>
                </div>
            </div>
            <!-- 装修预约 -->
            <div class="home-Appointment">
                <dl class="home-whole-title">
                    <dt>{{whole_Appointment.h3}}</dt>
                    <dd>{{whole_Appointment.txt}}</dd>
                </dl>
                <ul>
                    <li>
                        <input type="text" v-model="txt" placeholder="小区名" />
                    </li>
                    <li>
                        <input type="number" v-model="phon" placeholder="手机号" />
                    </li>
                    <li>
                        <input type="number" v-model="num" placeholder="建筑面积" />
                    </li>
                    <li>
                        <button @click="apply">立即申请</button>
                    </li>
                </ul>
            </div>
            <!-- 设计师 -->
            <div class="home-stylist">
                <dl class="home-whole-title" v-for="(item, index) of whole_stylist" :key="index">
                    <dt>{{item}}</dt>
                </dl>
                <div class="home-stylist-content">
                    <div class="home-stylist-content-src">
                        <figure
                            v-for="(item, index) of whole_stylist_content.slice(0,4)"
                            :key="index"
                        >
                            <img :src="item.src" />
                            <figcaption>{{item.txt}}</figcaption>
                            <p>{{item.position}}</p>
                        </figure>
                    </div>
                </div>
                <div class="home-rendering-conten">
                    <div class="home-rendering-conten-btn">
                        <button>
                            换一换
                            <span class="iconfont icon-change"></span>
                        </button>
                        <button @click="stylist">
                            更多设计师
                            <span class="iconfont icon-more"></span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- 效果图 -->
            <div class="home-rendering">
                <dl class="home-whole-title" v-for="(item, index) of whole_rendering" :key="index">
                    <dt>{{item}}</dt>
                </dl>
                <div class="home-rendering-conten">
                    <div>
                        <dl
                            class="home-rendering-content-src"
                            v-for="(item, index) of whole_stylist_content_src.slice(0,5)"
                            v-show="flag==1"
                            :key="index"
                        >
                            <dt>
                                <img :src="item.src" />
                            </dt>
                            <dd>{{item.txt}}</dd>
                        </dl>
                    </div>
                    <div>
                        <dl
                            class="home-rendering-content-src"
                            v-for="(item, index) of whole_stylist_content_src.slice(5,8)"
                            v-show="flag==2"
                            :key="index"
                        >
                            <dt>
                                <img :src="item.src" />
                            </dt>
                            <dd>{{item.txt}}</dd>
                        </dl>
                    </div>
                    <div class="home-rendering-conten-btn">
                        <button @click="changeflag">
                            换一换
                            <span class="iconfont icon-change"></span>
                        </button>
                        <button @click="more">
                            更多效果图
                            <span class="iconfont icon-more"></span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- 工地直播 -->
            <div class="home-live">
                <dl class="home-whole-title" v-for="(item, index) of whole_live" :key="index">
                    <dt>{{item}}</dt>
                </dl>
                <div class="home-rendering-conten">
                    <div class="home-rendering-conten-src">
                        <dl
                            v-for="(item, index) of whole_rendering_conten_src.slice(0,1)"
                            :key="index"
                            v-show="flag==1"
                        >
                            <dt>
                                <img :src="item.src" />
                            </dt>
                            <dd>{{item.txt}}</dd>
                            <p>{{item.tit}}</p>
                        </dl>
                    </div>
                    <div class="home-rendering-conten-src">
                        <dl
                            v-for="(item, index) of whole_rendering_conten_src.slice(1,2)"
                            :key="index"
                            v-show="flag==2"
                        >
                            <dt>
                                <img :src="item.src" />
                            </dt>
                            <dd>{{item.txt}}</dd>
                            <p>{{item.tit}}</p>
                        </dl>
                    </div>
                    <div class="home-rendering-conten-btn">
                        <button @click="changeflag">
                            换一换
                            <span class="iconfont icon-change"></span>
                        </button>
                        <button @click="rendering">
                            更多工地直播
                            <span class="iconfont icon-more"></span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- 装修攻略 -->
            <div class="home-decorationraiders">
                <dl
                    class="home-whole-title"
                    v-for="(item, index) of whole_decorationraiders"
                    :key="index"
                >
                    <dt>{{item}}</dt>
                </dl>
                <div class="home-rendering-conten">
                    <div class="home-decorationraiders-content">
                        <div
                            v-for="(item, index) of whole_decorationraiders_src"
                            :key="index"
                            class="home-decorationraiders-content-src"
                        >
                            <img :src="item.src" />
                            <div>
                                <p>{{item.txt}}</p>
                                <p>
                                    <span :class="['iconfont',item.icon]">{{item.times}}</span>
                                    <span :class="['iconfont',item.icons]">{{item.num}}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="home-rendering-conten-btn">
                        <button @click="changeflag">
                            换一换
                            <span class="iconfont icon-change"></span>
                        </button>
                        <button @click="decorationraiders">
                            更多装修攻略
                            <span class="iconfont icon-more"></span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- 简介 -->
            <!-- 底部 -->
        </div>
    </div>
</template>

<script>
import list from "./list.vue";
export default {
    inject: ["list"],
    data() {
        return {
            flag: 1,
            count: 1,
            txt: "",
            phon: "",
            num: "",
            img: "/img/lunbo/beijing.jpg",
            images: [
                "/img/lunbo/lunbo1.jpg",
                "/img/lunbo/lunbo2.jpg",
                "/img/lunbo/lunbo3.jpg",
                "/img/lunbo/lunbo4.jpg"
            ],
            whole_WholeHouse: {
                h3: "全屋装修",
                txt: "全屋装修提供不同档次全包/半包套餐"
            },
            whole_WholeHouse_banner: [
                "/img/lunbo/img1.jpg",
                "/img/lunbo/img1.jpg"
            ],
            font: [
                {
                    icon: "icon-zero",
                    txt: "0增项，标准施工"
                },
                {
                    icon: "icon-protection-fill",
                    txt: "杜绝项目外包"
                },
                {
                    icon: "icon-price",
                    txt: "装修贷款"
                }
            ],
            whole_Appointment: {
                h3: "装修预约",
                txt: "免费上门量房，设计方案满意为止"
            },
            whole_stylist: ["设计师"],
            whole_stylist_content: [
                {
                    src: "/img/lunbo/shejishi1.jpg",
                    txt: "杨成波",
                    position: "优秀"
                },
                {
                    src: "/img/lunbo/shejishi2.jpg",
                    txt: "宋波",
                    position: "优秀"
                },
                {
                    src: "/img/lunbo/shejishi3.jpg",
                    txt: "李悦",
                    position: "优秀"
                },
                {
                    src: "/img/lunbo/shejishi4.jpg",
                    txt: "郑萱萱",
                    position: "优秀"
                },
                {
                    src: "/img/lunbo/shejishi5.jpg",
                    txt: "沈伟利",
                    position: "主任"
                },
                {
                    src: "/img/lunbo/shejishi6.jpg",
                    txt: "蒋浩",
                    position: "优秀"
                },
                {
                    src: "/img/lunbo/shejishi7.jpg",
                    txt: "袁强",
                    position: "总监"
                },
                {
                    src: "/img/lunbo/shejishi8.jpg",
                    txt: "任梦娇",
                    position: "总监"
                }
            ],
            whole_stylist_content_src: [
                {
                    src: "/img/lunbo/xiaoguotu1.jpg",
                    txt: "品质的家"
                },
                {
                    src: "/img/lunbo/xiaoguotu2.jpg",
                    txt: "净享淡雅阳光"
                },
                {
                    src: "/img/lunbo/xiaoguotu3.jpg",
                    txt: "纯净放松的家"
                },
                {
                    src: "/img/lunbo/xiaoguotu4.jpg",
                    txt: "静享慢时光"
                },
                {
                    src: "/img/lunbo/xiaoguotu5.jpg",
                    txt: "品味享受生活极致追求"
                },
                {
                    src: "/img/lunbo/xiaoguotu1.jpg",
                    txt: "品质的家"
                },
                {
                    src: "/img/lunbo/xiaoguotu2.jpg",
                    txt: "净享淡雅阳光"
                },
                {
                    src: "/img/lunbo/xiaoguotu3.jpg",
                    txt: "纯净放松的家"
                }
            ],
            whole_rendering_conten_src: [
                {
                    src: "/img/lunbo/gongdizhibo.jpeg",
                    txt: "重汽嘉泽7幢",
                    tit: "泥木工程"
                },
                {
                    src: "/img/lunbo/gongdizhibo.jpeg",
                    txt: "重汽嘉泽8幢",
                    tit: "泥木工程"
                }
            ],
            whole_decorationraiders_src: [
                {
                    src: "/img/lunbo/zhuangxiugonglue1.png",
                    txt: "房子交付要验房，验房师是做什么的？",
                    times: "2016-07-07",
                    num: 115,
                    icon: "icon-time",
                    icons: "icon-view"
                },
                {
                    src: "/img/lunbo/zhuangxiugonglue2.jpg",
                    txt: "能让您涨工资的家居风水！",
                    times: "2016-07-07",
                    num: 115,
                    icon: "icon-time",
                    icons: "icon-view"
                },
                {
                    src: "/img/lunbo/zhuangxiugonglue3.jpg",
                    txt: "遇到有这样房子的男人就嫁了吧",
                    times: "2016-07-07",
                    num: 115,
                    icon: "icon-time",
                    icons: "icon-view"
                }
            ],
            whole_rendering: ["效果图"],
            whole_live: ["工地直播"],
            whole_decorationraiders: ["装修攻略"],
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination"
                },
                loop: true,
                autoplay: {
                    delay: 3000
                }
            }
        };
    },
    components: {
        list
    },
    methods: {
        // 全屋装修
        whole() {
            this.$router.push({ path: "/decoration" });
        },
        // 装修预约
        apply() {
            if (this.txt == "" && this.phon == "" && this.num == "") {
                alert("请输入预约信息");
            } else if (this.phon.length != 11) {
                alert("请输入正确的手机号");
            } else {
                this.$router.push("/orderNow");
            }
        },
        // 设计师
        stylist() {
            this.$router.push({ path: "/stylist" });
        },
        // 工地直播
        rendering() {
            this.$router.push({ path: "/site" });
        },
        // 效果图
        more() {
            this.$router.push({ path: "/designSketch" });
        },
        // 装修攻略
        decorationraiders() {
            this.$router.push({ path: "/strategy" });
        },
        // 换一换
        changeflag() {
            this.count++;
            if (this.count > 2) {
                this.count = 1;
            }
            this.flag = this.count;
        }
    }
};
</script>

<style lang="stylus" scoped>
.home {
    width: 100%;
    overflow-y: auto;
    background: #f4f4f4;

    .content {
        overflow-y: auto;

        .home-lunbo {
            width: 100%;
            overflow: hidden;
            height: rem(180);
            border: rem(1px) solid #eaeaea;

            img {
                width: 100%;
                height: 100%;
                display: inline-block;
                object-fit: cover;
                vertical-align: middle;
            }
        }

        .home-whole, .home-Appointment, .home-stylist, .home-rendering, .home-live, .home-decorationraiders {
            width: 100%;
            background: #fff;
            border: solid rem(1px) #fff;
            margin: rem(10) 0;

            .home-whole-title {
                width: 100%;
                display: flex;
                align-items: center;
                margin-left: rem(10);

                dt {
                    padding-left: rem(5);
                    margin: rem(10) 0;
                    border-left: 3px solid #2bb281;
                    font-size: 18px;
                }

                dd {
                    margin-left: 0.4rem;
                    font-weight: normal;
                    font-size: 12px;
                    color: #999;
                }
            }

            .home-whole-banner {
                width: 95%;
                margin: 0 auto;
                margin-bottom: rem(10);

                img {
                    width: 100%;
                }
            }

            .home-whole-bottom {
                margin: rem(10) auto;
                display: flex;
                align-items: center;
                width: 95%;
                line-height: rem(25);
                text-align: center;

                figure {
                    flex: 1;
                    display: flex;
                    align-items: center;

                    figcaption {
                        font-size: rem(12);
                        margin-left: rem(5);
                    }

                    p.iconfont {
                        color: #39c894;
                    }
                }
            }
        }

        .home-Appointment {
            width: 100%;

            ul {
                width: 80%;
                margin: 0 auto;

                li {
                    width: 100%;
                    line-height: rem(40);
                    margin: rem(10) 0;
                    font-size: rem(20);

                    input {
                        width: 100%;
                        border: solid rem(1) #eaeaea;
                        padding: 0 0 0 rem(10);
                        font-size: rem(17);
                        border-radius: rem(5);
                    }

                    button {
                        width: 100%;
                        background: #feb505;
                        border: none;
                        border-radius: rem(10);
                        color: #fff;
                        margin: 0 0 rem(5) 0;
                    }
                }
            }
        }

        .home-stylist-content {
            width: 95%;
            margin: 0 auto;

            .home-stylist-content-src {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;

                figure {
                    flex: 30%;
                    margin: 0 rem(10) 0 0;
                    text-align: center;
                    letter-spacing: rem(2);

                    img {
                        width: 100%;
                        height: rem(80);
                        border-radius: 50%;
                        margin-bottom: rem(10);
                    }

                    p {
                        width: 80%;
                        margin: 0 auto;
                        margin-top: rem(10);
                        background: #39c894;
                        color: #fff;
                        font-size: rem(15);
                        border-radius: rem(10);
                    }
                }
            }
        }

        .home-rendering, .home-live, .home-decorationraiders, .home-stylist {
            width: 100%;

            .home-rendering-conten {
                width: 100%;

                .home-rendering-content-src {
                    position: relative;
                    margin: 0 0 rem(8) 0;

                    img {
                        width: 100%;
                    }

                    dd {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        z-index: 1;
                        background: rgba(0, 0, 0, 0.8);
                        width: rem(130);
                        line-height: rem(30);
                        color: #fff;
                        text-align: center;
                        font-size: rem(12);
                        border-radius: rem(10) 0 0 0;
                    }
                }

                dl:nth-child(1) {
                    width: 95.8%;
                    margin: 0 auto;
                }

                dl:nth-child(2), dl:nth-child(3), dl:nth-child(4), dl:nth-child(5) {
                    width: 46.7%;
                    height: rem(150);
                    float: left;
                    margin: rem(8) 0 0 0;

                    img {
                        height: rem(150);
                    }
                }

                dl:nth-child(2), dl:nth-child(4) {
                    margin-right: rem(4);
                    margin-left: rem(8);
                }

                dl:nth-child(3), dl:nth-child(5) {
                    margin-right: rem(8);
                    margin-left: rem(4);
                }

                .home-rendering-conten-btn {
                    width: 95.8%;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    button {
                        flex: 1;
                        line-height: rem(40);
                        border-radius: rem(5) 0 0 rem(5);
                        border: rem(1) solid #eaeaea;
                        background: #fff;
                        color: #39c894;
                        margin: rem(20) 0;
                    }

                    button:nth-child(2) {
                        border-radius: 0 rem(5) rem(5) 0;
                    }

                    .iconfont {
                        font-size: rem(18);
                    }
                }
            }
        }

        .home-rendering-conten {
            width: 100%;

            .home-rendering-conten-src {
                dl {
                    position: relative;
                    width: 100%;

                    dt {
                        img {
                            width: 100%;
                        }
                    }

                    dd {
                        margin: rem(10) 0;
                    }

                    p {
                        position: absolute;
                        bottom: 0;
                        left: rem(100);
                        font-size: rem(13);
                        color: #fff;
                        background: #39c894;
                        padding: rem(1) rem(8);
                        border-radius: rem(10);
                    }
                }
            }
        }

        .home-decorationraiders-content {
            width: 95%;
            margin: 0 auto;

            .home-decorationraiders-content-src {
                width: 100%;
                display: flex;
                align-items: flex-start;
                margin: 0 0 rem(10) 0;
                border-bottom: solid rem(1) #eaeaea;

                img {
                    width: rem(150);
                    height: rem(100);
                    padding-bottom: rem(10);
                }

                div {
                    flex: 1;
                    margin-left: rem(10);
                    line-height: rem(30);

                    p:nth-child(2) {
                        width: 100%;
                        display: flex;
                        color: #999;
                        margin-top: rem(10);

                        span {
                            display: inline-block;
                            flex: 1;
                            font-size: rem(14);
                            font-weight: rem(200);
                        }

                        span:nth-child(2) {
                            text-align: center;
                        }

                        .icon-view {
                            font-size: rem(16);
                        }
                    }
                }
            }
        }
    }
}
</style>