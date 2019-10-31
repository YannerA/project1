<template>
    <div>
        <div class="nav">
            <img :src="src" />
            <div class="nav-icon">
                <figure
                    v-for="(item, index) of nav"
                    :key="index"
                    :class="{cur : !isShow}"
                    @click="tab"
                >
                    <p :class="['iconfont',item.icon]"></p>
                    <figcaption>{{item.title}}</figcaption>
                </figure>
            </div>
        </div>
        <list :class="{cur : isShow}"></list>
    </div>
</template>

<script>
import list from "./list.vue";

export default {
    data() {
        return {
            isShow: true,
            src: "/img/logo.png",
            nav: [
                {
                    icon: "icon-user",
                    title: "我的"
                },
                {
                    icon: "icon-nav",
                    title: "导航"
                }
            ]
        };
    },
    components: {
        list
    },
    methods: {
        tab() {
            console.log(12);
            this.isShow = !this.isShow;
        }
    }
};
</script>

<style lang="stylus" scoped>
.nav {
    width: 100%;
    height: rem(60);
    background: #fff;
    position: relative;

    img {
        float: left;
        width: 30%;
        margin: rem(10);
    }

    .nav-icon {
        float: right;
        width: 30%;
        display: flex;
        text-align: center;
        justify-content: space-around;

        figure {
            margin: rem(10) 0;
        }
    }

    nav {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
    }

    &.cur {
        display: block;
    }
}
</style>