<template>
    <div class="home">
        <navs></navs>
        <van-swipe :autoplay="3000" class="home-lunbo">
            <van-swipe-item v-for="(item, index) in images" :key="index">
                <img :src="item" />
            </van-swipe-item>
        </van-swipe>
        <list :list="list"></list>
        <router-view></router-view>
    </div>
</template>

<script>
import navs from "./nav.vue";
import list from "./list.vue"
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
            ],
            images: [
                "/img/lunbo/lunbo1.jpg",
                "/img/lunbo/lunbo2.jpg",
                "/img/lunbo/lunbo3.jpg",
                "/img/lunbo/lunbo4.jpg"
            ]
        };
    },
    components: {
        navs,
        list
    },
    methods: {
    }
};
</script>

<style lang="stylus" scoped>
.home {
    width: 100%;

    header {
    }

    .home-lunbo {
        width: 100%;
        overflow: hidden;
        height rem(180)
        border: 1px solid #eaeaea;

        img {
            width: 100%;
            height 100%
            display: inline-block;
            object-fit: cover;
            vertical-align: middle;
        }
    }

    
}
</style>