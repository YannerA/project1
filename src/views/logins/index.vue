<template>
    <div>
        <div class="logins" v-height v-if="showLogin">
            <header>登录</header>
            <dl class="logins-content">
                <dt>
                    <span class="iconfont icon-user"></span>
                    <input type="text" v-model="phone" placeholder="请输入用户名" />
                </dt>
                <dd>
                    <span class="iconfont icon-password"></span>
                    <input type="password" v-model="pwd" placeholder="请输入密码" />
                    <span class="iconfont icon-view"></span>
                </dd>
                <dd>
                    <span v-on:click="ToLogin">注册&gt;</span>
                    <span>忘记密码?</span>
                </dd>
            </dl>
            <div class="logins-login">
                <button @click="logins" class="logins-logins">登录</button>
                <div class="logins-login-content">
                    <figure v-for="(item, index) of login" :key="index">
                        <span :class="['iconfont',item.icon]"></span>
                        <figcaption>{{item.txt}}</figcaption>
                    </figure>
                </div>
            </div>
            <img class="logins-bg" src="/img/lunbo/bg.jpg" />
        </div>
        <div class="logins" v-if="!showLogin" v-height>
            <header>注册</header>
            <dl class="logins-content">
                <dt>
                    <span class="iconfont icon-user"></span>
                    <input type="text" placeholder="请输入用户名" v-model="newPhone" />
                </dt>
                <dd>
                    <span class="iconfont icon-password"></span>
                    <input type="password" placeholder="请输入密码" v-model="newPwd" />
                </dd>
            </dl>
            <div class="logins-login">
                <dl>
                    <dt>
                        <button v-on:click="register" class="logins-logins">注册</button>
                    </dt>
                    <dd>
                        <span v-on:click="ToLogin">已有账号？马上登录</span>
                    </dd>
                </dl>
            </div>
            <img class="logins-bg" src="/img/lunbo/bg.jpg" />
        </div>
    </div>
</template>

<script>
import { match } from "minimatch";
export default {
    data() {
        return {
            phone: "",
            pwd: "",
            newPhone: "",
            newPwd: "",
            showLogin: true,
            showTishi: false,
            login: [
                {
                    icon: "icon-wechat",
                    txt: "微信一键登录"
                },
                {
                    icon: "icon-qzone",
                    txt: "QQ空间一键登录"
                },
                {
                    icon: "icon-sina",
                    txt: "微博一键登录"
                }
            ]
        };
    },
    watch: {
        "$store.state.authorize"(newVal) {
            if (newVal) {
                this.$router.push({ path: "/home" });
            }
        }
    },
    methods: {
        logins() {
            if (this.phone === "" || this.pwd === "") {
                alert("请输入用户名或密码");
            }
            this.$store.dispatch("LOGIN", {
                phone: this.phone,
                pwd: this.pwd
            });
        },
        register() {
            let id = "";
            let str = "qwertyuiopasdfghjklzxcvbnm1234567890";
            for (var i = 0; i < 10; i++) {
                id += str[~~(Math.random() * str.length)];
            }
            if (this.newPhone === "" || this.newPwd === "") {
                alert("请输入用户名或密码");
            } else {
                this.$store.dispatch("ZHUCE", {
                    phone: this.newPhone,
                    pwd: this.newPwd,
                    id: id
                });
            }
        },
        ToLogin() {
            this.showLogin = !this.showLogin;
        }
    }
};
</script>

<style lang="stylus" scoped>
.logins {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
    background: #fff;
    overflow: hidden;

    header {
        width: 100%;
        text-align: center;
        font-size: rem(25);
        line-height: rem(80);
    }

    .logins-content {
        width: 100%;
        text-align: center;
        margin: rem(30) 0 rem(20) 0;

        dt, dd {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: rem(70);
            line-height: rem(50);
            color: #727171;

            span {
                width: 20%;
                display: inline-block;
                text-align: center;
            }

            .iconfont {
                font-size: rem(25);
            }

            .icon-view {
                position: absolute;
                top: 29%;
                right: 2%;
            }

            input {
                width: 70%;
                border: none;
                border-bottom: solid 1px #dcdcdc;
                font-size: rem(18);
            }
        }

        dd:nth-child(3) {
            span {
                flex: 1;
            }
        }
    }

    .logins-login {
        width: 100%;
        text-align: center;

        .logins-logins {
            width: 80%;
            line-height: rem(50);
            border-radius: rem(20);
            margin-bottom: rem(10);
            border: none;
            background: #39c894;
            color: #fff;
            font-size: rem(20);
        }

        .logins-login-content {
            width: 100%;
            display: flex;
            height: rem(150);
            align-items: center;

            figure {
                flex: 1;
                text-align: center;
                font-size: rem(12);

                .iconfont {
                    font-size: rem(35);
                }

                figcaption {
                    line-height: rem(30);
                }

                span.icon-wechat {
                }
            }
        }
    }

    .logins-bg {
        width: 100%;
        position: absolute;
        bottom: 0;
    }
}
</style>