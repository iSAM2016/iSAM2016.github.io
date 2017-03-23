<style lang = "sass"></style>
<template>
  <div class="row  main-resource-title" id="changeRow">
    <div class=" col-md-1 col-sm-1 col-xs-1"> <b class="ol_worldbreak">任务编号</b>

    </div>
    <div class=" col-md-1 col-sm-1 col-xs-1">

    <b class="ol_worldbreak">任务名称</b>
    </div>

    <div class=" col-md-1 col-sm-1 col-xs-1">

        <b class="ol_worldbreak">软件名称</b>
    </div>

    <div class=" col-md-1 col-sm-1 col-xs-1">
        <b class="ol_worldbreak">输入文件</b>

    </div>

    <div class=" col-md-2 col-sm-2 col-xs-2">

        <b class="ol_worldbreak">提交时间</b>
    </div>

    <div class=" col-md-2 col-sm-2 col-xs-2">

        <b class="ol_worldbreak">结束时间</b>
    </div>

    <div class=" col-md-2 col-sm-2 col-xs-2">

        <b class="ol_worldbreak">预计结束时间</b>
    </div>
    <div class=" col-md-1 col-sm-1 col-xs-1">

        <div class="btn-group">
          <button type="button" class="btn btn-default btn-sm">全部</button>
          <button type="button" class="btn btn-default  btn-sm dropdown-toggle" 
        data-toggle="dropdown">
            <span class="caret"></span>
            <span class="sr-only">全部</span>
          </button>
          <ul class="dropdown-menu" role="menu">
            <li>
              <a href="#">完成</a>
            </li>
            <li>
              <a href="#">运行中</a>
            </li>
            <li>
              <a href="#">终止</a>
            </li>

            <li>
              <a href="#">报错</a>
            </li>
            <li>
              <a href="#">资源准备中</a>
            </li>
            <li>
              <a href="#">暂停</a>
            </li>
          </ul>
        </div>
    </div>

    <div class=" col-md-1 col-sm-1 col-xs-1">

        <b class="ol_worldbreak">操作</b>
    </div>
  </div>

</template>
<script>

  export default {
     vuex: {
      getters: {
       

      },
      actions: {
            
      }
    },
    components: { 
       
    },

    props:[
      
    ],

    data () {
      return {
      }
    },

    methods: {

    },
      
}
</script>