import axios from 'axios';


  export const getUsers=()=>async dispatch=>{
    try {
          const data = await axios.get(`/users`);
          console.log(data.data);
          dispatch({ type: 'GET_USERS', payload: data.data });
      } catch (error) {
          console.log(error);
      }
}

export const getUser=(id)=>async dispatch=>{
    try {
        const data = await axios.get(`/users/${id}`);
        dispatch({ type: 'GET_BY_ID', payload: data.data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser=(id)=>async dispatch=>{
    try {
        const d = await axios.delete(`users/${id}`);
        console.log(d.data.msg);
        dispatch({ type: 'DELETE_USER', payload: d.data.msg });
    } catch (e) {
        console.log(e);
    }
}

export const createUser=(user)=>async dispatch=>{
    try {
        const d = await axios.post('/users', user);
        console.log(d.data.msg);
        dispatch({ type: 'CREAR_USER', payload: d.data.msg });
    } catch (e) {
        console.log(e);
    }
}

export const getUserLoged=(usuario)=>async dispatch=>{
    try {
        const d = await axios.get('/users/login', usuario);
        console.log(d.data.user);
        dispatch({ type: 'GET_USER_LOGED', payload: d.data.user });
    } catch (e) {
        console.log(e);
    }
}


export function createPost(payload){
    return async function (dispatch){
      const response = await axios.post("/posts",payload,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      console.log(response)
      return dispatch({
        type:"CREAT_POST",
        payload: response.data
      })
    }
  }
  export function getPost(payload){
    return async function(dispacth){
        var json = await axios.get("/posts",payload);
        return dispacth({
            type: "GET_POST",
            payload: json.data
        })
    }
  };