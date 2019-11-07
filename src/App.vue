<template>
<<<<<<< HEAD
  <div id="app">
    <!-- <login></login> -->
    <router-view/>
=======
<<<<<<< HEAD
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
=======
  <div id="app">
<<<<<<< Updated upstream
<<<<<<< HEAD
    <!-- <login></login> -->
=======
    <home></home>
>>>>>>> 9b1aa9da1bbb86aab4c3a57a23f2d36788e70672
    <router-view/>
=======
    <!-- <home></home> -->
     
      <router-view/> 
>>>>>>> Stashed changes
>>>>>>> bd3a62fb6612767420e94226a5208826c864f84f
  </div>
</template>

<script>
// 引入首页组件
<<<<<<< HEAD
import login from './views/login/index.vue'
=======
<<<<<<< Updated upstream
<<<<<<< HEAD
import login from './views/login/index.vue'
=======
import home from './views/home/index.vue'
>>>>>>> 9b1aa9da1bbb86aab4c3a57a23f2d36788e70672
=======
import login from './views/login/index.vue'
>>>>>>> Stashed changes
>>>>>>> bd3a62fb6612767420e94226a5208826c864f84f
export default {
  data(){
    return{

    }
  },
  components:{
<<<<<<< HEAD
    login
  }
}
=======
<<<<<<< Updated upstream
<<<<<<< HEAD
     login,
    
=======
    home
>>>>>>> 9b1aa9da1bbb86aab4c3a57a23f2d36788e70672
=======
    login
>>>>>>> Stashed changes
  }
}
>>>>>>> e0b0a6ea6b262e4679d8db7f48a4178a9ed4d31c
>>>>>>> bd3a62fb6612767420e94226a5208826c864f84f
</script>
