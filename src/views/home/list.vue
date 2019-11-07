<template>
    <nav>
        <figure v-for="(item, index) of list" :key="index" @click="tab(item.url)">
            <p class="iconfont" :class="item.icon"></p>
            <figcaption>{{item.title}}</figcaption>
        </figure>
    </nav>
</template>

<script>
export default {
    props: ["list"],
    methods: {
        tab(url) {
            this.$router.push({ path: url });
        }
    }
};
</script>

<style lang="stylus" scoped>
nav {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    flex-flow: wrap;
    font-size: rem(14);
    background: #fff;

    figure {
        flex: 20%;
        margin: rem(10px) rem(5);

        p.iconfont {
            width: 75%;
            height: rem(60);
            margin: rem(5px) auto;
            border-radius: 50%;
            background: red;
            line-height: rem(60);
            color: #fff;
            font-size: rem(30px);

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
</style>