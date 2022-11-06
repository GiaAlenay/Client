import axios from 'axios';
export function loading () {
  return {
    type: "LOADING"
  }
}

export function AbrirHilo(payload){
  return{
    type:"ABRIR_HILO",
    payload
  }
}


export function getHiloAuth(payload){
  return{
    type:"GET_HILO_AUTH",
    payload
  }
}

export const getResponsesSearch=(keyWord)=>dispatch=>{
  dispatch(loading())
    return axios.get(`?name=${keyWord}`)
    .then(d=> dispatch({ type:'SEARCH_GLOBAL', payload: d.data }))
    .catch(e=> console.log(e))

}