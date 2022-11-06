import axios from "axios"
import { loading } from './index.js'
  
  export const getComentsonPost=()=>dispatch=>{
    dispatch(loading())
    return axios.get(`/coments/?tipo=post`)
    .then((d)=> dispatch({ type:"GET_COMENT_ON_pOST", payload:d.data }))
    .catch((e)=> console.log(e))
}
  export function createComentsonPost(payload){
    try {
      return async function (dispatch){
        
        const response = await axios.post("/posts",payload,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        return dispatch({ type:"CREATE_COMENT_ON_POST", payload: response.data })    
      }
    } catch (e) {
      console.log(e)
    }}     

    export const getComentsonComent=()=>dispatch=>{
      dispatch(loading())
      return axios.get(`/coments/?tipo=coment`)
      .then((d)=> dispatch({ type:"GET_COMENT_ON_COMENTS", payload:d.data }))
      .catch((e)=> console.log(e))
  }

  export const deleteComent=(id)=>dispatch=>{
    dispatch(loading())
    return axios.delete(`/coments/${id}`)
    .then((d)=> dispatch({ type:"DELETE_COMENT", payload:d.data }))
    .catch((e)=> console.log(e))
}

export const EditComent=(id,newData)=>dispatch=>{
  dispatch(loading())
  return axios.patch(`/coments/${id}`,newData)
  .then((d)=> dispatch({ type:"EDIT_COMENT", payload:d.data }))
  .catch((e)=> console.log(e))
}