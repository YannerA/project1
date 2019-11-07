<template>
  <div id="app">
    <!-- <login></login> -->
    <router-view/>
  </div>
</template>

<script>
// 引入首页组件
import login from './views/login/index.vue'
export default {
  data(){
    return{

    }
  },
  components:{
     login,
    
  }
}
</script>
