<style lang = "sass">
  /********文件树*******/

.tree-content{
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
 
  z-index: 10000000;
  vertical-align: middle;
  display:table-cell;   
  text-align: left;
  color: #333333

}
.tree-content .title{
  height: 4rem;
  width: 100%;
  line-height: 2.8;
  padding: 0.4rem 1rem;
  font-weight: bold;
  vertical-align: middle;
  background-color: #eee;
  color: #333;
  position: relative;
  -webkit-font-smoothing: none;
  -webkit-user-select:text;
  user-select: text; 
  border-bottom: 2px solid rgba(0,0,0,.1);
  cursor:move

}

.tree-content .title span + span{
  float: right;

}


.tree-content-main{
  position: absolute;
  width: 48rem;
  left: 50%;
  top: 50%;
  border:4px solid rgba(0, 0, 0, 0.2);
  margin-left: -24rem;
  margin-top: -18rem;
  z-index: 10000000000000;
  background-color: white;
  overflow: hidden;


}

.tree-content-main .tree-folder-content{
  width: 100%;
  height: 21.4rem;
  margin: 1rem;
  border: 1px solid rgba(0,0,0,.1);

  overflow: hidden;

}
.tree-content-main .tree-folder-content ul, 
.tree-content-main .tree-folder-content li {
  list-style:none; 
  width: 100%;
  padding: 0;
  margin: 0;
}


.tree-content-main .tree-folder-buttons{
   height: 4rem;
  line-height: 2.8;
  padding: 0.4rem 1rem;
  font-weight: bold;
  vertical-align: middle;
  color: #333;
  text-align: center;
  position: relative;
  -webkit-font-smoothing: none;
  -webkit-user-select:text;
  user-select: text; 
  border-top: 1px solid rgba(0,0,0,.1);
  margin: 0 1rem;
   
  
}

.tree-content-main .tree-folder-buttons button{
  width: 14rem;
  text-align: center;

}

.tree-content-main .tree-folder-buttons button:nth-child(1){
  background-color: #337ab7;
    border-color: #2e6da4;
  color: #fff;
}


.tree-folder-content  .item div:hover {
  background-color: #e5f0fb;
  border-color: #BBD4EF #fff;
    border-top-color: rgb(187, 212, 239);
  border-right-color: rgb(255, 255, 255);
  border-bottom-color: rgb(187, 212, 239);
  border-left-color: rgb(255, 255, 255);

}
.tree-content-main .bg{
   background-color: #e5f0fb;
  border-color: #BBD4EF #fff;
    border-top-color: rgb(187, 212, 239);
  border-right-color: rgb(255, 255, 255);
  border-bottom-color: rgb(187, 212, 239);
  border-left-color: rgb(255, 255, 255);
}

.tree-content-main .close_tree{
  cursor:pointer;
}
.tree-content-main  li img {
   height: 25px;
   width: 24px;

}

.tree-content-main  .item div {
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 14px;
  

}




 .tree-content-main .tree-icon{
  display: inline-block;
  height: 12px;
  width: 12px;
  background: url("../../img/icon-tree.png") no-repeat;
  background-position: -30px  0;

}

 .tree-content-main .tree-iconA{
  display: inline-block;
  height: 12px;
  width: 12px;
  background: url("../../img/icon-tree.png") no-repeat;
  background-position: -30px  -23px;

}



</style>
<template>
  <div  class="tree-content " >
    <div class="tree-content-main" v-select  >
      <div class="title">
        <span>移动到</span>
        <span  @click="closeTree" class="close_tree">X</span>
      </div>
      <div class="tree-folder-content">
     <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </div>
      <div class="tree-folder-buttons">
       
        <button type="button" class="btn btn-default ">确定</button>
        <button type="button" class="btn btn-default">取消</button>
      </div>

    </div>
  </div>

</template>
<script>
// define the item component
import 'jquery-slimscroll/jquery.slimscroll.min.js';
import '../../directives/treePadding.js';

export default {
        components: { 
          
              },
        ready() {
                $('.tree-folder-content').slimscroll({
                        height: 'auto',
                        width: 'auto', //可滚动区域宽度
                        size: '4px', //组件宽度
                        opacity: .3, //滚动条透明度
                        distance: '14px', //组件与侧边之间的距离
                        railColor: '#333', //轨道颜色
                        railOpacity: .2, //轨道透明度
                        railDraggable: true, //是否 滚动条可拖动
                });

                  $(".tree-content-main").draggabilly()
           
           },
      props: {
       
      },
      data: function () {
        return {
          data: [{
                label: '一级 1',
                children: [{
                  label: '二级 1-1'
                }]
              }, {
                label: '一级 2',
                children: [{
                  label: '二级 2-1'
                }, {
                  label: '二级 2-2'
                }]
              }, {
                label: '一级 3',
                children: [{
                  label: '二级 3-1'
                }, {
                  label: '二级 3-2'
                }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
        }
      },
      computed: {
        
      },
      methods: {
        closeTree(){
            this.$emit("closeTree")
        },
         handleNodeClick(data) {
        console.log(data);
      }
        
      }
  }
</script>