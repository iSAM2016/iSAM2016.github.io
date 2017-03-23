<style lang = "sass">
</style>
<template>
      <div 
        class="row main-resource-row-data" 
         >
          <div class=" col-md-1 col-sm-1 col-xs-1">

            <input 
                type="checkbox" 
                v-model="ChoseAllkey"  
                :value="index" 
                @click.stop="chosefile(mydata)">
          </div>
          <div class=" col-md-3 col-sm-3 col-xs-3">
              <p>
                <strong   
                  :class="{'fileIcon':!mydata.fileId}" 
                  alt=""
                  >
                </strong>
                <span> 
                  <b 
                    v-show="isshowicon"  
                  >
                  {{ mydata.name }}
                  </b> 
                 
                  </em> 
                </span>
              </p>
          </div>
       
          <div class=" col-md-3 col-sm-3 col-xs-3" > 
             <div class="contral-icons" 
                  v-show="isshowicon"
              >
               
               <i class="icon-edit" 
                  @click.stop="" 
                  ></i>
               <i class="icon-trash" @click.stop="trashFiled"></i>
            </div>
        </div>
        <div class=" col-md-3 col-sm-3 col-xs-3">

          <p>{{ mydata.createTime }}</p>
        </div>

        <div class=" col-md-2 col-sm-2 col-xs-2">
          <p>---</p>
        </div>

        <div class="clearfix visible-xs"></div>

      </div>
</template>
<script>
 import  { slimscroll,heightResize }  from  '../../../js/slimscroll.js';
  import trees from '../../common/tree.vue';
  import  { delData,chosefile, isNewNameShowIconn } from  '../actions.js'
 

  export default {
    vuex: {
        getters: {
          isChoseAllfile:({ mRubbishResorce })=>  mRubbishResorce.isChoseAllfile,
       
            //是否显示标识
        },
        actions: {
          delData, //删除单个数据 
          chosefile,//单选文件
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
         childFolders: [],//文件夹
         isshowicon: true, //显示ICON
         istreeshow:false,//文件树显示
         isChoseAllkey: false,
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

    computed:{
      ChoseAllkey:function(value){
             return this.isChoseAllfile
          
      },
    },
      
  }  
</script>