<style lang = "sass">
.l{
  float: left;
}
.r{
  float: right;
}

#tools-content{
   border:none;
   text-align:left;

}
</style>
<template>
  <div class=" clearfix">
    <!--  start -->
    <div class=" col-lg-12 col-md-12 col-sm-12 col-xs-12  " v-for="data in datas">

      <div class="ol_contact_pr" id="tools-content">
        <section  class="ol_content_detail clearfix  col-lg-10 col-md-10 col-sm-10 col-xs-12 ">

          <div class=" col-lg-3 col-md-4 col-sm-12 col-xs-12 ol_img_cent"   >
            <img :src="data.url" alt=""></div>

          <div class="   col-lg-9 col-md-8 col-sm-12 col-xs-12  ">
            <span>{{ data.title }}</span>
            <address class="m-t-md beyond" title="data.Context" v-text="data.Context"></address>
            <address class="" title="data.Context" > <b>软件价格:</b>
              <span>3000</span>
            </address>
            <address class="" title="data.Context" >
              <div class="btn-group">
                <button type="button" class="btn btn-default">立刻购买</button>
                <button type="button" class="btn btn-default" @click="myalert">加入购物车</button>

              </div>
            </address>

          </div>

        </section>
        <section class="col-lg-2 col-md-2 col-sm-2 col-xs-12 ">版本介绍</section>

      </div>
    </div>
    <!-- end -->

    <ul id="myTab" class="nav nav-tabs">
      <li class="active item" >
        <a href="#home" data-toggle="tab" >全部</a>
      </li>
      <li class="item">
        <a href="#ios" data-toggle="tab">医学</a>
      </li>

    </ul>
    <div id="myTabContent" class="tab-content">

      <!--  start -->
      <div class="tab-pane fade in active" id="home">
        <p>
          W3Cschoool菜鸟教程是一个提供最新的web技术站点，本站免费提供了建站相关的技术文档，帮助广大web技术爱好者快速入门并建立自己的网站。菜鸟先飞早入行——学的不仅是技术，更是梦想。
        </p>
      </div>
      <div class="tab-pane fade" id="ios">
        <p>
          iOS 是一个由苹果公司开发和发布的手机操作系统。最初是于 2007 年首次发布 iPhone、iPod Touch 和 Apple
            TV。iOS 派生自 OS X，它们共享 Darwin 基础。OS X 操作系统是用在苹果电脑上，iOS 是苹果的移动版本。
        </p>
      </div>
      <!-- end --> </div>

</div>  
</template>
<script>
import  { getalltool } from  '../actions.js'

  export default {
     vuex: {
      getters: {
        datas: ({ mAlltools })=> mAlltools.datas,
    
      },

      actions: {
            getalltool, //获取元数据
            
      }
    },
    created() {

        this.getalltool(this,1)//主动触发需要提供vm
    },
    components: { 
    },

    data () {
      return {
          showModal: false
        
      }
    },
    
    props:[
          
    ],

    methods: {
      closemodule(){
        this.showModal =false
      },
      myalert(){
        this.open()
      },
      open() {
          this.$alert('添加到个购物车', '注意', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: `添加到个购物车`
              });
            }
          });
        },


    },

}
  
</script>