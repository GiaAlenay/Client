import axios from 'axios';

export const getPost = () => dispatch => {
    return axios.get(`/posts`)
        .then((json) => {
            dispatch({ type: 'GET_POST', payload: json.data })
        }).catch((error) => {
            console.log(error)
        })
}

export const getPostId = (payload) => dispatch => {
    return axios.get('/posts:id', payload)
    .then(json => {
        dispatch({ type: 'ADD_POST_ID', payload: json.data })
    })
    .catch(error => {
        console.log(error)
    })
}

export const creatPost = (payload) => dispatch => {
return axios.post('/posts', payload)
    .then(json => {
        dispatch({ type: 'ADD_POST_POST', payload: json.data })
    })
    .catch(error => {
        console.log(error)
    })
}

