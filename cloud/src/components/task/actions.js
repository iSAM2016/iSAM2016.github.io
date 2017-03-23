import resource from './api/resource.js' //resource元数据
import * as types from './ActionTypes.js'//绞带

//获取元数据
export const getResource  = ({ dispatch },vm, userId,name) =>{
     resource.getResource( (datas)=>{
         dispatch(types.RECEIVE_DATAS, datas, userId,name)
     }, vm, userId )
}


//删除单个数据
export const delData = ({ dispatch }, data) => {
    dispatch(types.DEL_CHOSE,data)
}


