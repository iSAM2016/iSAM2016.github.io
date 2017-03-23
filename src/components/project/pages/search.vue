<style lang = "sass">
 
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
  export default {
     vuex: {
      getters: {
        datas: ({ mTools })=> mTools.datas,
      
      },

      actions: {
            
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
            alert("请输入关键字")
          }
       }
      
     
      },
 


  


  
    

}
  
</script>