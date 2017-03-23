<style lang = "sass">


</style>
<template>
  <div class="main-resource-data clearfix">
    <!-- 文件 -->
    <item v-for="(datas,index)  in datas"    
          transition="item" 
          stagger="100"
          :mydata = "datas"
          :index = "index"
    />

  </div>
</template>
<script>
import tree from '../../common/tree.vue';
import item from './itemList.vue';
 
//vuex 取数据
import  { getResource } from  '../actions.js'

  
export default {
  vuex: {
      getters: {
        datas: ({ mShopping })=> mShopping.datas,
      },

      actions: {
            getResource, //获取元数据
      }
    },

    components: { 
       treeGrid:tree,
       item
    },

    data () {
      return {

      }
    },
   
    props:[
       
    ],

    created() {
        this.getResource(this,this.userId)//主动触发需要提供vm
    },
   
    methods: {
   
    },

}
  
</script>