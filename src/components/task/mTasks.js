import {
  RECEIVE_DATAS,

  DEL_CHOSE,//删除文件
  
} from './ActionTypes'



const state = {
  datas: [],
  addDatas:[], //被选中的文件
 
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
  }
}
 
export default {
  state,
  mutations
}
