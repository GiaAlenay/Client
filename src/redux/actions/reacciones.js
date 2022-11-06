import axios from "axios"
export function getReaccionesonPost(idPost){
    try {
      return async function(dispatch){
        
        var response = await axios.get(`/reacciones/post/${idPost}`);
        return dispatch({ type: "GET_REACCION_ON_pOST", payload: response.data })      
      }
    } catch (e) {
      console.log(e)      
    }
  };
  


  export function createReaccionesOnPost(reaccion){
    try {
      return async function (dispatch){
        
        const response = await axios.post("/reacciones/post",reaccion)
        return dispatch({ type:"CREATE_REACCION_ON_POST", payload: response.data })    
      }
    } catch (e) {
      console.log(e)
    }}

    export function createReaccionesOnComent(reaccion){
      try {
        return async function (dispatch){
          
          const response = await axios.post("/reacciones/coment",reaccion)
          return dispatch({ type:"CREATE_REACCION_ON_COMENT", payload: response.data })    
        }
      } catch (e) {
        console.log(e)
      }}

    export function deleteReacciones(id){
      
      try {
        return async function(dispatch){
          
          var response = await axios.delete(`/reacciones/${id}`,);
          return dispatch({ type: "DELETE_REACCION", payload: response.data })      
        }
      } catch (e) {
        console.log(e)      
      }
    };
    export function editReaccionesOnPost(id,reaccion){
      try {
        return async function (dispatch){
          
          const response = await axios.patch(`/reacciones/${id}`,reaccion)
          return dispatch({ type:"EDIT_REACCION_ON_POST", payload: response.data })    
        }
      } catch (e) {
        console.log(e)
      }}
