import axios from 'axios';



  export const getUsers=()=>dispatch=>{
    return axios.get(`/users`)
    .then((data)=>{
        
        dispatch({type:'GET_USERS', payload:data.data})
    }).catch((error)=>{
        console.log(error)
    })
}

export const getUser=(id)=>dispatch=>{
    return axios.get(`/users/${id}`)
    .then((data)=>{
        console.log('by id'+JSON.stringify(data))
        dispatch({type:'GET_BY_ID', payload: data.data})
    }).catch((error)=>{
        console.log(error)
    })
}

