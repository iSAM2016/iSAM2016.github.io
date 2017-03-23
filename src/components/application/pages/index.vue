<style lang = "sass">
.tools-title{
   padding-left:1rem;
  }  

</style>
<template>
    <section  class="main-contant">
      <personal-infor />
      <p class="tools-title">Tools</p>
      <search-Title />
      <tools-List />
      <pagination />
    </section>
</template>
<script>
import personalInfor from '../../common/personalInforTitle.vue'
import pagination from './pagination.vue'
import searchTitle from './search.vue'
import toolsList from './tools.vue'

  export default {
    components: { 
        searchTitle,
        toolsList ,
        pagination,
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
