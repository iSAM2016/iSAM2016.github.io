<style lang = "sass">
  

</style>
<template>
<div class="all-buttons main-navs  my-data-select" id="titlebox">
  	<button type="button"  class="btn btn-default" >全部还原</button>

  	<button type="button" class="btn btn-default"  @click="mydelData">全部删除</button>
</div>
</template>
<script>
import  { delData } from  '../actions.js'
export default {
     vuex: {
        getters: {
          selctDataLength:({ mRubbishResorce })=>  mRubbishResorce.addDatas.length
        },
        actions: {
          delData, //删除多个数据 
        }
    },
    components: { 
       	
          },
    props:[
    ],
    
    data () {
      return {
        mymsg: ""
      }
    },
    events: {
      timeUpdate () {
       
      },
      
    },
    watch:{
       
    },
    methods: {
      mydelData(){
        if( this.selctDataLength ){
           this.delData()
        }else {
          this.opendel()
   
        }
      },    
      opendel(){
           this.$alert('请您选择文件', '注意', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: `请您选择文件`
              });
            }
          });
      }
    }
}
</script>