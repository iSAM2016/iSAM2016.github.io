<style lang = "sass"></style>
<template>
<div>
  <section  class="main-contant">
     <personal-infor></personal-infor>
  </section>
  <section class="main-resource">
     <password></password>
  </section>
</div> 
</template>
<script>
import FersonalInfor from '../common/personalInforTitle.vue'
import password from './passwrod.vue'


  export default {
    components: { 
        password,
        personalInfor: FersonalInfor,
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