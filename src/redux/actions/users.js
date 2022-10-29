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

export function createPost(payload){
  return async function (dispacth){
    const response = await axios.post("/posts", payload);
    console.log(response)
    return dispacth({type:"CREATE_POST",
      payload:response.data});
  }
}

