<style lang= 'sass'></style>
<template>
<div>
    <section  class="main-contant">
      <personal-infor/>
   
      <my-data />
    </section>
  </div>
</template>
<script>

import personalInfor from '../personalInforTitle.vue'
import myData from './data.vue'
  export default {
    components: { 
        personalInfor,
        myData
          },

    ready() {
        console.log(this.$route.auth + "user")
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
  