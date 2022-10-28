import axios from 'axios';

export  function getUsers() {
        return async (dispatch) => {
      const result = await axios.get("/users")
      
return dispatch({ type: 'GET_USERS', payload: result.data })      
    }
} 


export function getPost(){
  return async function(dispacth){
      var json = await axios.get("/posts");
      return dispacth({
          type: "GET_POST",
          payload: json.data
      })
  }
};





export  function getPostId() {
  return async (dispatch) => {
const result = await axios.get("/posts:id")
return dispatch({ type: 'ADD_POST_ID', payload: result.data })
}
} 


export  function creatPost(payload) {

  console.log(payload)
  return async (dispatch) => {
const result = await axios.post("/posts",payload)
console.log(result)

return dispatch({ type: 'ADD_POST_POST', payload: result.data })
}
} 
