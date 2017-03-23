<style lang = "sass"></style>
<template>
  <section  class="main-contant">
    <personal-infor></personal-infor>
    <chosecrumbs></chosecrumbs>
    <div id="titlebox"></div>
    <chosetitle></chosetitle>
    <progect-List></progect-List>
  </section>
</template>
<script>
import personalInfor from '../../common/personalInforTitle.vue'
import progectList from './progectList.vue'
import chosecrumbs from '../../cloudDisk/choseCrumbs.vue'
import chosetitle from './projectchosetitle.vue'

  export default {
    components: { 
        progectList,
        chosecrumbs,
        personalInfor,
        chosetitle
    },
  
    data () {
      return {
        totalTime: 0,
        
      }
    },
   
  }
</script>