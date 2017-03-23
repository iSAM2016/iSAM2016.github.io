<style lang = "sass">
  
</style>
<template>
<div>
  <section  class="main-contant">

    <personal-infor></personal-infor>
  </section>
  <section class="main-resource">

    <chosecrumbs></chosecrumbs>
    <search-Title></search-Title>
    <progect-List></progect-List>
  </section>
</div>
</template>
<script>

import search from './search.vue'
import FersonalInfor from './personalInforTitle.vue'
import progectList from './progectList.vue'
import chosecrumbs from './choseCrumbs.vue'
import chosetitle from './projectchosetitle.vue'

  export default {
    components: { 
        progectList: progectList,
        chosecrumbs: chosecrumbs,
        personalInfor: FersonalInfor,
        searchTitle: search,
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