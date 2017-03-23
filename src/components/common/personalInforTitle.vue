<style  lang = "sass" >
.nav-tabs{
    background-color: #fff
    
}

.nav-tabs span{
    display: inline-block;
    margin: 0 1rem
}

.nav-tabs >li{
  float: right !important 
}      

</style>

<template>
    <ul class="nav nav-tabs clearfix" id="presonalBox">
            <router-link to="/shopping" tag="li">
              <span href="#"  >个人中心</span>
             </router-link>  
       
            <router-link to="/shopping" tag="li">
                <span>购物车</span>
            </router-link>
        
        <li class="dropdown">
            <span class="dropdown-toggle" data-toggle="dropdown" href="#">
                信息
                <span class="caret"></span>
            </span>
            <ul class="dropdown-menu">

                <li>
                    <span href="#">会员信息</span>
                </li>

               
                    <router-link to="/personalshow" tag="li">
                      
                           <span>个人信息</span>
                       
                    </router-link>

                
               
                    <router-link to="/personalchange" tag="li">
                    
                           <span>编辑资料</span>
                    
                    </router-link>

                
               
                     <router-link to="/changeword" tag="li">
                           <span>修改密码</span>
                    </router-link>
                
                <li @click = 'logout'>
                    <a href="#">退出</a>
                </li>
            </ul>
        </li>
        <li class="">
            <span href="#">通知</span>
        </li>
             <router-link to="/" tag="li">
              <span href="#"  >首页</span>
             </router-link>  
        

    </ul>

</template>
<script>
import  auth from '../../utils/auth.js'
    module.exports = {
        data: function() {
            return {

            }
        },
       
        beforeDestroy: function() {

        },
        methods: {
               logout(){
                  auth.logout();
                  this.$router.push({ path: '/'});
               }
        },
      
    }
</script>