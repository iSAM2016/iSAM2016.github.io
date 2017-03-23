var MyProgress = (function(box,obj ){
  //obj ===uploader
    function MyProgress( box,obj ){
      this.obj = obj;
      this.box = box;
      this.filesNumArr = [];
      this.showProgess()

    }


    MyProgress.prototype = {
      //开始上传文件 触发uploader.upload()
      begin: function(){
          let _myself = this;
              _myself.obj.upload();
          
              //$("#myfolderId").val($.getLocalStorage ('myfolderId',1000000))

              //表格信息
          let formData = $('#propertyForm').serializeJson(),
              files = _myself.obj.getFiles(),
              fileIds=[];
              // close tag 
              $('.cd-user-modal').click();
              for(var i =0;i<files.length;i++){
                  fileIds.push(files[i].fileId);
              }

              formData.fileIds = fileIds;
                
              $.post("./FileInFolderAction!SubmitFiles",formData,function(result){
                $( '.ready-to-show').empty()
                _myself.obj.getFiles().length = 0;
              });

              // 触发相应事件
              //点击上传按钮之后
              _myself.obj.on( "uploadStart", function(file){
              
              });

              //进度条
               _myself.obj.on("uploadProgress",function(file,percentage){
                var myprogress = $("#"+file.id+'progress').find('.progress-bar'),
                    n = percentage *100;
                    myprogress.css("width", n+'%')  
              });

              _myself.obj.on( "uploadSuccess", function( file ) {
                $("#"+file.id+'progress').find('.progress-all-buttons').empty();
                $("#"+file.id+'progress').find('.progress-all-buttons').text('上传成功');
              });
             
              //出栈
              _myself.obj.on("fileDequeued",function(file){
                if(file.uploadState == 'uploaded'){
                console.log('文件已上传')
                
                }else{
                console.log('文件已上传')
               }
              });

              /**上传完成**/
               _myself.obj.on("uploadFinished",function(){});
   
              /**上出现错误**/
               _myself.obj.on( "uploadError", function( file ) {
                   $( "#"+file.id ).find("p").text("上传出错");
                   uploader.cancelFile(file);
                   uploader.removeFile(file,true);
                   uploader.reset();
               });
        },

            /*** 创建进度****/
            showProgess:function(){
              var _myself = this;

              //进度条数量
              var files = _myself.obj.getFiles(),
                 str = "";

             for( var i = 0; i < files.length; i++ ){
              if(files[i].uploadState == 'deleted'){

              }else{
                str +='<div class =" progress-all-box" id="'+files[i].id+'progress" for="786">'+
              '<div class="progress progress-striped active myprogress">'+
                '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"  for="7867" >'+
                  '<span class="sr-only">0% 完成</span>'+
                '</div>'+
              '</div>'+
              '<div class="all-buttons main-navs progress-all-buttons " >'+
                '<span>"'+files[i].name+'"</span>'+
                '<span>3kb</span>'+
                '<span>'+
                  '<i class="icon-play-circle">暂停</i>'+
                '</span>'+
                '<span>'+
                  '<i class="icon-trash"></i>'+
                '</span>'+
              '</div>'+
            '</div>'
              }
          }
             
             _myself.box.find(".panel-body").append(str) 
            _myself.begin()
        },
      
     }

  
  return MyProgress
})()

$.fn.MyProgress = function( option ){
  var _this = this;
   return this.each(function(){
     if( !this.progress  ) {
      new MyProgress( _this, option )
     }
   })
}


  

  