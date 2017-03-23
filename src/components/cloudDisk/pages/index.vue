<style lang= 'sass'></style>
<template>
    <section  class="main-contant">
      <personal-infor/>
      <my-data />
    </section>
</template>
<script>

import personalInfor from '../../common/personalInforTitle.vue'
import myData from './data.vue'
  export default {
    components: { 
        personalInfor,
        myData
    },

    data () {
      return {
      }
    },
    
    events: {
      
    }
  }
</script>
  