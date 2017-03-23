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
    <div>
      <div 
        class="row main-resource-row-data" 
         >
          <div class=" col-md-1 col-sm-1 col-xs-1">
            <input 
                type="checkbox" 
                v-model="ChoseAllkey"  
                :value="index" 
                :disabled='isnewFolder'
                @click.stop="chosefile(mydata)">
          </div>
          <div class=" col-md-3 col-sm-3 col-xs-3">
              <p>
                <strong   
                  :class="{'fileIcon':!mydata.fileId}" 
                  alt=""
                  @click='openNewfolder(mydata)'
                  >
                </strong>
                <span> 
                  <b 
                    v-show="isshowicon"  
                    @click='openNewfolder(mydata)'
                  >
                  {{ mydata.name }}
                  </b> 
                  <em v-show="!isshowicon">
                    <input 
                        type="text"  
                        v-model = "myinputValue" 
                        @click.stop=""
                    >
                    <button @click.stop="oktrenameFolder">✔</button>
                    <button @click.stop="notrenameFolder">X</button>
                  </em> 
                </span>
              </p>
          </div>
       
          <div class=" col-md-3 col-sm-3 col-xs-3" > 
             <div class="contral-icons" 
                  v-show="isshowicon"
                  :class = "{'IsShowIcon':isnewFolder}"
              >
               <i class="icon-download-alt"></i> 
               <i class="icon-exchange" @click.stop="showTree"></i>
               <i class="icon-edit" 
                  @click.stop="renameFolder()" 
                  :class="{disabledIcon: isdisabledIcon}"></i>
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
      <!-- 弹窗 -->

       <tree-grid 
          v-show="istreeshow"
          v-on:closeTree="closeTree"
       />
       
    </div>
</template>
<script>
  import  { slimscroll,heightResize }  from  '../../../js/slimscroll.js';
  import trees from '../../common/tree.vue';
  import  { delData, newName,chosefile,getResource } from  '../actions.js'

  export default {
    vuex: {
        getters: {
          isChoseAllfile:({ mResorce })=>  mResorce.isChoseAllfile,
          reNameItem:({ mResorce })=>  mResorce.reNameItem,
          //在重命名文件夹的时候不允许操作
          isnewFolder:({ mResorce })=> mResorce.isnewFolder
        },
        actions: {
          delData, //删除单个数据 
          newName, //命名文件  
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
         myinputValue: null,//修改name 的value
         isshowicon: true, //显示ICON
         isdisabledIcon: false,//禁止使用重命名
         istreeshow:false,//文件树显示
     }
    },

    mounted() {
      heightResize()
      slimscroll()
    },

    beforeUpdate(){
      //在创建新的文件件的时候做判断
      if(this.mydata.iscreatNewfolder ){
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

      //文件夹重命名
      renameFolder(){
          this.isshowicon = false;//隐藏图标
      },


      //确认重命名文件夹名称 
      oktrenameFolder(){
        // 重命名文件夹
        if(!this.mydata.iscreatNewfolder){
                let _this = this,
                    newName = _this.myinputValue;
        
        //API 
        /*this.$http.get('./FolderAction!RenameFolder?id='+folderId+'&name='+name)
          .then(function(ret) {
            console.log(ret) 
             _this.newName( this.mydata, newName )
            _this.myinputValue = null;
            _this.isshowicon = true;//隐藏图标
                 
          })
          .then(function(err) {
            console.log(err);
          })*/

            _this.newName( this.mydata, newName )
            _this.myinputValue = null;
            _this.isshowicon = true;//图标show
       
        }else{
          // 命名新建文件夹
          console.log(this.folderId)
              let newName = this.myinputValue,
                  folderId = this.folderId,
                  _this = this;

            /*this.$http.get('./FolderAction!NewFolder?parentFolderId='+folderId+'&name='+name+'&testProperty='+" ")
          .then(function(ret) {
            console.log(ret) 
            alert('成功')

            _this.newName( this.mydata, newName )
            _this.myinputValue = null;
            _this.isshowicon = true;//隐藏图标
          })
          .then(function(err) {
            console.log(err);
          })

           */
            _this.newName( this.mydata, newName )
            _this.myinputValue = null;
            _this.isshowicon = true;//隐藏图标
        }
      },

      //不重命名文件夹名称 
      notrenameFolder(){
          this.myinputValue = null;
          this.isshowicon = true;
      },

      //进入新的窗口
      openNewfolder(mydata){
           if(mydata.fileId){
              return false
           }else{
            //主动触发需要提供vm，这是第一次触发
            this.getResource( this,mydata.folderId,mydata.name )
           }
      },

      showTree(){
          this.istreeshow = !this.istreeshow
      },
    
      closeTree(){//显示tree
          this.istreeshow = !this.istreeshow
      },
    },
    computed:{
      ChoseAllkey:function(value){
        return this.isChoseAllfile
      },
    },
    watch:{
        reNameItem: function(value){
          if( value === this.mydata ){
            this.renameFolder()
          }
        },
        
    } 
      
  }  
</script>