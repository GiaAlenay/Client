import axios from 'axios';
import { loading } from './index.js'


export const getUsers=()=>dispatch=>{
    dispatch(loading())
    return axios.get(`/users`)
    .then((d)=> dispatch({ type:'GET_USERS', payload:d.data }))
    .catch((e)=> console.log(e))
}

export const getUserById=(id)=>dispatch=>{
    dispatch(loading())
    return axios.get(`/users/${id}`)
    .then((d)=> dispatch({ type:'GET_USER_BY_ID', payload: d.data }))
    .catch((e)=> console.log(e))
}

export const deleteUser=(id)=>dispatch=>{
    dispatch(loading())
    return axios.delete(`users/${id}`)
    .then(d=> dispatch({ type:'DELETE_USER', payload: d.data }))
    .catch(e=> console.log(e))
}

export const createUser=(form)=>dispatch=>{
    dispatch(loading())
    return axios.post('/users',form)
    .then(d=> dispatch({ type:'CREATE_USER', payload: d.data }))
    .catch(e=> console.log(e))
}

export const editUser=(form)=>dispatch=>{
    dispatch(loading())
    return axios.patch(`/users/${form.id}`, form)
    .then(d=> dispatch({ type:'EDIT_USER', payload: d.data }))
    .catch(e=> console.log(e))
}
// Usuarios Suspendidos o Eliminados

export const eliminarUser = (id, paranoid)=>{
    return async function(dispatch){
        try{
            const eliminar = await axios.delete(`/users/${id}`,
            {
                data:{ paranoid:paranoid},
            });
            return dispatch({
                type:"ELIMINAR_USER",
                payload:eliminar.data
            });
        }catch(error){
            console.log(error);
        }
    }
}

export const getInactiveUser = () =>{
    return async (dispatch) => {
        try{
            const usuarioInactivo = await axios.get("/userInactivo");
            dispatch({
                type: "GET_INACTIVE_USER",
                payload: usuarioInactivo.data,
            });
        }catch(error){
            console.log(error);
        }
    };
};

export const habilitarUser = (id) =>{
    console.log(id);
    return async function (dispatch){
        try {
            const habilitado = await axios.put(`/userInactivo/${id}`
            );
            return dispatch ({
                type:"HABILITAR_USER",
                payload: habilitado.data,
            });
        }catch(error){
            console.log(error);
        }
    }
}