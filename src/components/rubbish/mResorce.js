import {
  RECEIVE_RU_DATAS,
  SAVE_USREID,//用户ID
  ADD_CHOSEFILE ,//添加单个文件
  ADD_CHOSEALLFILE,// 添加全部文件
  DEL_CHOSE,//删除文件
  NEW_NAME,//命名文件
  NEW_FOLDER,//新增文件件
  NEW_NAMES,
  NEW_NAMES_ISSHOW_ICON//当重命名的时，关闭其他的ＩＣＯＮ 
} from './ActionTypes'

 



const state = {
  ruDatas: [],
 addDatas:[], //被选中的文件
  userId:[], //查询文件的开始id号就是userId
  folderId: null,
  isChoseAllfile: null, //是否是新建文件夹
  reNameItem: null,// 重命名文件
  newNameIsShowIcon : null //当重
}

// mutations
const mutations = {
  //获取所有的资源数据
  [RECEIVE_RU_DATAS] ( state, datas, userId,name) {
     state.ruDatas.splice(0,state.ruDatas.length)
     datas.forEach(item=>{
        state.ruDatas.push( item )
     })
  },
  
  [ADD_CHOSEFILE ] (state, data) {
    const item = state.addDatas.find(p=> p === data)
    if(!item){
      state.addDatas.push( data )

    } else {
        state.addDatas.splice( state.addDatas.findIndex(p=> p === data),1 )
          
    }
  },
  
  //从个体发起的命名文件
  [NEW_NAME] (state, data, newName) {
     state.ruDatas.forEach(( item,index )=>{
      if( item === data ){
          item.name = newName
      }
     })
  },

  //从标题发起的命名文件
  [NEW_NAMES] (state) {
          if(state.addDatas.length ===1){
            console.log(state.addDatas)
            state.reNameItem = state.addDatas[0] 
          }
  },


  //当重命名的时，关闭其他的ＩＣＯ
  [NEW_NAMES_ISSHOW_ICON] (state,key) {
    console.log(key)
         if( key ){
             state.newNameIsShowIcon = true
           }else{
            state.newNameIsShowIcon = false
         }
  },
  

  //新建文件夹
  [NEW_FOLDER] (state) {
      let newObj = {},
          index = 0,
          tody = new Date();
          //newObj.folderId= this.userId 
          /*应该去USERID*/
          newObj.folderId = "3593da5d-ba23-47c6-bfa4-4523238c9a1ab";
          newObj.name= "新建文件夹";
          newObj.createTime = tody.getFullYear()+ "-"+ (tody.getMonth()+1) +"-" + tody.getDate()+  "     "  +tody.getHours() +":"+ tody.getMinutes() + ":"+ tody.getSeconds()
          newObj.iscreatNewfolder = true //新建文件夹的标识
          state.ruDatas.unshift(newObj)
  },

  //删除文件
  [DEL_CHOSE] (state, data) {
    if( data ){//单文件删除
         state.ruDatas.forEach(( item,index )=>{
          if( item === data )
          state.ruDatas.splice( index,1 )
         })
      }else{
        //多件删除
        state.addDatas.forEach(( item,index )=>{
          if( state.ruDatas.includes(item) ){
             state.ruDatas.splice( state.ruDatas.findIndex(p=> p === item),1 )
          }else{

          }
      })
    }
  },

  //添加全部文件
  [ADD_CHOSEALLFILE](state,chosekey) {
    if( !chosekey ){
          state.isChoseAllfile = true
          state.ruDatas.forEach(p=>{
                   if(!state.addDatas.includes(p)){
                    state.addDatas.push(p)
               }
           })
      }else{
        state.isChoseAllfile = false
             state.addDatas.splice(0,state.addDatas.length)
          }
  },
  
}

export default {
  state,
  mutations
}
