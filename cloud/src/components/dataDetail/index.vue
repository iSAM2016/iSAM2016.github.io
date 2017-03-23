<style lang = "sass"></style>
<template>
<div>
   <section  class="main-contant">
      <personal-infor></personal-infor>
     <datastatistics></datastatistics>
  </section>
</div>
 
</template>
<script>

import personalInfor from '../common/personalInforTitle.vue'
import datastatistics from './datastatisticsDe.vue'

  export default {
    components: { 
        personalInfor,
        datastatistics
          },
    ready() {
    
    },
    data () {
      return {
        totalTime: 0,
        
      }
    },
    events: {
      
    }
  }
</script>