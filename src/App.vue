<template>
    <div id="app">
        <!-- 导航 -->
        <navs></navs>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import logins from "./views/logins/index.vue";
import navs from "./views/home/nav.vue";
export default {
    provide(){
        return{
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
        }
    },
    data() {
        return {};
    },
    components: {
        logins,
        navs
    }
};
</script>
