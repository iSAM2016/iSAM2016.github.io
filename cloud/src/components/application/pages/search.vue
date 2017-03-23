<style lang = "sass">
 #appsearch{
    width: 95%;
    padding-right:15px;    

 }

</style>
<template>
 
    <form class="bs-example bs-example-form"  id="appsearch" role="form">
    <div class="input-group clearfix">
      <input type="text"  class="form-control " placeholder="输入关键字" v-model="wordkey">
      <span class="input-group-btn">
        <button class="btn btn-primary" type="button" @click="searchfile">搜索</button>
      </span>
    </div>
    <!-- /input-group -->
  </form>
</template>
<script>

import  { searchtools } from  '../actions.js'
  export default {
     vuex: {
        getters: {
          datas: ({ mTools })=> mTools.datas,
        },

        actions: {
              searchtools, //获取元数据
        }
    },
    components: { 
    },

    data () {
      return {
         datas: null,
         wordkey: "",//文件
      }
    },
    
    props:[
         
    ],

    methods: {
      searchfile(){
          if(this.wordkey !== ""){
            this.searchtools( this,this.wordkey )
          }else {
            this.open()
          }
      },

      open() {
        this.$alert('请输入关键字', '注意', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `请输入关键字`
            });
          }
        })
      }
    },
}
  
</script>