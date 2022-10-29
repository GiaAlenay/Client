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