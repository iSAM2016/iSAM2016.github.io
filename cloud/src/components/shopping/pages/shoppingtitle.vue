<style lang = "sass"></style>
<template>
 <div>  
  <b class="divider">&nbsp;&nbsp;&nbsp;共计<span>{{ num }}</span>件</b>
  <div class="row  main-resource-title" id="changeRow">
    
    <div class=" col-md-1 col-sm-1 col-xs-1">

        <input type="checkbox"v-model="isChoseAllkey" @click="mychosefn">
    </div>

    <div class=" col-md-6 col-sm-6 col-xs-6">

      
        <b>商品信息</b>
    </div>

    <div class=" col-md-3 col-sm-3 col-xs-3">
      
        <b>金额（元）</b>

    </div>

    <div class=" col-md-2 col-sm-2 col-xs-2">

      
        <b>操作</b>
    </div>
  </div>
</div>  
</template>
<script>

import  {  choseAllfile } from  '../actions.js'

  export default {
     vuex: {
      getters: {
       isChoseAll: ({ mShopping })=>{return( mShopping.addDatas.length === mShopping.datas.length )},
       num: ({ mShopping })=>{return(  mShopping.datas.length )}
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
       isChoseAllkey: false,
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