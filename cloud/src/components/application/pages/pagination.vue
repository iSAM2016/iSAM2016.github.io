<style lang = "sass">
.pagin-cont{
  text-align:center;
 }

</style>
<template>
 <div class="pagin-cont" v-if="isshow">
    <ul class="pagination"> 
    <li><a href="javascript:void(0)" @click = "prefile">&laquo;</a></li> 
    <li><a href="javascript:void(0)" v-for="n in pagesnum"  @click="goToPage(n)"> {{ n+1 }} </a></li> 
    
    <li><a href="javascript:void(0)" @click = "nextfile">&raquo;</a></li> 
</ul>
 </div>

</template>
<script>
import  { goTo } from  '../actions.js'
  export default {
     vuex: {
      getters: {
         nowpage: ({ mTools })=> mTools.page, //当前页数
         isshow: ({ mTools })=> mTools.issearch //搜索的时候不显示
      
      },

      actions: {
            goTo, //页面跳转
      }
    },

    components: { 
    },

    data () {
      return {
         pagesnum: null, //总页数

      }
    },
    
    props:[
          
    ],

    mounted() {
     let self = this;
        $.ajax({
            url: 'http://tool/allpage',
        }).done(function(data, status, xhr){
           self.pagesnum = JSON.parse(data).pagesnum
        })
    },

    methods: {
        goToPage( page ){
           this.goTo(this, page+1)
        },
        //前一项的
        prefile(){
            if( this.nowpage -1> 0){

             this.goTo(this, this.nowpage -1)
            } else {
              this.open1()
            }
          
        },
        //后一项
        nextfile(){
           if( this.nowpage +1 < this.pagesnum){
             this.goTo(this, this.pagesnum +1)
            }else{
               this.open("已经是最后一页")
            }
        },

        open() {
          this.$alert('已经是最后一页', '注意', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: `已经是最后一页`
              });
            }
          });
        },

         open1() {
          this.$alert('已经是第一页', '注意', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: `已经是第一页`
              });
            }
          });
        },
    },
    watch:{
      

    },
}
  
</script>