<style lang = "sass">
  

</style>
<template>
  <div class="main-resource-data clearfix">
    <!-- 文件 -->
    <item v-for="(data,index)  in datas"    
         transition="item" 
         stagger="100"
         :mydata = "data"
         :index = "index"
   />
  </div>
</template>
<script>
  import item from './itemList.vue';
  import  { getRubbishResource } from  '../actions.js'

  export default {
  vuex: {
      getters: {
        datas: ({ mRubbishResorce })=> mRubbishResorce.ruDatas,
        //userid 是查询文件的源头
      },

      actions: {
            getRubbishResource, //获取元数据
      }
    },

    components: { 
      item
    },

    data () {
      return {
     }
    },

     props:[
          
    ],

    mounted() {
     
    },

    created() {
        //主动触发需要提供vm，这是第一次触发
         this.getRubbishResource(this,localStorage.userId)
    },

    methods: {
      
       
    },

    }  
</script>