<style lang = "sass">

</style>
<template>
  <div class="row  main-resource-title" id="changeRow" >
    <search></search>
    <div class=" col-md-2 col-sm-2 col-xs-2">

      <div class="btn-group">
        <button type="button" class="btn btn-default btn-sm">全部</button>
        <button type="button" class="btn btn-default  btn-sm dropdown-toggle" 
        data-toggle="dropdown">
          <span class="caret"></span>
          <span class="sr-only">全部</span>
        </button>
        <ul class="dropdown-menu" role="menu">
          <li>
            <a href="#">完成</a>
          </li>
          <li>
            <a href="#">运行中</a>
          </li>
          <li>
            <a href="#">终止</a>
          </li>
         
          <li>
            <a href="#">报错</a>
          </li>
          <li>
            <a href="#">资源准备中</a>
          </li>
          <li>
            <a href="#">暂停</a>
          </li>
        </ul>
      </div>

    </div>
    <div class=" col-md-3 col-sm-3 col-xs-3">

      <p>项目信息</p>
    </div>
    

    <div class=" col-md-4 col-sm-4 col-xs-4">

      <p>进度</p>
    </div>


    <div class=" col-md-2 col-sm-2 col-xs-2">
       
    </div>

    
    <div class=" col-md-1 col-sm-1 col-xs-1">

      <p>操作</p>
    </div>
  </div>

</template>
<script>

import search from './search.vue'

  export default {
     vuex: {
      getters: {
      },
      actions: {
            
      }
    },
    components: { 
       search
          },
    props:[
      
      
    ],
    ready() {
       /* this.$http.get('http://localhost:8888/time')
          .then(function(ret) {
            this.totalTime = ret.data.time;
          })
          .then(function(err) {
            console.log(err);
          })*/
    },
    data () {
      return {
       isChoseAllkey: false
      }
    },
    events: {
      timeUpdate (timeEntry) {
        console.log(timeEntry);
        this.totalTime += parseFloat(timeEntry.totalTime)
      },
      deleteTime (timeEntry) {
        this.totalTime -= parseFloat(timeEntry.totalTime)
      }
    },
    methods: {
      mychosefn(){
       /* console.log(this.isChoseAll)*/
        this.choseAllfile( this.isChoseAll )
          /* if(this.isChoseAll){

           }else {// 全选
             this.choseAllfile()
           }*/
        //this.$dispatch("choseButtonClik",this.isChoseAll)
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