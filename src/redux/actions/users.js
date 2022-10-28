import axios from 'axios';

export  function getUsers() {
        return async (dispatch) => {
      const result = await axios.get(`/users`)
      
return dispatch({ type: 'GET_USERS', payload: result.data })      
    }
} 


export function getPost(payload){
  return async function(dispacth){
      var json = await axios.get("/posts",payload);
      return dispacth({
          type: "ADD_POST",
          payload: json.data
      })
  }
};


