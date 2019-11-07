<template>
<<<<<<< HEAD
  <div>
      头部
  </div>
</template>
<script>

export default {
  
=======
<<<<<<< HEAD
    <div v-height="610">
        <router-view v-if="$route.path === '/'" />
        <div v-if="$route.path !== '/'">
            <div class="nav">
                <img :src="src" @click="user" />
                <div class="nav-icon">
                    <button @click="logout" class="iconfont icon-user"></button>
                    <figure v-for="(item, index) of nav" :key="index" @click="tab">
                        <p :class="['iconfont',item.icon]"></p>
                        <figcaption>{{item.title}}</figcaption>
                    </figure>
                </div>
            </div>
            <div class="navs" v-if="isShow">
                <span @click="tab" class="cuo">×</span>
                <nav>
                    <figure v-for="(item, index) of list" :key="index" @click="tabs(item.url)">
                        <p class="iconfont" :class="item.icon"></p>
                        <figcaption>{{item.title}}</figcaption>
                    </figure>
                </nav>
            </div>
        </div>
        <router-view v-if="$route.path !=='/' " />
    </div>
=======
  <div>
      头部
  </div>
>>>>>>> e0b0a6ea6b262e4679d8db7f48a4178a9ed4d31c
</template>

<script>
export default {
<<<<<<< HEAD
    inject: ["list"],
    data() {
        return {
            isShow: false,
            src: "/img/lunbo/logo.png",
            nav: [
                {
                    icon: "icon-nav",
                    title: "导航"
                }
            ]
        };
    },
    methods: {
        tab() {
            this.isShow = !this.isShow;
        },
        user() {
            this.$router.push({ path: "/home" });
        },
        logout() {
            // token 清空
            sessionStorage.token = "";
            setTimeout(() => {
                this.$router.push({ path: "/" });
                // 同时修改 authorize的值为默认的 null
                this.$store.commit("LOGIN", {
                    authorize: null
                });
            }, 1000);
        },
        tabs(url) {
            this.$router.push({ path: url });
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
    overflow: auto;

    img {
        float: left;
        width: 30%;
        margin: rem(10);
    }

    .nav-icon {
        float: right;
        width: 26%;
        display: flex;
        text-align: center;
        justify-content: space-around;

        .icon-user {
            border: none;
            font-size: rem(24);
            background: none;
        }

        figure {
            margin: rem(10) 0;
        }
    }
}

.navs {
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    height: rem(250);
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 1;
    color: #fff;

    .cuo {
        display: inline-block;
        font-size: rem(40);
        font-weight: bold;
        width: rem(50);
        line-height: rem(30);
        text-align: right;
        position: absolute;
        right: 0;
        top: 0;
    }

    nav {
        width: 100%;
        display: flex;
        align-items: center;
        text-align: center;
        flex-flow: wrap;
        font-size: rem(14);
        margin: rem(20) 0;

        figure {
            flex: 20%;
            margin: rem(5px) rem(5);

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
}

.list {
    width: 100%;
    background: red;
    position: relative;
    top: -60px;
    left: 0;
    z-index: 1;
    height: 90px;
}
=======

>>>>>>> bd3a62fb6612767420e94226a5208826c864f84f
}
</script>

<style>

<<<<<<< HEAD
=======
>>>>>>> e0b0a6ea6b262e4679d8db7f48a4178a9ed4d31c
>>>>>>> bd3a62fb6612767420e94226a5208826c864f84f
</style>