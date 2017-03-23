<style lang = "sass">
.myprogress{
  width: 30%;
}
</style>
<template>
    <div class="main-resource-data clearfix">
    <!-- 文件 -->
    <item v-for="(data,index)  in datas" 
          track-by="index"   
          transition="item" 
          stagger="100"
          :mydata = "data"
          :index = "index"
    />

  </div>  
  
</template>
<script>
import item from  "./itemList.vue"
//vuex 取数据
import  { getResource, chosefile } from '../actions.js'

  
export default {
    vuex: {
        getters: {
          datas: ({ mProject })=> mProject.datas,
          userId: ({ mProject })=> mProject.userId,
        },

        actions: {
            getResource, //获取元数据
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

    created() {
        this.getResource(this,this.userId)//主动触发需要提供vm
    },
}


  
</script>