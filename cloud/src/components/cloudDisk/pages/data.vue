<style lang = "sass">

</style>
<template>
  <div>
    <chose-date />
    <chose-crumbs/>
    <chose-title/> 
    <data-lists/> 
 </div> 
</template>
<script>

import choseDate from './choseDate.vue'
import choseCrumbs from './choseCrumbs.vue'
import choseTitle from './choseTitle.vue'
import dataLists from './dataList.vue'

 
  export default {
    components: { 
        choseDate,
        choseCrumbs,
        choseTitle,
        dataLists
    },
    data () {
      return {
       
        isoperation: false,
        mydatecreatnewfolder: false,
      }
    },
    events: {
      
      choseButtonClik(value){
      this.$broadcast("choseButtonClik",value)
      },
      titleRename(){

       this.$broadcast("titleRename")
      },

      creatOneFolder(){

        this.$broadcast("creatOneFolder")
      },
      exchangeforderfn(){
        this.$broadcast("exchangeforderfn")
      }
      
    },
  methods: {
      add: function() {
        this.incrementCounter(1)
      }
  },  
 
  }
</script>
