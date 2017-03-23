<style lang = "sass">


</style>
<template>
  <div class="alltools clearfix">
    <!-- tools -->
        <div class=" col-md-3 col-sm-6 col-xs-12  " v-for="data in datas">
          <div class="ol_contact_pr " id="ol_tc">
            <a href="#" class="contants">
              <img  alt="" v-lazy="data.url">
              <div class="ol_content_detail ">
                <span>{{ data.title }}</span>
                <address class="m-t-md beyond" title="data.Context" v-text="data.Context"></address>
              </div>

            </a>
             <div>
                  <a class="btn btn-outline btn-default " href="" v-text="data.classification"></a>
              </div>
           
          </div>
        </div>
  </div>

</template>
<script>
 
import  { gettool } from  '../actions.js'
 export default {
     vuex: {
        getters: {
          datas: ({ mTools })=> mTools.datas,
        },

        actions: {
          gettool, //获取元数据
        }
    },
    created() {
        this.gettool()//主动触发需要提供vm
    },
    components: { 
          },
     data () {
      return {
        
      }
    },
   
    
    props:[
          
    ],
    methods: {
    },

    watch:{
    },

}
  
</script>