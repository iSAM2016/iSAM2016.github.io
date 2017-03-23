<style lang = "sass"></style>
<template>
  <section  class="main-contant">
    <personal-infor />
    <chosecrumbs />
    <div id="titlebox"></div>
    <chosetitle />
    <task-List />
  </section>
</template>
<script>
import personalInfor from '../../common/personalInforTitle.vue'
import taskList from './taskList.vue'
import chosecrumbs from '../../cloudDisk/choseCrumbs.vue'
import chosetitle from './taskchosetitle.vue'

  export default {
    components: { 
        taskList,
        chosecrumbs,
        personalInfor,
        chosetitle
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