<style lang= "sass">

.personal-info-change{
    margin: 0 1rem 0 180px;
    line-height: 3.5;
    background-color:#fff;
    background-color:#f5f5f5;;
}


.control-label {
    line-height: 1.2;
}

.peson-relation{
     margin-bottom:2rem;;
    .panel-heading{
        background-color:#fff;;
        border-bottom:1px solid #eee;

      }
     
    .panel-title:nth-child(2){
        float:right;;
        position:relative;
        top: -1.2rem;
      }
  
}

.peson-relation .peson-relation-datalist{
    margin-top:1rem;;
    margin-bottom:1rem;;
    line-height: 2.4;
    .itemname{
        width:4.7rem;
        display:block;
        float:left;;
        margin-right:1rem;;
        text-align:justify;;
           
         }
    .form-control{
       width:50%;

    }
    .dtlitext{
       width:100%;
    }
     
}

.peson-relation {
    .person-buttons{
        text-align:right;
    }

    .personimg{
       float: left;
    }
    .box{
        float: left;
        padding:2rem;

    }
}

.expand-transition {
  transition: all .5s ease;
  height: 370px;
  padding: 10px;
  overflow: hidden;
}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}


</style>
<template>

    <section class="personal-info-change clearfix">
     
        <!-- 学历说明 -->
        <div class="panel panel-default peson-relation "  v-panel="fold">
            <div class="panel-heading">
                <h3 class="panel-title">个人信息</h3>
                <h3 class="panel-title"> <i class="icon-plus-sign" id="pIcon"></i>
                </h3>
            </div>
            <div class="panel-body" >
                <div class="cotainer change clearfix" v-show="fold.key" >
                    <div class="pesonal-info-icon personimg">
                        <img src="" alt="pic" ></div>
                    <div class="box">
                        <div class="row ">
                            <div class=" col-md-12 col-sm-12 col-xs-12">
                                <p class="peson-relation-datalist">
                                    <span class="itemname">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span>
                                    胡冬冬</p>
                            </div>
                        </div>

                        <div class="row ">
                            <div class=" col-md-12 col-sm-12 col-xs-12">
                                <p class="peson-relation-datalist">
                                    <span class="itemname">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span>
                                    <label class="checkbox-inline">
                                        <input type="radio" name="optionsRadiosinline" id="optionsRadios3" 
             value="option1" checked>男</label>
                                    <label class="checkbox-inline">
                                        <input type="radio" name="optionsRadiosinline" id="optionsRadios4" 
             value="option2">女</label>
                                </p>
                            </div>
                        </div>

                        <div class="row ">
                            <div class=" col-md-12 col-sm-12 col-xs-12">
                                <p class="peson-relation-datalist">
                                    <span class="itemname">出生日期</span>
                                    <div class="container">
    </div></p>
                            </div>
                        </div>
                    </div>
                    <span class="clearfix"></span>
                    <p class="person-buttons  onlyshow">
                        <button type="button" class="btn btn-default">取消</button>

                        <button type="button" class="btn btn-default">确定</button>
                    </p>
                </div>
                <div class="cotainer  clearfix" v-show="!fold.key">
                    <div class="pesonal-info-icon personimg">
                        <img src="" alt="pic" ></div>
                    <div class="box">
                        <div class="row ">
                            <div class=" col-md-12 col-sm-12 col-xs-12">
                                <p class="peson-relation-datalist">
                                    <span class="itemname">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span>
                                    胡冬冬</p>
                            </div>
                        </div>

                        <div class="row ">
                            <div class=" col-md-12 col-sm-12 col-xs-12">
                                <p class="peson-relation-datalist">
                                    <span class="itemname">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span>
                                    <label class="checkbox-inline">
                                        <input type="radio" name="optionsRadiosinline" id="optionsRadios3" 
             value="option1" checked>男</label>
                                    <label class="checkbox-inline">
                                        <input type="radio" name="optionsRadiosinline" id="optionsRadios4" 
             value="option2">女</label>
                                </p>
                            </div>
                        </div>

                        <div class="row ">
                            <div class=" col-md-12 col-sm-12 col-xs-12">
                                <p class="peson-relation-datalist">
                                    <span class="itemname">出生日期</span>
                                    2001.12.3</p>
                            </div>

                        </div>
                    </div>
                    
                </div>

                <!--  myshow -->
                 

            </div>
        </div>

        <!-- 学历说明 -->
        <div class="panel panel-default peson-relation " v-panel="fold1" >
            <div class="panel-heading">
                <h3 class="panel-title">教育经历</h3>
                <h3 class="panel-title"> <i class="icon-plus-sign" id="pIcon"></i>
                </h3>
            </div>
            <div class="panel-body">
                <div class="cotainer change" v-show="fold1.key" transition="expand">
                    <div class="row ">
                        <div class=" col-md-4 col-sm-4 col-xs-4">
                            <p class="peson-relation-datalist">
                                <span class="itemname">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;校</span>
                                <input type="text" class="form-control" 
                    placeholder="请输入名字"></p>
                        </div>
                        <div class=" col-md-4 col-sm-4 col-xs-4">
                            <p class="peson-relation-datalist">
                                <span class="itemname">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历</span>
                                <input type="text" class="form-control" 
                    placeholder="请输入名字"></p>
                        </div>
                        <div class=" col-md-4 col-sm-4 col-xs-4">
                            <p class="peson-relation-datalist">
                                <span class="itemname">专&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业</span>
                                <input type="text" class="form-control" 
                    placeholder="请输入名字"></p>
                        </div>

                    </div>

                    <div class="row ">
                        <div class=" col-md-12 col-sm-12 col-xs-12">
                            <p class="peson-relation-datalist">
                                <span class="itemname">在校时间</span>
                                <div class="calendar calendar2"></div>
                                <input type="text" class="form-control" 
                    placeholder="请输入名字"></p>
                        </div>

                    </div>

                    <div class="row ">
                        <div class=" col-md-12 col-sm-12 col-xs-12">
                            <p class="peson-relation-datalist">
                                <span class="itemname">详细描述</span>
                                <textarea class="form-control dtlitext" rows="3"></textarea>
                            </p>
                        </div>

                    </div>

                    <p class="person-buttons  onlyshow">
                        <button type="button" class="btn btn-default  fold-btn" >取消121</button>

                        <button type="button" class="btn btn-default fold-btn">确定</button>
                    </p>
                </div>

            </div>
        </div>

        <!-- 通信方式 -->
        <div class="panel panel-default peson-relation " v-panel="fold2"
