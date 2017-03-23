<style lang = "sass"></style>
<template>
<div>
  <section  class="main-contant">
    <personal-infor></personal-infor>
    <chosecrumbs></chosecrumbs>
    <chosetitle></chosetitle>
    <shopping></shopping>
  </section>
</div>  
</template>
<script>
import FersonalInfor from '../../common/personalInforTitle.vue'
import shopping from './shoppingList.vue'
import chosecrumbs from '../../cloudDisk/choseCrumbs.vue'
import chosetitle from './shoppingtitle.vue'

  export default {
    components: { 
        shopping,
        chosecrumbs: chosecrumbs,
        personalInfor: FersonalInfor,
        chosetitle:chosetitle
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