<style lang = "sass">

</style>
<template>
  <div 
    class="row main-resource-row-data" 
     >
        <div class="row main-resource-row-data" @click.stop="">

              <div class=" col-md-1 col-sm-1 col-xs-1">
                <span class="ol_worldbreak">{{ mydata.item }}</span>
              </div>
              <div class=" col-md-1 col-sm-1 col-xs-1">
               <span>{{ mydata.name }}</span>

              </div>

              <div class=" col-md-1 col-sm-1 col-xs-1">

                <span class="ol_worldbreak">{{ mydata.state }}</span>
              </div>

              <div class=" col-md-1 col-sm-1 col-xs-1">

                <span class="ol_worldbreak">home/bmk</span>
              </div>
              <div class=" col-md-2 col-sm-2 col-xs-2">

               <span class="ol_worldbreak">{{ mydata.timeStart }}</span>
              </div>

               <div class=" col-md-2 col-sm-2 col-xs-2">

               <span class="ol_worldbreak">{{ mydata.End }}</span>
              </div>

              <div class=" col-md-2 col-sm-2 col-xs-2">

               <span class="ol_worldbreak">{{ mydata.timePre  }}</span>
              </div>

              <div class=" col-md-1 col-sm-1 col-xs-1">

               
                 <div><button type="button" class="btn btn-primary btn-xs " id="taskbtn">终止</button></div>

                <el-progress :percentage="70"></el-progress>
               
              </div>
              <div class=" col-md-1 col-sm-1 col-xs-1">

               <p><button type="button" class="btn btn-default btn-xs" id="taskbtn" @click="trashFiled"><i class="icon-trash" ></i>删除</button></p>
              </div>
              <div class="clearfix visible-xs"></div>
          </div> 
  </div> 
</template>
<script>
  import  { slimscroll,heightResize }  from  '../../../js/slimscroll.js';
  import  { delData,getResource } from  '../actions.js'
 

  export default {
    vuex: {
        getters: {
        },
        actions: {
          delData, //删除单个数据 
          getResource
        }
    },

    components: { 
    },

    props:{
        mydata: {
          type:Object,
          require:true
        },

        index: {
          type:Number,
          require:true
        },
    },

    data () {
      return {
        list: [
          './src/img/icon-me.jpg', 
          './src/img/img_tubiao.png', 
        ],
        
     }
    },

    mounted() {
      slimscroll()
      heightResize()
    },

    created() {
        
    },

    beforeUpdate(){
       if(this.mydata.iscreatNewfolder && this.keynum <1 ){
          this.keynum += 1
        //是否是新建文件夹
          this.renameFolder()      
      }
    },
   
    methods: {
      //删除文件
      trashFiled (){
        let that = this;
          this.$confirm('是否久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
              //api
              /*that.$http.get('./FileInFolderAction!DeleteFile?id='+fileId)
              .then(function(ret) {
                console.log(ret) 
                that.files.splice(index,1)
              })
              .then(function(err) {
                console.log(err);
              })
              */

          this.delData( this.mydata  )
        }).catch(() => {
             
        });
     
      },

    },

    computed:{
     
    
    },
    watch:{
       
    } 
      
  }  
</script>