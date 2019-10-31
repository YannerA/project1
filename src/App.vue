<template>
  <div id="app">
    <home></home>
    <router-view/>
  </div>
</template>

<script>
// 引入首页组件
import home from './views/home/index.vue'
export default {
  data(){
    return{

    }
  },
  components:{
    home
  }
}
</script>
