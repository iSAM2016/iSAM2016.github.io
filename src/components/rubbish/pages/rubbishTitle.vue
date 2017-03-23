<style lang = "sass">
  
</style>
<template>
    <div class="row  main-resource-title" id="changeRow">
      <div class=" col-md-1 col-sm-1 col-xs-1">
       <input type="checkbox" v-model="isChoseAllkey" @click="mychosefn">
        <span>全选</span>
      </div>
      <div class=" col-md-4 col-sm-4 col-xs-4">

        <p>文件名</p>
      </div>
      <div class=" col-md-2 col-sm-2 col-xs-2"></div>

      <div class=" col-md-3 col-sm-3 col-xs-3">

        <p>删除时间</p>
      </div>

      <div class=" col-md-2 col-sm-2 col-xs-2">

        <p>时效</p>
      </div>

    </div>

</template>
<script>

import  {  choseAllfile } from  '../actions.js'

  export default {
     vuex: {
     getters: {
        isChoseAll: ({ mRubbishResorce })=>{
            return  mRubbishResorce.addDatas.length === mRubbishResorce.ruDatas.length }
      },
      actions: {
          choseAllfile
            
      }
    },
    components: { 
       
          },
    props:[
      
    ],
   
    data () {
      return {
       isChoseAllkey: false
      }
    },
   
    methods: {
      mychosefn(){
      
        this.choseAllfile( this.isChoseAllkey)
         
      },
      changkey(value){
          this.isChoseAllkey = value
      }
    },

    watch:{
      isChoseAll:function(value){
          this.changkey(value)
      }
        
      
    }
}


  
</script>
