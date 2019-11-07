<template>
    <div class="home">
        <header></header>
        <div class="home-lunbo">
          
        </div>
        <nav>
            <figure v-for="(item, index) of list" :key="index" @click="tab(item.url)">
                <p class="iconfont" :class="item.icon"></p>
                <figcaption>{{item.title}}</figcaption>
            </figure>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    title: "装修方案",
                    icon: "icon-case",
                    url: "/decoration"
                },
                {
                    title: "效果图",
                    icon: "icon-pics",
                    url: "/designSketch"
                },
                {
                    title: "设计师",
                    icon: "icon-designer",
                    url: "/stylist"
                },
                {
                    title: "装修工地",
                    icon: "icon-construction-site",
                    url: "/site"
                },
                {
                    title: "装修攻略",
                    icon: "icon-decorate",
                    url: "/strategy"
                },
                {
                    title: "装修贷款",
                    icon: "icon-loans",
                    url: "/loan"
                },
                {
                    title: "免费预约",
                    icon: "icon-pencle",
                    url: "/orderNow"
                },
                {
                    title: "十秒报价",
                    icon: "icon-ten",
                    url: "/tenSecondsBid"
                }
            ]
        };
    },
    methods: {
        tab(url) {
            this.$router.push({ path: url });
        }
    }
};
</script>

<style lang="stylus" scoped>
.home {
    width: 100%;

    header {
    }

    .home-lunbo {
    }

    nav {
        width: 100%;
        display: flex;
        align-items: center;
        text-align: center;
        flex-flow: wrap;
        font-size: rem(14);

        figure {
            flex: 25%;
            margin: rem(10px) 0;

            p.iconfont {
                width: 70%;
                height: 4.125rem;
                margin: rem(5px) auto;
                border-radius: 50%;
                background: red;
                line-height: 4.125rem;
                color: #fff;
                font-size: rem(32px);

                &.icon-case {
                    background: #39c894;
                }

                &.icon-pics {
                    background: #feb505;
                }

                &.icon-designer {
                    background: #eed215;
                }

                &.icon-construction-site {
                    background: #00b2b2;
                }

                &.icon-loans {
                    background: #1b9af7;
                }

                &.icon-loans {
                    background: #7b72e9;
                }

                &.icon-pencle {
                    background: #ff4351;
                }

                &.icon-ten {
                    background: #fe8864;
                }
            }
        }
    }
}
</style>