import axios from 'axios';

export  function getUsers() {
        return async (dispatch) => {
      const result = await axios.get(`/users`)
      
return dispatch({ type: 'GET_USERS', payload: result.data })  
         
    }
  } 