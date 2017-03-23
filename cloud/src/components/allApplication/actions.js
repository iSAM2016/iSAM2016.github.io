import gettoolfn from './api/tools.js' //tools元数据
import * as types from './ActionTypes.js'//绞带



//getalltool

export const getalltool  = ({ dispatch },vm,myclass) =>{

  gettoolfn.getalltools( (datas, num)=>{
       dispatch(types.MGET_ALLTOOLS, datas, num)
     }, vm,myclass )

}
