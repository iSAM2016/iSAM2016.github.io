<style  lang = "sass" >

</style>
<template>
       <router-view></router-view>
</template>
<script>

import store from '../vuex/store.js' // import 我们刚刚创建的 store
import  auth from '../utils/auth.js'

  export default {
    beforeUpdate() {
      if( !auth.loggedIn()){
           this.$router.push({ path: '/login'});
      } 
    },
    store,
  }


</script>