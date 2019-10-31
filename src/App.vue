<template>
  <div id="app">
    <!-- <login></login> -->
    <router-view></router-view>
  </div>
</template>

<script>
import login from './views/login/index.vue'
export default {
  data(){
    return{

    }
  },
  components:{
    login
  }
}
</script>
