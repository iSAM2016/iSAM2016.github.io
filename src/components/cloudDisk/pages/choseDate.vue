<style lang = "sass">
</style>
<template>
 <div id="titlebox" v-startuploader >
	<div class="all-buttons main-navs  my-data-select" style="background: #fff">
	<input  type="button" class="btn  btn-primary cd-signin" value="上传文件+"  @click="changekey"   :disabled="isnewFolder"></input>
	<button type="button"  class="btn btn-default"   :disabled="isnewFolder">下载</button>

	<button type="button" class="btn btn-default" :disabled='isnewFolder||selctDataLength >1? true: false' @click="exchange"  >移动</button>

	<button type="button" class="btn btn-default" @click="mydelData"  :disabled="isnewFolder">删除</button>

	<button type="button" class="btn btn-default" :disabled=' isnewFolder||selctDataLength>1? true: false' @click="rename" >重命名</button>

	<button type="button" 
    class="btn btn-default" 
    @click="creatOneFolder" 
    :class = "{mydisabled : iscreatnewfolder}"
    :disabled="isnewFolder"
  >
    新建文件夹</button>

	<form class="bs-example bs-example-form"  id="search-top" role="form">
		<div class="input-group clearfix">
			<input type="text" class="form-control" placeholder="输入关键字"  :disabled="isnewFolder">
			<span class="input-group-btn">
				<button class="btn btn-default" type="button"  :disabled="isnewFolder">搜索</button>
			</span>
		</div>
		<!-- /input-group -->
	</form>
</div>
    <showUpload  :mymsg="false"></showUpload>
    <tree-grid 
      v-show="istreeshow"
      v-on:closeTree="closeTree"
    />

  
</script>
</div>
</template>
<script>
import Vue from 'vue'
import WebUploader from '../../../plugins/pub/webuploader/webuploader.min.js'
import treeGrid from '../../common/tree.vue';
import showUpload from './showUploadinfo.vue';
import '../../../directives/startuploader.js'
import  { delSelectAllData, newNames, createNewfolder } from  '../actions.js'

let  eventHub = new Vue()

export default {
   vuex: {
        getters: {
          selctDataLength:({ mResorce })=>  mResorce.addDatas.length,
          //在新建文件夹的时候不允许在新建文件
          isnewFolder:({ mResorce })=> mResorce.isnewFolder
        },
        actions: {
          delSelectAllData, //删除多个数据 
          newNames, //命名文件（只能一次命名一个文件）
          createNewfolder//新建文件夹  
        }
    },
    components: { 
       	 showUpload,
         treeGrid 
    },

    props:[
      "iscreatnewfolder",
    ],

    created: function () {
       eventHub.$emit('changekey', { changekey: this.changekey })
    },
   
    data () {
      return {
        mymsg: "",
        istreeshow: false,
        sow: true
      }
    },

    mounted(){
    },

    methods: {
      changekey(){
        this.sow = false
      },

      rename(){
        if(this.selctDataLength === 1 ){
           this.newNames()
        }else {
          this.open()
        }
      },

      mydelData(){
        if( this.selctDataLength ){
           this.delSelectAllData()
        }else {
          this.opendel()
        }
      },    

      creatOneFolder(){
          this.createNewfolder()
      },

      exchange(){
        if( this.selctDataLength ){
           this.closeTree()
          }else {
            this.open()
          }
      },

      closeTree(){//显示tree
          this.istreeshow = !this.istreeshow
      },
     
      open() {
        this.$alert('请您选择一个文件', '注意', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `请您选择一个文件`
            });
          }
        });
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
    },

    
  }

  
</script>