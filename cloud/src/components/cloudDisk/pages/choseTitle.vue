<style lang = "sass">

</style>
<template>
    <div class="row  main-resource-title" id="changeRow">
      <div class=" col-md-1 col-sm-1 col-xs-1">
        <input type="checkbox"  
          :disabled='isnewFolder' 
          v-model="isChoseAllkey" 
          @click="mychosefn"
        />
        <span>全选</span>
      </div>
      <div class=" col-md-4 col-sm-4 col-xs-4">
        <span>文件名</span>
      </div>
      <div class=" col-md-2 col-sm-2 col-xs-2"></div>

      <div class=" col-md-3 col-sm-3 col-xs-3">

        <span>上传时间</span>
      </div>

      <div class=" col-md-2 col-sm-2 col-xs-2">

        <span>大小</span>
      </div>

    </div>

</template>
<script>

import  {  choseAllfile } from  '../actions.js'

  export default {
     vuex: {
     getters: {
        isChoseAll: ({ mResorce })=>{return( mResorce.addDatas.length === mResorce.datas.length )},
        //在新建文件夹的时候不允许在选择
        isnewFolder:({ mResorce })=> mResorce.isnewFolder
      },
      actions: {
          choseAllfile
      }
    },

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
