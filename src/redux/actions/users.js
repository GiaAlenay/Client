import axios from 'axios';


export const getUsers=()=>dispatch=>{
    return axios.get(`/users`)
    .then((d)=> dispatch({ type:'GET_USERS', payload:d.data }))
    .catch((e)=> console.log(e))
}

export const getUserById=(id)=>dispatch=>{
    return axios.get(`/users/${id}`)
    .then((d)=> dispatch({ type:'GET_USER_BY_ID', payload: d.data }))
    .catch((e)=> console.log(e))
}

export const deleteUser=(id)=>dispatch=>{
    return axios.delete(`users/${id}`)
    .then(d=> dispatch({ type:'DELETE_USER', payload: d.data }))
    .catch(e=> console.log(e))
}

export const createUser=(form)=>dispatch=>{
    return axios.post('/users',form)
    .then(d=> dispatch({ type:'CREATE_USER', payload: d.data }))
    .catch(e=> console.log(e))
}

export const getUserLoged=(form)=>dispatch=>{
    return axios.post('/users/login', form)
    .then(d=> dispatch({ type:'GET_USER_LOGED', payload: d.data }))
    .catch(e=> console.log(e))
}

export const editUser=(form)=>dispatch=>{
    return axios.patch(`/users/${form.id}`, form)
    .then(d=> dispatch({ type:'EDIT_USER', payload: d.data }))
    .catch(e=> console.log(e))
}
