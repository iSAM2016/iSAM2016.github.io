<style lang = "sass">
 @import './datalist.css';
 
.item-transition {
  transition: transform .2s ease;
  overflow: hidden;
  height: 20px;
}

.item-enter,.item-leave{
  opacity: 0;
  height: 0;
 }
</style>
<template>
  <div class="main-resource-data clearfix">
    <!-- 文件 -->
    <item v-for="(datas,index)  in datas"    
          transition="item" 
          stagger="100"
          v-bind:key="index"
          :mydata = "datas"
          :index = "index"
    />

  </div>
</template>
<script>
  import item from './itemList.vue';
  import  { getResource } from  '../actions.js'

  export default {
  vuex: {
      getters: {
        datas: ({ mResorce })=> mResorce.datas,
        //userid 是查询文件的源头
      },
      actions: {
            getResource, //获取元数据
      }
    },

    components: { 
      item
    },
    created() {
        //主动触发需要提供vm，这是第一次触发
        this.getResource(this,localStorage.userId)
    },
  }
</script>