import resource from './api/resource.js' //resource元数据
import * as types from './ActionTypes.js'//绞带

//获取元数据
export const getResource  = ({ dispatch },vm, userId,name) =>{
     resource.getResource( (datas)=>{
         dispatch(types.RECEIVE_DATAS, datas, userId,name)
     }, vm, userId )
}


//单选选中文件
export const chosefile = ({ dispatch }, data) => {
    dispatch(types.ADD_CHOSEFILE,data)
}

//全选文件
export const choseAllfile = ({ dispatch },chosekey ) => {
    dispatch(types.ADD_CHOSEALLFILE,chosekey)
}


//删除单个数据
export const delData = ({ dispatch }, data) => {
    dispatch(types.DEL_CHOSE,data)
}

//删除全部选中数据
export const delSelectAllData = ({ dispatch }, data) => {
    dispatch(types.DEL_ALL_CHOSE,data)
}



//命名文件
export const newName = ({ dispatch }, data,name) => {
    dispatch(types.NEW_NAME,data, name)
}



//命名文件(从标题发起)
export const newNames = ({ dispatch }, data,name) => {
    dispatch(types.NEW_NAMES)
}


//命名文件(从标题发起)
export const isNewNameShowIconn = ({ dispatch },key) => {
    dispatch(types.NEW_NAMES_ISSHOW_ICON,key)
}



//新增文件夹

export const createNewfolder = ({ dispatch }) => {
    dispatch(types.NEW_FOLDER)
}

