<style lang = "sass">
   
</style>
<template>
<div>
    <section  class="main-contant">
        <personal-infor></personal-infor>
      <chosecrumbs></chosecrumbs>
      <tools-List></tools-List>
    </section>
 </div>   
</template>
<script>
import personalInfor from '../../common/personalInforTitle.vue'
import chosecrumbs from '../../cloudDisk/choseCrumbs.vue'
import toolsList from './toolsdata.vue'

  export default {
    components: { 
        toolsList,
        chosecrumbs,
        personalInfor
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
