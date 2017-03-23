<template>
  <section class="fix-main-panel" v-show="key">

    <div class="panel panel-default">
      <div class="panel-heading clearfix">
        <span>上传进度</span>
       <i class="icon-minus" id="panelHeadingClose" @click="panelHeadingClose" ></i>
       <i class="icon-check-empty" id="panelHeadingOpen" @click="panelHeadingOpen"></i>
      </div>
      <div class="panel-body">
        <!-- <div class =" progress-all-box">
          <div class="progress progress-striped active myprogress">
            <div class="progress-bar progress-bar-success" role="progressbar" 
                aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" 
                style="width: 40%;">
              <span class="sr-only">40% 完成</span>
            </div>
          </div>
        
          <div class="all-buttons main-navs progress-all-buttons " >
            <span>文件名</span>
            <span>3kb</span>
            <span> <i class="icon-play-circle"></i>
            </span>
            <span> <i class="icon-trash"></i>
            </span>
        
          </div>
        </div> -->

      </div>
    </div>

  </section>
 
</template>

<script type="text/ecmascript-6" lang="babel">
  import Vue from 'vue'
  var eventHub = new Vue()

  var CONFIRM_TEXT = '确定';
  var CANCEL_TEXT = '取消';


  export default {
    mixins: [  ],

    props: ['mymsg'],

    computed: {
    
  },

    methods: {
     panelHeadingClose: function(){
       $(".fix-main-panel").css("bottom","0")
     },
     panelHeadingOpen: function(){
        $(".fix-main-panel").css("bottom","-329px")
     },
     changekey: function(key){
        this.key = key
      }
    },

    watch: {
      inputValue() {
        if (this.$type === 'prompt') {
          this.validate();
        }
      },

      
    },

    data() {
      return {
        key: false
       
      };
    },
    events: {
      /*changekey: function(key){
        this.key = key
      }*/
    },
    created: function () {
      eventHub.$on('changekey', this.changekey)
     
  },

  }
</script>
<style>

  
</style>