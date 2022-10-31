import axios from 'axios';


export const getUsers = () => dispatch => {
    return axios.get(`/users`)
    .then((json) => {
        dispatch({ type: 'GET_USERS', payload: json.data })
    }).catch((error) => {
            console.log(error)
        })
}

export const getUserId = (id) => dispatch => {
    return axios.get(`/users/${id}`)
        .then((json) => {
            dispatch({ type: 'GET_BY_ID', payload: json.data })
        }).catch((error) => {
            console.log(error)
        })
}

export const deleteUser = (id) => dispatch => {
    return axios.delete(`users/${id}`)
        .then(json => {
            dispatch({ type: 'DELETE_USER', payload: json.data.msg })
        })
        .catch(error => { console.log(error) })
    }
    
    export const createUser = (payload) => dispatch => {
        return axios.post('/users', payload)
        .then(json => {
            dispatch({ type: 'GET_USERS_POST', payload: json.data.msg })
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    export const getUserLoged = (payload) => dispatch => {
        return axios.get('/users/login', payload)
        .then(json => {
            dispatch({ type: 'GET_USER_LOGED', payload: json.data.user })
        })
        .catch(error => {
            console.log(error)
        })
    }
