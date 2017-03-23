<style lang = "sass">

</style>
<template>
      <div 
        class="row main-resource-row-data" 
         >
        <div class=" col-md-2 col-sm-2 col-xs-2">
          <button type="button" class="btn btn-primary btn-xs">{{ mydata.state }}</button>
        </div>
        <div class=" col-md-3 col-sm-3 col-xs-3">
            <ul class="intruduce">
               <li><b>{{ mydata.name }}</b></li>
               <li>创建的时间：
                  <time>{{  mydata.time }}</time></li>
               <li> 项目编号：
                  <span>{{ mydata.itemNum }}</span></li>
           </ul>
        </div>
        <div class=" col-md-4 col-sm-4 col-xs-4">
            <div>项目进度：</div>
             <el-progress :percentage="mydata.percentage"></el-progress>
        </div>
        <div class=" col-md-2 col-sm-2 col-xs-2">
          <p>---</p>
        </div>
        <div class=" col-md-1 col-sm-1 col-xs-1">
          <p>
            <button 
                  type="button" 
                  class="btn btn-default btn-xs"
                  @click="trashFiled"
            >
                    <i class="icon-trash" ></i>删除
            </button>
          </p>
        </div>
        <div class="clearfix visible-xs"></div>
      </div>
</template>
<script>
  import  { slimscroll,heightResize }  from  '../../../js/slimscroll.js';
  import  { delData,getResource } from  '../actions.js'
  export default {
    vuex: {
        getters: {
            //是否显示标识
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

  }  
</script>