<style lang= 'sass'>

 #menu{
   ul,li{padding: 0}
 } 

.menu_slid{
   position: absolute; 
   left: 0;
   top: 0;
   width:180px;
   height: 100% ;
   margin-bottom: 0;
   z-index: 1;
   text-align:left;
   font-size:14px;
   background-color:#1f2d3d;
   box-shadow: 6px 0px 5px #ccc;
   -wbkkit-box-shadow: 6px 0px 5px #ccc;
}
 
.menu_slid_item {
    width:100%;
    line-height:3.5;
    margin:0 auto;
    
    a{
       width:100%;
       height: 100%;
       display:inline-block;
       padding-left:10px;
       text-decoration:none;
       color:white;;
        &:hover,
        &:active{
            opacity:0.5; filer:alpha(opacity=50);
            color: #F9FAFC;
            text-decoration: none;
            text-decoration: none;
            outline: none;
            cursor: pointer;
            -webkit-transition: color .3s ease;
            transition: color .3s ease;
        }

    }

    .active{
      color: #2db7f5;
      text-decoration:none;
      background:rgba(125,125,125,.2);
    }

}

.menu_slid_item_icon {
   color:white;
   margin-right:1rem;

}

.main-resource,.main-contant{
     margin: 0 1rem 0 190px;; 
     line-height: 3.5;
     background-color:#fff;;
     -webkit-transition: all 0.5s;
     transition: all 0.5s;
}



@media (max-width:768px) { 
    .menu_slid{
        width: 0px;
        overflow: hidden;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
    .main-resource{
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        margin: 0 1em 0 0;
        line-height: 3.5
    }

    .main-contant{
      -webkit-transition: all 0.5s;
        transition: all 0.5s;
        margin: 0 1em 0 0;
        line-height: 3.5
    } 

 }
@media (min-width:768px) { 

 }

/* 中型设备（台式电脑，992px 起） */
@media (min-width: 992px) { 


}

/* 大型设备（大台式电脑，1200px 起） */
@media (min-width: 1200px) { 
  
 }
 

</style>
<template>
  <section id="menu">
    <div>
      <nav class="menu_slid" role="navigation" >

        <div>
          <ul class=" ">
            <li class=" menu_slid_item" >
              <router-link to="/index" active-class="active"> <i class="icon-file-alt menu_slid_item_icon"></i>
                <span>目录</span>

              </router-link>
            </li>
            <li class=" menu_slid_item" >
              <router-link to="/rubbishbox"  active-class="active"> <i class="icon-trash  menu_slid_item_icon"></i>
                <span>回收站</span>
              </router-link>
            </li>
            <li class=" menu_slid_item" >
              <router-link to="/personalshow" active-class="active" >
                <i class="icon-tasks  menu_slid_item_icon"></i>
                <span>我的数据</span>
              </router-link>
            </li>
            <li class=" menu_slid_item" >
              <router-link to="/application"  active-class="active">
                <i class="icon-tasks  menu_slid_item_icon"></i>
                <span>我的软件</span>
              </router-link>
            </li>
            <li class=" menu_slid_item">
              <router-link to="/allapplication"  active-class="active"  >
                <i class="icon-tasks  menu_slid_item_icon"></i>
                <span>全部软件</span>
              </router-link>
            </li>
            <li class=" menu_slid_item" >
              <router-link to="/myproject"  active-class="active">
                <i class="icon-tasks  menu_slid_item_icon"></i>
                <span>我的项目</span>
              </router-link>
            </li>
            <li class=" menu_slid_item" >
              <router-link to="/task"  active-class="active">
                <i class="icon-tasks  menu_slid_item_icon"></i>
                <span>我的任务</span>
              </router-link>
            </li>

            <!-- <li class=" menu_slid_item" >
              <router-link to="/mydata"  active-class="active">
                <i class="icon-tasks menu_slid_item_icon"></i>
                <span>数据</span>
              </router-link>
            </li> -->
            
            <li class=" menu_slid_item" >
              <router-link to="/dataStatistics"  active-class="active">
                <i class="icon-tasks  menu_slid_item_icon"></i>
                <span>汇总</span>
              </router-link>
            </li>

          </ul>
        </div>
      </nav>

    </div>
    
    <router-view></router-view>
  </section>

</template>
<script>

  export default {
    components: { 
          },

    ready() {
        console.log(this.$route.auth + "user")
    },

    data () {
      return {
        totalTime: 0,
      }
    },
    
    events: {
      
    }
  }
</script>