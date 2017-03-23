<style lang = "sass">
.myprogress{
  width: 30%;
}
#canvasMain{
  width: 100%;
  height:400px;
}

/* 必需 */
.static-transition {
  transition: all .5s ease;
  height: 370px;
  padding: 10px;
  overflow: hidden;
}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.static-enter, .static-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}




</style>
<template>
<div>
  <div class="row">
    <div class=" col-lg-3 col-md-12 col-sm-12 col-xs-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">运行中的任务</h3>
        </div>
        <div class="panel-body">1</div>
      </div>
    </div>

    <div class=" col-lg-3 col-md-12 col-sm-12 col-xs-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">项目数</h3>
        </div>
        <div class="panel-body">1</div>
      </div>
    </div>

    <div class=" col-lg-3 col-md-12 col-sm-12 col-xs-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">存储资源使用</h3>
        </div>
        <div class="panel-body">1</div>
      </div>
    </div>

    <div class=" col-lg-3 col-md-12 col-sm-12 col-xs-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">消息</h3>
        </div>
        <div class="panel-body">1</div>
      </div>
    </div>

  </div>

  <!-- 第二排 -->

  <div class="row">
    <div class="  col-lg-8  col-md-12 col-sm-12 col-xs-12">
      <!-- 文件 -->
      <div class="panel panel-default peson-relation " v-panel="fold" >
        <div class="panel-heading">
          <h3 class="panel-title">教育经历</h3>
          <h3 class="panel-title"> <i class="icon-plus-sign" id="pIcon"></i>
          </h3>
        </div>
        <div class="panel-body ol_p" v-show="fold.key" transition="static">
          <div class="cotainer change ol_c">

          </div>

        </div>
      </div>

    </div>
    <div class=" col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <div class="panel panel-default peson-relation " v-panel="fold1" >
        <div class="panel-heading">
          <h3 class="panel-title">教育经历</h3>
          <h3 class="panel-title"> <i class="icon-plus-sign" id="pIcon"></i>
          </h3>
        </div>
        <div class="panel-body"  v-show="fold1.key" transition="static">
          <div class="cotainer change ">
             <div class=" col-md-6 col-sm-6 col-xs-6">主题</div>
             <div class=" col-md-6 col-sm-6 col-xs-6">内容</div>
          </div>
          <div class="cotainer change ">
             <div class=" col-md-6 col-sm-6 col-xs-6">主题</div>
             <div class=" col-md-6 col-sm-6 col-xs-6">内容</div>
          </div>

        </div>
      </div>


    </div>
  </div>


   <!-- 第三排 -->

  <div class="row">
    <div class="  col-lg-8  col-md-12 col-sm-12 col-xs-12">
      <!-- 文件 -->
       <div class="panel panel-default peson-relation " v-panel="fold2" >
        <div class="panel-heading">
          <h3 class="panel-title">教育经历</h3>
          <h3 class="panel-title"> <i class="icon-plus-sign" id="pIcon"></i>
          </h3>
        </div>
        <div class="panel-body" v-show="fold2.key" transition="static">


        </div>
      </div>
    
    </div>
    <div class=" col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <div class="panel panel-default peson-relation " v-panel="fold3" >
        <div class="panel-heading">
          <h3 class="panel-title">计算资源统计</h3>
          <h3 class="panel-title"> <i class="icon-plus-sign" id="pIcon"></i>
          </h3>
        </div>
        <div class="panel-body" v-show="fold3.key" transition="static">
            <div id="canvasMain" ></div>
    </div>
  </div>

        </div>
      </div>
  
</div>
</template>


<script>
import taskList from '../task/pages/taskList.vue'
import chosetitle from '../task/pages/taskchosetitle.vue'
import project from '../project/pages/progectList.vue'
import echarts from 'echarts';

  
export default {
    
  vuex: {
      getters: {
      
      },

      actions: {
            
      }
    },
    components: { 
       chosetitle,
       taskList,
       project
          },
     data () {
      return {
        totalTime: null,
        
         istreeshow:true,//文件树显示
         showchange:'hidden',
         showModal: false,
         fold:{key:true,isbutton: false},
         fold1:{key:true,isbutton: false},
         fold2:{key:true,isbutton: false},
         fold3:{key:true,isbutton: false},

      }
    },
   
    
    props:[
         
    ],

    mounted() {
    
       let  myChart = echarts.init(document.getElementById('canvasMain'));
                     myChart.setOption({
                     title : {
                        text: '用户资源统计',
                       
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['已用资源','未用资源',]
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'未用资源'},
                                {value:310, name:'已用资源'},
                               
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
          this.myChart= myChart
    },

    beforeDestroy: function() {
        this.myChart.dispose();
    },

    created() {

    },
   
    events: {
     
    },
    methods: {
   
    },

}
  
</script>