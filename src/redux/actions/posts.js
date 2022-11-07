import { ConstructionOutlined } from "@mui/icons-material";
import axios from "axios"
import { loading } from "./index.js";

export function getPosts(){
  try {
    return async function(dispatch){
      dispatch(loading())
      var response = await axios.get("/posts");
      return dispatch({ type: "GET_POSTS", payload: response.data })      
    }
  } catch (e) {
    console.log(e)      
  }
};

export function createPost(payload){
  try {
    console.log(payload)
    return async function (dispatch){
      dispatch(loading())
      const response = await axios.post("/posts",payload,{
        headers: {
          /*"Content-Type": 'application/json',*/
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