>
            <div class="panel-heading">
                <h3 class="panel-title">通信方式</h3>
                <h3 class="panel-title">
                    <i class="icon-plus-sign" id="pIcon"></i>
                </h3>
            </div>
            <div class="panel-body">
                <div class="row change" v-show="fold2.key">
                    <div class=" col-md-4 col-sm-4 col-xs-4">
                        <p class="peson-relation-datalist">
                            <span class="itemname">手机</span>
                            <input type="text" class="form-control" 
                    placeholder="请输入名字"></p>
                    </div>
                    <div class=" col-md-4 col-sm-4 col-xs-4">
                        <p class="peson-relation-datalist">
                            <span class="itemname">手机</span>
                            <input type="text" class="form-control" 
                    placeholder="请输入名字"></p>
                    </div>
                    <div class=" col-md-4 col-sm-4 col-xs-4">
                        <p class="peson-relation-datalist">
                            <span class="itemname">手机</span>
                            <input type="text" class="form-control" 
                    placeholder="请输入名字"></p>
                    </div>
                         <p class="person-buttons">
                            <button type="button" class="btn btn-default">取消</button>

                            <button type="button" class="btn btn-default">确定</button>
                        </p>
                </div>

                <div class="row "  v-show="!fold2.key">
                    <div class=" col-md-4 col-sm-4 col-xs-4">
                        <p class="peson-relation-datalist">
                            <span class="itemname">手机</span>
                            <span>8990</span>
                        </p>
                    </div>
                    <div class=" col-md-4 col-sm-4 col-xs-4">
                        <p class="peson-relation-datalist">
                            <span class="itemname">手机</span>
                            <span>8990</span>
                        </p>
                    </div>
                    <div class=" col-md-4 col-sm-4 col-xs-4">
                        <p class="peson-relation-datalist">
                            <span class="itemname">手机</span>
                            <span>8990</span>
                        </p>
                    </div>

               
                </div>
            </div>
        </div>

    </section>

</template>
<script>
//import { rdDatepicker } from 'radon-ui'

import personalInfor from '../common/personalInforTitle.vue'


  export default {
    components: { 
        personalInfor,
        
          },
    mounted() {
        /*$('.calendar2').calendar({
                    'onSelect':function(range){
                        alert('你选择了'+range[0]['year']+'-'+range[0]['month']+'-'+range[0]['day']);
                    }
                });*/
       
    },
    data () {
      return {
         datePicker: {
                value: '',
                options: {
                    quickClose: true,
                    format: 'YYYY/MM/DD'
                }
            },
            fold:{key:false,isbutton: true},
            fold1:{key:false,isbutton: true},
            fold2:{key:false,isbutton: true},
          
      }
    },
    events: {
      timeUpdate (timeEntry) {
        console.log(timeEntry);
        this.totalTime += parseFloat(timeEntry.totalTime)
      },
      deleteTime (timeEntry) {
        this.totalTime -= parseFloat(timeEntry.totalTime)
      }
    },
    methods:{
        change: function(){
            this.a.b.c = 4

        }
    }
  }
</script>