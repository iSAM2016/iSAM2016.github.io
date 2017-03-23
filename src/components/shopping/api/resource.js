/**
 * 
 */

var _products = [
 {"fileId":"6300f737","createTime":"2016-08-22 15:04:18","testProperty":"test","name":"name","money":23},
 {"fileId":"6300f737","createTime":"2016-08-22 15:04:18","testProperty":"test1","name":"name","money":2},
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