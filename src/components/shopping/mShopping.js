import {
  RECEIVE_DATAS,
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
  datas: [],
  addDatas:[], //被选中的文件
  userId:[], //查询文件的开始id号就是userId
  folderId: null,
  isChoseAllfile: null, //是否是新建文件夹
  reNameItem: null,// 重命名文件
  newNameIsShowIcon : null //当重命名的时，关闭其他的ＩＣＯＮ
}

// mutations
const mutations = {
  //获取所有的资源数据
  [RECEIVE_DATAS] ( state, datas, userId,name) {

     state.datas.splice(0,state.datas.length)
     datas.forEach(item=>{
        state.datas.push( item )
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
 

  //删除文件
  [DEL_CHOSE] (state, data) {
    if( data ){//单文件删除
         state.datas.forEach(( item,index )=>{
          if( item === data )
          state.datas.splice( index,1 )
         })
      }else{
        //多件删除
        state.addDatas.forEach(( item,index )=>{
          if( state.datas.includes(item) ){
             state.datas.splice( state.datas.findIndex(p=> p === item),1 )
          }else{

          }
      })
    }
  },

  //添加全部文件
  [ADD_CHOSEALLFILE](state,chosekey) {
    if( !chosekey ){
          state.isChoseAllfile = true
          state.datas.forEach(p=>{
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
