<style lang = "sass">
#shoping_pic{
        position: relative;
        width: 40%;
        max-width: 10rem;
        top: 1rem;
        left: -1rem;
}

</style>
<template>
    <div class="row main-resource-row-data f0"  >
        <div class=" col-md-1 col-sm-1 col-xs-1 ">
         
            <input 
                type="checkbox" 
                v-model="ChoseAllkey"  
                :value="index" 
                @click.stop="chosefile(mydata)">
        </div>
        <div class=" col-md-6 col-sm-6 col-xs-6 ">
          <div class=" ">
            <a   class="ol_content_detail c clearfix">
              <div class=" col-lg-3 col-md-4 col-sm-12 col-xs-12  " >
                <img src="../../../img/img_tubiao.png" alt=""
                id="shoping_pic"></div>
              <div class="   col-lg-9 col-md-8 col-sm-12 col-xs-12  ">
                <span> <b>{{ mydata.name }}</b>
                </span>
                <address class="m-t-md beyond" title="data.Context" >{{mydata.testProperty  }}</address>
              </div>
            </a>
          </div>
        </div>
  
        <div class=" col-md-3  col-sm-3 col-xs-3 ">
          <span >{{ mydata.money }}元</span>
        </div>
  
        <div class=" col-md-2 col-sm-2 col-xs-2 ">
  
          <span><button type="button" class="btn btn-default btn-xs" id="taskbtn" @click="trashFiled"><i class="icon-trash" ></i>删除</button></span>
        </div>
  
        <div class="clearfix visible-xs"></div>
  
    </div>
</template>
<script>
   import  { slimscroll,heightResize }  from  '../../../js/slimscroll.js';
  import trees from '../../common/tree.vue';
  import  { delData, newName,chosefile, isNewNameShowIconn,getResource } from  '../actions.js'
 

  export default {
    vuex: {
        getters: {
          isChoseAllfile:({ mShopping })=>  mShopping.isChoseAllfile,
         
            //是否显示标识
        },
        actions: {
          delData, //删除单个数据 
         
          chosefile,//单选文件
        
          getResource
        }
    },

    components: { 
        treeGrid:trees,
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
         keynum:0,
         childFolders: [],//文件夹
         myinputValue: null,//修改name 的value
         isshowicon: true, //显示ICON
         isdisabledIcon: false,//禁止使用重命名
         istreeshow:false,//文件树显示
         isChoseAllkey: false,
         isNewNameIsShowIcon:false
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
      ChoseAllkey:function(value){
             return this.isChoseAllfile
          
      },
    
    },
    watch:{
       
    } 
      
  }  
</script>