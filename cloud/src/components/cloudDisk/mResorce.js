import {
  RECEIVE_DATAS,
  SAVE_USREID,//用户ID
  ADD_CHOSEFILE ,//添加单个文件
  ADD_CHOSEALLFILE,// 添加全部文件
  DEL_CHOSE,//删除单个文件
  DEL_ALL_CHOSE,//删除选中的全部文件
  NEW_NAME,//命名文件
  NEW_FOLDER,//新增文件件
  NEW_NAMES,
} from './ActionTypes'

const state = {
  datas: [],
  addDatas:[], //被选中的文件
  userId:[], //查询文件的开始id号就是userId
  folderId: null,
  isChoseAllfile: null, //
  reNameItem: null,// 重命名文件
  isnewFolder:false //当true 通知选择栏 不得单选文件/不得在新建文件夹
}

// mutations
const mutations = {
  //获取所有的资源数据
  [RECEIVE_DATAS] ( state, datas, userId,name) {
    let  count = state.userId.some((value ) =>  value.userId === userId)
    if( !name || name == "首页" ){
        name = "首页"
    }

    if( !count ){
      state.userId.push({
        name: name,
        userId: userId 
      })
    }else{
      state.userId.splice( state.userId.findIndex(p=> p.userId === userId) + 1,state.userId.length )
    }

    state.datas.splice(0,state.datas.length)
    datas.forEach(item=>{
      state.datas.push( item )
    })
  },

  //单选文件
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
    state.isnewFolder = false
      state.datas.forEach(( item,index )=>{
        if( item === data ){
          item.name = newName
          item.iscreatNewfolder = false 
        }
      })
  },

  //从标题发起的命名文件
  [NEW_NAMES] (state) {
    if(state.addDatas.length ===1){
      state.reNameItem = state.addDatas[0]
    }
  },


  //新建文件夹
  [NEW_FOLDER] (state) {
    state.isnewFolder = true
    let newObj = {},
        index = 0,
        tody = new Date();
        //newObj.folderId= this.userId 
        /*应该去USERID*/
        newObj.folderId = "3593da5d-ba23-47c6-bfa4-4523238c9a1ab";
        newObj.name= "新建文件夹";
        newObj.createTime = tody.getFullYear()+ "-"+ (tody.getMonth()+1) +"-" + tody.getDate()+  "     "  +tody.getHours() +":"+ tody.getMinutes() + ":"+ tody.getSeconds()
        newObj.iscreatNewfolder = true //新建文件夹的标识
        state.datas.unshift(newObj)
  },

  //删除文件
  [DEL_CHOSE] (state, data) {
    state.datas.forEach(( item,index )=>{
      if( item === data ) state.datas.splice( index,1 )
    })
  },

  //删除多件选中的文件
  [DEL_ALL_CHOSE](state){
    state.addDatas.forEach(( item,index )=>{
      if( state.datas.includes(item) ){
        state.datas.splice( state.datas.findIndex(p=> p === item),1 )
      }
    })
    //清空选中的文件
    state.addDatas.length = 0
  },

  //添加全部文件
  [ADD_CHOSEALLFILE](state,chosekey) {
    if( !chosekey ){
      state.isChoseAllfile = false
      state.isChoseAllfile = true
      state.datas.forEach(p=>{
        if(!state.addDatas.includes(p)){
          state.addDatas.push(p)
        }
      })
    }else{
      state.isChoseAllfile = true
      state.isChoseAllfile = false
      state.addDatas.splice(0,state.addDatas.length)
    }
  },
}

export default {
  state,
  mutations
}
