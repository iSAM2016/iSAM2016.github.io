<style lang = "sass">
#changeBred {
  padding: 0px 15px;
  margin-bottom: 0px;
}
  
</style>
<template>
<ol class="breadcrumb" id="changeBred">
  <li 
    v-for="(data,index)  in userId"
    :class="{'active': index+1 == userId.length }"
  >
    <a 
      href="javescript:void(0)" 
      v-if ="index+1 !== userId.length"
      @click='openNewfolder(data.userId,data.name )'
      >
        {{data.name}}
    </a>
    <span v-if ="index+1 == userId.length">{{data.name}}</span>
  </li>
 
  
</ol>

</template>
<script>
import  { getResource } from  '../actions.js'

//进入新的窗口
    
  export default {
     vuex: {
        getters: {
          userId:({ mResorce })=>  mResorce.userId,
          
        },
        actions: {
         getResource
        }
    },
    components: { 
       
    },
  
    data () {
      return {
      }
    },

    methods:{
        openNewfolder(folderId,name ){
          this.getResource( this,folderId,name )
      },
    }
  }
</script>
