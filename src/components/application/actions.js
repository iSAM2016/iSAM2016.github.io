import gettoolfn from './api/tools.js' //tools元数据
import * as types from './ActionTypes.js'//绞带



//获取tools
export const gettool  = ({ dispatch },vm) =>{
  gettoolfn.gettools( (datas)=>{
       dispatch(types.GET_TOOLS, datas,1)
     }, vm )

}


//searchtools
export const searchtools  = ({ dispatch },vm,keyworld) =>{
  gettoolfn.searchtools( (datas)=>{
       dispatch(types.SEARCH_TOOLS, datas)
     }, vm, keyworld )

}

//goTo
export const goTo  = ({ dispatch },vm,pagenum) =>{

  gettoolfn.gettools( (datas, num)=>{
       dispatch(types.GET_TOOLS, datas, num)
     }, vm,pagenum )

}


