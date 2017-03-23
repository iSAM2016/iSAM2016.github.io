/**
 * 
 */

var _products = [

 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test ","folderId":"25f31704",state: "success","itemNum":1545452151,"percentage":20},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test1 ","folderId":"25f31704",state: "false","itemNum":1545452151,"percentage":30},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test2 ","folderId":"25f31704",state: "fail","itemNum":1545452151,"percentage":40},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50},
 {"time":"2016-08-23 16:52:25","testProperty":" ","name":"test3 ","folderId":"25f31704",state: "done","itemNum":1545452151,"percentage":50}

]
 let datasAll = null,
      myuserId = null,
      myvm = null


export default  {

 /* getResource(fn, folderId){
     ajaxGetReource(fn, folderId)
    
  },*/

  getResource(fn,vm,userId){
      myuserId = userId;
      myvm = vm;

      /***************************发布的时候改动****************************/
      //ajaxGetReource(myvm)
      setTimeout( ()=>fn(  _products ) ,100)
  }
}

const  ajaxGetReource  = ( myvm ) =>{
    
      myvm.$http.get('./FolderAction!GetFolderCotent?curFolderId='+123)
          .then(function(ret) {
               datasAll = JSON.parse(ret.data).files.concat(JSON.parse(ret.data).childFolders);
                 setTimeout( ()=>fn(  datasAll ) ,100)
          })
          .then(function(err) {
           
          })
  }