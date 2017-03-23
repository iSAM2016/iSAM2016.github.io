<style lang = "sass">
  
</style>
<template>
    <section  class="main-contant">
        <personal-infor/>
        <tools-List/>
    </section>
</template>
<script>

import toolsList from './toolsdetails.vue'
import personalInfor from '../../common/personalInforTitle.vue'

export default {
    components: { 
        personalInfor,
        toolsList
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