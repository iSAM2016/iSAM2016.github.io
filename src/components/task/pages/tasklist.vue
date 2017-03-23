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
import item from "./itemList"
//vuex 取数据
import  { getResource } from  '../actions.js'
  
export default {
  vuex: {
      getters: {
        datas: ({ mTasks })=> mTasks.datas,
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
        totalTime: null,
         files: [],//文件
         childFolders: [],//文件夹

         myinputValue: null,//修改name 的value
         isshowicon: true, //是否修改name
         folderId: null,// 修改名字的文件夹Id
         mydatas: null,//数组中的单个文件
         isdisabledIcon: false,//禁止使用重命名
         choseArr:[],//单选数组
         iscreatNewfolder:false,

         ///////////////////////没有重置////////////////////
         istreeshow:true,//文件树显示
         showchange:'hidden',
         showModal: false

      }
    },
   
    
    props:[
          //'mychosekey',//全选
          "listoperation",
          "isdatecreatnewfolder",
    ],

    ready() {
      //this.getresource(this.user.name)

        var height =  $(window).height() - $('.main-contant').outerHeight(true) - $(".breadcrumb").outerHeight(true) - $(".main-resource-title").outerHeight(true) - $(".my-data-select").outerHeight(true) 
            
            $('.main-resource-data').slimscroll({
                          height: height,
                          width: 'auto', //可滚动区域宽度
                          size: '8px', //组件宽度
                          opacity: .3, //滚动条透明度
                          distance: '0px', //组件与侧边之间的距离
                          railColor: '#333', //轨道颜色
                          railOpacity: .2, //轨道透明度
                          railDraggable: true, //是否 滚动条可拖动
                  });

     

    },

    created() {

        this.getResource(this,this.userId)//主动触发需要提供vm
    },
   
    events: {
      /*choseButtonClik (value) {
        this.choseAllinput(value)
       
      },*/

      titleRename(){
        //重命名
        if(this.choseArr.length === 0){
           this.myalert()
         
          return false
        }else{
          let index = this.choseArr[0]
          let mydatas  = this.datas[index]
           this.renameFolder( mydatas,index )
          
        }
      
       },

       creatOneFolder(){
        this.iscreatNewfolder  = true //新建文件key
        this.isdatecreatnewfolder = true//新建文件夹置灰
        this.creatNewfolder() //新建文件夹
       },
      
      closeTree(){//显示tree
        this.showchange = "hidden"
        this.istreeshow = !this.istreeshow
         //this.dalistexchangeforder = false
      },

      exchangeforderfn(){//移动文件
        if(this.choseArr.length === 0){
           this.myalert()
          //alert("请选择一个文件")
          return false
        }else{
         
         this.showTree()
         //this.dalistexchangeforder = true
          
        }
      }
    },
    methods: {
   

     /*文件夹重命名*/
        renameFolder( mydatas,index ){
          if(this.isdisabledIcon){
            return false
          }
          this.isshowicon = false;//隐藏图标
          this.myinputValue = mydatas.name;
          this.folderId = mydatas.folderId;
          this.mydatas = mydatas;
          var myObject = JSON.parse(JSON.stringify(mydatas))
              myObject.isfolderIsShowNameKey = true
              this.datas.$set(index, myObject)


      /*var replace = this.datas.splice(index,1); //
          replace.isfolderIsShowNameKey = true
          replace.createTime = mydatas.createTime
          this.datas.splice(index,0,replace); */
        
        },


      /*确认重命名文件夹名称 */
      oktrenameFolder( el,index){
        if(!this.iscreatNewfolder){
          // 重命名文件夹
        var name = this.myinputValue,
        folderId = this.folderId,
        _this = this;
        

        this.$http.get('./FolderAction!RenameFolder?id='+folderId+'&name='+name)
          .then(function(ret) {
            console.log(ret) 
            alert('成功')
               /*重置*/
                   _this.folderId = null;
                   _this.myinputValue = null;

            var myObject = JSON.parse(JSON.stringify(this.datas[index]))
              myObject.isfolderIsShowNameKey = false
              myObject.name=name
              this.datas.$set(index, myObject)


            /*    修改名字
            var replace = this.datas.splice(index,1); 
                replace.name = name
                replace.isfolderIsShowNameKey = false
                this.datas.splice(index,0,replace); */

                this.isshowicon = true;//隐藏图标
          })
          .then(function(err) {
            console.log(err);
          })
       
        }else{
          // 新建文件夹
          console.log(this.myinputValue)
          console.log(this.folderId)
              var name = this.myinputValue,
            folderId = this.folderId,
            _this = this;



            this.$http.get('./FolderAction!NewFolder?parentFolderId='+folderId+'&name='+name+'&testProperty='+" ")
          .then(function(ret) {
            console.log(ret) 
            alert('成功')
               /*重置*/
                  _this.folderId = null;
                  _this.myinputValue = null;
                  _this.iscreatNewfolder  = false
                  _this.isdatecreatnewfolder = false//恢复新建文件夹

                  var myObject = JSON.parse(JSON.stringify(this.datas[index])),
                      tody = new Date();
                      myObject.name=name
                      myObject.isfolderIsShowNameKey = false
                      myObject.createTime = tody.getFullYear()+ "-"+ (tody.getMonth()+1) +"-" + tody.getDate()+  "     "  +tody.getHours() +":"+ tody.getMinutes() + ":"+ tody.getSeconds()
                      this.datas.$set(index, myObject)


            /*    //修改名字/
            var replace = this.datas.splice(index,1),
                tody = new Date();
                replace.name = name
                replace.isfolderIsShowNameKey = false

                replace.createTime = tody.getFullYear()+ "-"+ (tody.getMonth()+1) +"-" + tody.getDate()+  "     "  +tody.getHours() +":"+ tody.getMinutes() + ":"+ tody.getSeconds()
                this.datas.splice(index,0,replace);*/ 
                this.isshowicon = true;//隐藏图标
          })
          .then(function(err) {
            console.log(err);
          })

           
        }
      },

        /*不重命名文件夹名称 */
      notrenameFolder(index){
          if(!this.iscreatNewfolder){

             var myObject = JSON.parse(JSON.stringify(this.datas[index]))
              myObject.isfolderIsShowNameKey = false
              this.datas.$set(index, myObject)



         /* var replace = this.datas.splice(index,1); //
              replace.isfolderIsShowNameKey = false;
              replace.name =this.mydatas.name;
              replace.createTime = this.mydatas.createTime;
              this.datas.splice(index,0,replace); 
             */

          }else{
               this.datas.splice(index,1)
               this.iscreatNewfolder  = false
               this.isdatecreatnewfolder = false//恢复文件夹置灰
         }

        /* 重置*/
              this.myinputValue = null;
              this.folderId = null;
              this.mydatas = null;
              this.isshowicon = true;//显示
      },
/////////////////////////////////////////////////////////////////////////////////

      /*全选按钮操作*/
      choseAllinput(value) {
          if( true === value ){
            for (var i = 0; i < this.datas.length; i++){
              if(!this.choseArr.includes(i)){
                this.choseArr.push(i)
              }
              
            }
          }else{
            console.log(this.key)
            if(!this.key){

           this.choseArr.splice(0,this.choseArr.length)
            }

          }
      },

      creatNewfolder(){
        var newObj = {},
            index = 0
        newObj.folderId= this.userId 
        console.log(newObj.folderId)
        newObj.createTime= "---";
        newObj.name= "新建文件夹";
        this.datas.unshift(newObj)
        let mydatas = this.datas[0]
        
        this.renameFolder( mydatas, index )

       
      },

      openNewfolder(mydata,index){
       
        let folderId = mydata.folderId
        this.user.name = folderId 
        console.log(this.user.name); 
        this.choseArr=[],//单选数组
        this._reset()
        this.getresource( folderId )



      },
     showTree(){
      if(this.istreeshow){
        this.showchange = "visible"
        this.istreeshow = !this.istreeshow
        console.log(this.istreeshow)
      }else{
         
      }
     },

     myalert(){

     this.showModal = true
     },

     

      _reset(){
         this.datas = [];//总数据
         this.files =  [];//文件
         this.childFolders =  [];//文件夹`
         this.childFolders = []//文件夹`
         this.myinputValue = null//修改name 的value
         this.isshowicon= true //是否修改name
         this.folderId=null// 修改名字的文件夹Id
         this.mydatas=null//数组中的单个文件
         this.isdisabledIcon= false//禁止使用重命名
         this.iscreatNewfolder = false
         this.listoperation = false
         this.isdatecreatnewfolder  = false

      }

      

    },
    watch:{
      isChoseAllfile: function(value){
        console.log(value)
          this.choseAllinput(value)
        
      },
      choseArr(){
       /* if((this.choseArr.length === this.datas.length) && this.choseArr.length != 0 ){
           //执行全选
          
         }else{
           //this.mychosekey =false

         }
*/
         //控制移动和重命名的按钮
        //取消移动和重命名的操作
        //重命名图标操作
         if(this.choseArr.length > 1){
         this.listoperation= true
         this.isdisabledIcon = true
         }else{
           this.listoperation= false
           this.isdisabledIcon = false
         }

      },




    },

}
  
</script>