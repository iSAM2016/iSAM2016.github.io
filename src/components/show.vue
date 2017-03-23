<style  lang = "sass" >

.main-nav {
  float: right;
  margin-right: 5%;
  width: 44px;
  height: 100%;
  background:  no-repeat center center;
  cursor: pointer;
}
.main-nav ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-transform: translateY(-100%);
  -moz-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  -o-transform: translateY(-100%);
  transform: translateY(-100%);
}
.main-nav ul.is-visible {
  -webkit-transform: translateY(50px);
  -moz-transform: translateY(50px);
  -ms-transform: translateY(50px);
  -o-transform: translateY(50px);
  transform: translateY(50px);
}
.main-nav a {
  display: block;
  height: 50px;
  line-height: 50px;
  padding-left: 5%;
  background: #292a34;
  border-top: 1px solid #3b3d4b;
  color: #FFF;
}
@media only screen and (min-width: 768px) {
  .main-nav {
    width: auto;
    height: auto;
    background: none;
    cursor: auto;
  }
  .main-nav ul {
    position: static;
    width: auto;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    line-height: 80px;
  }
  .main-nav ul.is-visible {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  .main-nav li {
    display: inline-block;
    margin-left: 1em;
  }
  .main-nav li:nth-last-child(2) {
    margin-left: 2em;
  }
  .main-nav a {
    display: inline-block;
    height: auto;
    line-height: normal;
    background: transparent;
  }
  .main-nav a.cd-signin, .main-nav a.cd-signup {
    padding: .6em 1em;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 50em;
  }
  .main-nav a.cd-signup {
    background: #2f889a;
    border: none;
  }
}

header #topNavbar{
  width: 100%;
  padding: 0 20rem;
  position: fixed;
  top:0;
  z-index: 100;   
}
@media only screen and (max-width: 1200px) {
  
  header #topNavbar{
  width: 100%;
  padding: 0 ;
  position: fixed;
  top:0;
  z-index: 100;   
}
  

}

header .navbar-brand span{
  display: inline-block;
  height: 32px;
  width:32px;
  background: url(../img/icon.png) no-repeat center center;
  background-size: cover;
  line-height: 1.7;
  vertical-align: middle;
  color: #333;
  text-indent: 44px;


}


