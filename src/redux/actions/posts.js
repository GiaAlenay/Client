import axios from "axios"

export function getPosts(){
  try {
    return async function(dispacth){
      var response = await axios.get("/posts");
      return dispacth({ type: "GET_POSTS", payload: response.data })      
    }
  } catch (e) {
    console.log(e)      
  }
};

export function createPost(payload){
  try {
    return async function (dispatch){
      const response = await axios.post("/posts",payload,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      return dispatch({ type:"CREATE_POST", payload: response.data.post })    
    }
  } catch (e) {
    console.log(e)
  }
}
export function deletePost(id){
  try{
    return async function(dispatch){
      const response = await axios.delete("/posts/"+id)
      return dispatch({
        type: "DELETE_POST",
        payload: response.data
      })
    }
  }catch(e){
    console.log(e)
  }
}
