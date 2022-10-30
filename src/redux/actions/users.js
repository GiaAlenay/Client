import axios from 'axios';

export  function getUsers() {
        return async (dispatch) => {
      const result = await axios.get(`/users`)
      
return dispatch({ type: 'GET_USERS', payload: result.data })  
         
    }
  }



export function getCategories() {
 
  return async (dispatch) => {
    try {
      const dataC = await axios.get('http://localhost:3001/categories')
      console.log(dataC);
      
      return dispatch({
        type: 'GET_CATEGORIES',
        payload: dataC.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}




export const getUser=(id)=>dispatch=>{
    return axios.get(`/users/${id}`)
    .then((data)=>{
        console.log('by id'+JSON.stringify(data))
        dispatch({type:'GET_BY_ID', payload: data.data})
    }).catch((error)=>{
        console.log(error)
    })
}


