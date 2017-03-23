<style lang = "sass">
.personal-info-show{
    margin: 0 1rem 0 180px;
    line-height: 3.5;
    background-color:#fff;
    margin-top:1rem;
}

.personal-info-world-left{
    float: left;
    width:80%;
}
.personal-info-world-right{
    float: left;
    height:100%;
    width: 19%;

 
}

.personal-info-show .title {
    margin: 0;
    padding: 0;

}

.column-ch-inf-item {
   display:inline-block;
   *display:inline; 
   *zoom:1;
    
     a{
        list-style: none;
        text-decoration: none;
     
     } 

}

.column-ch-inf-item:nth-child(2) {
    float: right;
    color:#337ab7;
}

.pesonal-info-icon{
   float: left;
   padding:2rem;
}

 .pesonal-info-icon img{
    height: 16rem;
    width: 16rem;
  
 }


.pesonal-info-world {
    float: left;
    padding:2rem;
    width: calc( 100% - 20rem );

}
.pesonal-info-world .panel-heading {
    background-color: #fff;
   }



 
</style>
<template>
 <div>
    <!-- 头部 -->
    <section  class="main-contant">

        <personal-infor></personal-infor>
    </section>
    <!-- 个人信息展示 -->
    <section class="personal-info-show clearfix">
        <div class="pesonal-info-icon">
            <img src="../../img/icon-me.jpg" alt="pic" ></div>
        <div class="pesonal-info-world">

            <div class="pesonal-info-world-content clearfix">
                <div class="personal-info-world-left">
                    <div class="row">
                        <div class=" col-md-4 col-sm-4 col-xs-4 name">
                            姓名：
                            <span v-text="name"></span>
                        </div>
                        <div class=" col-md-4 col-sm-4 col-xs-4 ">
                            邮箱：
                            <span v-text=""></span>
                        </div>
                        <div class=" col-md-4 col-sm-4 col-xs-4 ">
                            性别：
                            <span v-text="sex"></span>
                        </div>

                    </div>

                    <div class="row">
                        <div class=" col-md-4 col-sm-4 col-xs-4 name">
                            工作单位：
                            <span v-text="company"></span>
                        </div>
                        <div class=" col-md-4 col-sm-4 col-xs-4 ">
                            手机：
                            <span v-text="mobile"></span>
                        </div>
                        <div class=" col-md-4 col-sm-4 col-xs-4 ">
                            出生：
                            <span v-text="birthday"></span>
                        </div>

                    </div>

                    <div class="row">
                        <div class=" col-md-4 col-sm-4 col-xs-4 name">
                            职位：
                            <span v-text="position"></span>
                        </div>
                        <div class=" col-md-4 col-sm-4 col-xs-4 ">
                            手机：
                            <span v-text="mobile"></span>
                        </div>
                        <div class=" col-md-4 col-sm-4 col-xs-4 ">
                            学历：
                            <span v-text="eduvation"></span>
                        </div>

                    </div>
                </div>
                <div class="personal-info-world-right">
                    <div class="column-change-infor">
                        <ul class="title">
                            <li class="column-ch-inf-item">
                                资料完整度
                            </li>
                            <li class="column-ch-inf-item">
                                
                                 <router-link to="/personalchange">
                                        <a href="javascript:">修改编辑</a>
                                 </router-link>
                            </li>
                        </ul>

                       <el-progress type="circle" :percentage="25"></el-progress>

                    </div>
                </div>
            </div>

            <!-- 折叠框 -->
            <div class="panel-group" id="accordion">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" 
          href="#collapseOne">更多信息</a>
                        </h4>
                    </div>

                    <div id="collapseOne" class="panel-collapse collapse " style="height:0px">
                        <div class="panel-body">
                            <form role="form">
                                <div class="form-group">
                                    <label for="name">个人经历</label>
                                     <div v-text="Context"></div>
                                   <!--  <textarea class="form-control" rows="3"  disabled v-modle="Context"></textarea> -->
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </section>
</div>

</template>
<script>

import FersonalInfor from '../common/personalInforTitle.vue'
  export default {
    components: { 
        personalInfor: FersonalInfor,
        
          },
    mounted() {
       /* var self  =  this;
    $.ajax({
            url: 'http://personal/infor',
        }).done(function(info, status, xhr){
            const  data = JSON.parse( info )
            console.log(data)
            self.datas = data
            self.name = data.name
            self.Context = data.Context
            self.createTime =data.createTime
            self.email  =data.email
            self.sex =data.sex
            self.company =data.company
            self.mobile =data.mobile
            self.birthday =data.birthday
            self.position =data.position
            self.eduvation =data.eduvation
            self.prcent =data.prcent


        
           
        })
*/
        
    },
    data () {
      return {
        datas: null,
        name: null,
        "Context": null,
        "createTime": null,
        "email ": null,
        "sex": null,
        "company": null,
        "mobile": null,
        "birthday": null,
        "position": null,
        "eduvation": null,
        "prcent": null,
      }
    },
    events: {
    
    }
  }
</script>