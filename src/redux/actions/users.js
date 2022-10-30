import axios from 'axios';


  export const getUsers=()=>dispatch=>{
    return axios.get(`/users`)
    .then((data)=>{
        console.log(data.data)
        dispatch({type:'GET_USERS', payload:data.data})
    }).catch((error)=>{
        console.log(error)
    })
}

export const getUser=(id)=>dispatch=>{
    return axios.get(`/users/${id}`)
    .then((data)=>{
        
        dispatch({type:'GET_BY_ID', payload: data.data})
    }).catch((error)=>{
        console.log(error)
    })
}

export const deleteUser=(id)=>dispatch=>{
    return axios.delete(`users/${id}`)
    .then(d=> {     
        console.log(d.data.msg) 
        dispatch({type:'DELETE_USER', payload: d.data.msg})   })
    .catch(e=> 
        { console.log(e)
             })
}

export const createUser=(user)=>dispatch=>{
    return axios.post('/users',user)
    .then(d=> {     
        console.log(d.data.msg) 
        dispatch({type:'DELETE_USER', payload: d.data.msg})   })
    .catch(e=> 
        { console.log(e)
             })
}

export const getUserLoged=(usuario)=>dispatch=>{
    return axios.get('/users/login',usuario)
    .then(d=> {     
        console.log(d.data.user) 
        dispatch({type:'GET_USER_LOGED', payload: d.data.user})   })
    .catch(e=> 
        { console.log(e)
             })
}