.ad{
  position: relative;
  top: 0;
  height:40rem;
  background-repeat: repeat;
    background-position: center;
    text-align: left;
  background-image:url(../img/backgrounds/hexagons.png),linear-gradient(30deg,#2276ad,#6ec654);
  background-color: #2276ad;
}
@media only screen and (max-width: 768px) {
 .ad{
  position: relative;
  top: 0;
  height:23rem;
  background-repeat: repeat;
    background-position: center;
    text-align: left;
  background-image:url(../img/backgrounds/hexagons.png),linear-gradient(30deg,#2276ad,#6ec654);
  background-color: #2276ad;
}

 }

 fieldset{
  border: 1px solid white;
  padding: 1.75rem;
}
 .carousel-pic{ 
  height: 100%;
  width:60%;
  margin: 0 auto;
  padding-top: 1rem;
    background: url(../img/carousel-1.png) no-repeat  center center;
    background-size:contain; 
 }
 .btn-success{
  width: 174px;
  text-align: center;
  vertical-align: middle;
}


/*介绍说明*/
.introduce{
  width: 100%;
  height: auto;
  padding-top:4rem;
  padding-bottom: 8rem;
  text-align: center;
  background-color: #f8f8f8;

}

.introduce h2 {
  font-family: "黑体";
  line-height: 1.5;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 4rem;
}


.introduce .pics-icon{  
   font-size: 0;
   padding: 0

}


.introduce .pics-icon  span{
  display: inline-block;
  width: 50%;
  height: 11rem;
  font-size: 16px;
  color: white;
  margin-top: 1rem; 
  text-align: center;
   -moz-transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in; 

}
@media only screen and (min-width: 768px) {
  
  
}
 @media only screen and (min-width: 992px) and (max-width: 1200px) {
  .introduce .pics-icon  span{
  display: inline-block;
  width: 64%;
  height: 11rem;
  font-size: 16px;
  color: white;
  text-align: center;
   -moz-transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in; 

}
 }
 

.introduce .pics-icon  span+span{
  
  
}
.introduce .pics-icon  span:hover{
  -webkit-transform:scale(1.1);
  -moz-transform:scale(1.1)
  
}


.introduce .pics-icon  .pics-icon-first{

  background-color: #8fbeb8
}
.introduce .pics-icon  .pics-icon-second{
  background-color: #79b6f0
}
.introduce .pics-icon  .pics-icon-three{
  background-color: #b8bfaf
}
.introduce .pics-icon  .pics-icon-four{
  background-color: #98c87d
}

.introduce .pics-icon  .img-block{
  height:100%;
  width: 100%;
  text-align: center;
  
}
.introduce .pics-icon  .pics-icon-first .img-block{
 
  background: url(../img/backgrounds/hr_process.png) no-repeat center center

}

.introduce .pics-icon  .pics-icon-second .img-block{
 
  background: url(../img/backgrounds/customizable_feature.png) no-repeat center center;
  background-size:5rem 5rem;
}
.introduce .pics-icon  .pics-icon-three .img-block{
 
  background: url(../img/backgrounds/medium_enterprices.png) no-repeat center center;
   background-size:5rem 5rem;
}
.introduce .pics-icon  .pics-icon-four .img-block{
 
  background: url(../img/backgrounds/feature_rich.png) no-repeat center center;
   background-size:5rem 5rem;
}



/* 跳转链接 */
.product-explain{
  padding: 4rem 0;
  font-family: "黑体";
    text-align: left;
    vertical-align: center;
     margin-bottom: 0;

}

.product-explain  ul{
  list-style: none;

}
.product-explain  ul li{
  line-height: 2

}

 .navbar-static-top{
  background-color:#222;
 }
  @media only screen and (max-width: 1226px) {
  .navbar-static-top{
    width: 1208px !important;
  background-color:#222;
 }
  
}
 .navbar-static-top .navbar-right{
  margin-right: 0
 }


</style>
<template>
  <div>
  <header>
      <nav class=" navbar navbar-default " role="navigation" id="topNavbar">
      <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" 
             data-target="#example-navbar-collapse">
            <span class="sr-only">切换导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <span>SmartCloud</span>
          </a>
      </div>
      <div class="collapse navbar-collapse" id="example-navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li class="active">
            <a href="#">首页</a>
          </li>
          <li class="main-navs">
             <router-link   v-if = "isLogin" to="/index">
                  平台
              </router-link>
          </li>
          <li class="main-navs " v-if = "isLogin">
            <a @click="logout">
                   退出
              </a>
          </li>
          <li class="main-navs " v-else>
            <router-link to="/login">
                  登录
              </router-link>
          </li> 
          <li class="main-navs"  v-if="!isLogin">
            <a href="#0" class="cd-signup">注册</a>
          </li>
                 
          <li>
            <a href="#0" class="">关于我们</a>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              详细信息 <b class="caret"></b>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="#">介绍</a>
              </li>

              <li class="divider"></li>
              <li>
                <a href="#">介绍</a>
              </li>
              <li class="divider"></li>

            </ul>
          </li>
        </ul>
      </div>
    </nav>

  </header>
  <!-- 轮播图 -->
  <section class="ad">
    <div class="carousel-pic"></div>
  </section>


<section class="introduce">
    <h2>功能简介</h2>
    <div class="container pics-icon">
        <div class="col-md-3 col-sm-6">
          <span class="pics-icon-first">
            <div  class="img-block"></div>
          </span>
        </div>
        <div class="col-md-3 col-sm-6">
        <span class="pics-icon-second">
          <div  class="img-block"></div>
        </span>
    </div>
    <div class="col-md-3 col-sm-6">
        <span class="pics-icon-three">
          <div  class="img-block"></div>
      </span>
    </div>
    <div class="col-md-3 col-sm-6">
        <span class="pics-icon-four">
          <div  class="img-block"></div>
        </span>
    </div>
    </div>
</section>


<!-- 简介说明 -->
<section class="product-explain">
<div class="container">
    <div class="row ">
        <div class="col-md-4  col-sm-4 col-xs-4">
        <h3>产品</h3>
              <ul>
                <li>
                  <a href="">产品介绍</a>
                </li>
                <li>
                  <a href="">操作演示</a>
                </li>

              </ul>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-4">
        <h3>关于我们</h3>
            <ul>
              <li>
                <a href="">使用协议</a>
              </li>
              <li>
                <a href="">帮助中心</a>
              </li>
              <li>
                <a href="">问题反馈</a>
              </li>

            </ul>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-4">
            <h3>支持</h3>
              <ul>
                <li>
                  <a href="">服务中心</a>
                </li>
                <li>
                  <a href="">文档下载</a>
                </li>
                <li>
                  <a href="">常见问题</a>
                </li>

              </ul>
          </div>
    </div>
  </div>
</section>

<router-view></router-view>              
     
  </div> 
</template>
<script>
import 'bootstrap/dist/js/bootstrap.js'

import  auth from '../utils/auth.js'

  export default {
    components: { 
      
          },

    mounted() {
    },

    data () {
      return {
         isLogin : !!auth.loggedIn(), 
      }
    
    },
    events: {
      
    },
    methods:{
      logout(){
        auth.logout();
        setTimeout(window.location.reload(), 100)


      }
    }
  }

</script>