<style lang = "sass">

</style>
<template>
  <div class="alltools clearfix">

    <div id="myTabContent" class="tab-content">

      <!--  start -->
      <div class=" col-lg-4 col-md-6 col-sm-6 col-xs-12  " v-for="data in datas">

        <div class="ol_contact_pr ">
          <router-link :to="{ path: 'toolscontent', query: { id: 123 }}">
            <a  class="ol_content_detail clearfix">

              <div class=" col-lg-3 col-md-4 col-sm-12 col-xs-12  " >
                <img :src="data.url" alt=""></div>

              <div class="   col-lg-9 col-md-8 col-sm-12 col-xs-12  ">
                <span>{{ data.title }}</span>
                <address class="m-t-md beyond" title="data.Context" v-text="data.Context"></address>
              </div>

            </a>
          </router-link>
        </div>
      </div>
      <!-- end --> </div>

  </div>

</template>
<script>
 
import  { getalltool } from  '../actions.js'

  export default {
     vuex: {
      getters: {
        datas: ({ mMydata })=> mMydata.datas,
    
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
        
      }
    },
   
    
    props:[
          
    ],

    methods: {
     go(){
      this.$route.router.go({path:'details' })
     }
     

    },

}
  
</script>