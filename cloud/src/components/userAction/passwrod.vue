<style lang = "sass">
    .btnl{
        margin-left: 15px;
    }
</style>

<template>
 <!-- 学历说明 -->
        <div class="panel panel-default peson-relation "  >
            <div class="panel-heading">
                <h3 class="panel-title"><b>更改密码</b></h3>
             
                </h3>
            </div>
            <div class="panel-body">
                <div class="cotainer change">
                    
                        <div class=" col-md-12 col-sm-12 col-xs-12">
                            <p class="peson-relation-datalist">
                                <span class="">旧密码</span>
                                <input type="text" class="form-control" 
                    placeholder="请输入名字"></p>
                        </div>
                        <div class=" col-md-12 col-sm-12 col-xs-12">
                            <p class="peson-relation-datalist">
                                <span class="">新密码</span>
                                <input type="text" class="form-control" 
                    placeholder="请输入名字"></p>
                        </div>
                        <div class=" col-md-12 col-sm-12 col-xs-12">
                            <p class="peson-relation-datalist">
                                <span class="">确认新密码</span>
                                <input type="text" class="form-control" 
                    placeholder="请输入名字"></p>
                        </div>

                    

                   

                 
                    <p class="onlyshow btnl">
                        

                        <button type="button" class="btn btn-default">保存</button>
                    </p>
                </div>

            </div>
        </div>
</template>
<script>



  export default {
    components: { 
       
          },
    ready() {
    
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