import Vue from "vue"
import './upload.js'
Vue.directive('startuploader', {
  twoWay: true,
  params: [],
  bind: function (el, binding, vnode) {
  
    var self = this
    $(el).click(()=>{
          jQuery(document).ready(function($){
            let $form_modal = $('.cd-user-modal'),
              $form_login = $form_modal.find('#cd-login'),
              $form_signup = $form_modal.find('#cd-signup'),
              $form_forgot_password = $form_modal.find('#cd-reset-password'),
              $form_modal_tab = $('.cd-switcher'),
              $tab_login = $form_modal_tab.children('li').eq(0).children('a'),
              $tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
              $forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
              $back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a'),
              $main_nav = $('.main-navs'),
              $login = $main_nav.find( ".cd-signin" ),
              $registe = $main_nav.find( ".cd-signup" ),
              $userRegister = $form_modal.find(".user-register"),
              $userLogin = $form_modal.find(".user-login"),
              $list = $(".ready-to-show"),
              $filesUploadBox = $("#cd-login"),
              $filesUploadInfoInputs = $filesUploadBox.find('input')



              let uploader ,
                  fileMd5='',
                  uploadId='';// 实例化   

            showupbox()
             function  showupbox(){
                $form_modal.addClass('is-visible'); 
                login_selected();


                uploader = WebUploader.create({ 
                      auto:false, //是否自动上传
                      pick: {
                          id: '#attach',
                          name:"file",  //这个地方 name 没什么用，虽然打开调试器，input的名字确实改过来了。但是提交到后台取不到文件。如果想自定义file的name属性，还是要和fileVal 配合使用。
                          label: '点击选择图片',
                          multiple:false            //默认为true，true表示可以多选文件，HTML5的属性
                      },
                      swf: '../webUploader/Uploader.swf',  //在这里必需要引入swf文件，webuploader初始化要用
                                                      
                      server: "./FileUploadAction",  
                      duplicate:false,//是否可重复选择同一文件
                      resize: false,
                      compress: null,//图片不压缩
                      chunked: true,  //分片处理
                      chunkSize: 5 * 1024 * 1024, //每片5M  
                      chunkRetry:false,//如果失败，则不重试
                      threads:1//上传并发数。允许同/上传并发数。允许同时最大上传进程数。
                  });  

                  // 选择文件
                  uploader.on( "fileQueued", function( file ) {
                    $list.append("<div class='row ready-to-upload' id='"+ file.id + "'>"+
                            "<div class=' col-md-5 col-sm-5 col-xs-5'>"+ file.name + "</div>"+ 
                            "<div class=' col-md-5 col-sm-5 col-xs-5  trash'>"+
                              "<p class=''>等待上传...</p>" +
                            "</div><div class=' col-md-2 col-sm-2 col-xs-2'><button class=\"cancle\">删除</button></div></div>"
                          );
                      
                          //取消文件上传
                          $(".cancle").on('click',function(){
                              let fileId = $(this).parents('.ready-to-upload').attr('id');
                              let files = uploader.getFiles();
                              let file;

                              for(let i=0;i<files.length;i++){
                                if(files[i].id == fileId){
                                  file = files[i];
                                  break;
                                }
                              }
                              file.uploadState = 'deleted';
                              uploader.cancelFile(file);
                              $('#'+fileId).remove()
                          });
                          
                          file.fileId = Guid.NewGuid().ToString();
                          file.fileInFolderId = Guid.NewGuid().ToString();  
                          uploader.option( 'formData', {
                            'fileId': file.fileId
                          });
                  });
                                    
                  //开始上传        
                  $('#submitFiles').click(function(){
                      var files = uploader.getFiles();
                      if( !files.length ) {
                        alert("您还没有选择文件")
                        return false
                      } else{
                      $('.cd-user-modal').click();
                      $(".fix-main-panel").css("bottom","0")
                      $(".fix-main-panel").MyProgress(uploader)
                      }
                    
                  });
    };

 

      //close modal
      $('.cd-user-modal').on('click', function(event){
        if( $(event.target).is($form_modal) || $(event.target).is('.cd-close-form')  && $(event.target).is('.cd-switcher') ) {
          $form_modal.removeClass('is-visible');
        } 
      });

      //back to login from the forgot-password form
      $back_to_login_link.on('click', function(event){
        event.preventDefault();
        login_selected();
      });

      function login_selected(){

        $form_login.addClass('is-selected');
        $form_signup.removeClass('is-selected');
        $form_login.show();///////////////////////////
        $userLogin.show();
        $form_signup.hide();///////////////////////
        $userRegister.hide();/////////////////////////////
        $form_forgot_password.removeClass('is-selected');
        $tab_login.addClass('selected');
        $tab_signup.removeClass('selected');
      }

      function signup_selected(){
        
        $form_login.removeClass('is-selected');
        $form_signup.addClass('is-selected');
        $form_signup.show();//////////
        $userRegister.show();
        $form_login.hide();///////////////////////
        $userLogin.hide();/////////////////////////////
        $form_forgot_password.removeClass('is-selected');
        $tab_login.removeClass('selected');
        $tab_signup.addClass('selected');
      }

      

      //REMOVE THIS - it's just to show error messages 
      $form_login.find('input[type="submit"]').on('click', function(event){
        event.preventDefault();
        var val = $("#signin-username").val()
        var passwordVal = $("#signin-password").val()
        
        if(  checkMobile( val ) || checkEmail( val ) ){
            $form_login.find('input[type="text"]').removeClass('has-error').next('span').removeClass('is-visible');
        } else {
          $form_login.find('input[type="text"]').addClass('has-error').next('span').addClass('is-visible');
        }

        if(  checkPassword( passwordVal )){
            $form_login.find('input[type="password"]').removeClass('has-error').siblings('span').removeClass('is-visible');
        } else {
          $form_login.find('input[type="password"]').addClass('has-error').siblings('span').addClass('is-visible');
        }
        
      });

    });
  })
     
},
  update: function (value) {
  },
  unbind: function () {
  }
})

