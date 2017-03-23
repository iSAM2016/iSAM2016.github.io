<style lang = "sass">
   
</style>
<template>
    <section  class="main-contant">
    <personalInfor />
    <tools-List />
    </section>
</template>
<script>
import personalInfor from '../../common/personalInforTitle.vue'
import toolsList from './alltools.vue'

  export default {
    components: { 
        toolsList,
        personalInfor,
    },
   
    data () {
      return {
        
      }
    },
    
  }
</script>
