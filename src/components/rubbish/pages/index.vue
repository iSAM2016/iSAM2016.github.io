<style lang = "sass">

</style>
<template>
<div>
    <section  class="main-contant">
        <personal-infor/>
        <div id="changeBred"></div>
    	<rubbish-chose />
    	<chose-title />
    	<rubbish-list/>
    </section>
</div>   
</template>
<script>

import personalInfor from '../../common/personalInforTitle.vue'
import rubbishChose from './rubbishChoseTitle.vue'
import choseTitle from './rubbishTitle.vue'
import rubbishList from './rubbishList.vue'

  export default {
    components: { 
        personalInfor,
        rubbishChose,
        choseTitle,
        rubbishList
    },

    ready() {
    
    },
    data () {
      return {
        
      }
    },
    events: {
      
    }
  }
</script>
