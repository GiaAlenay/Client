import axios from 'axios'

// export const ADD_TO_FAV = "ADD_TO_FAV"
// export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV"
export function AddToFav(id){
  return async function (dispacth) {
    var response = await axios.get(`/posts/${id}`);
    return dispacth({ 
      type: "CREATE_FAV", 
      payload: response.data.id });
  }
}

export function deleteFav(id){
	console.log(id);
    return  {
            type: "DELETE_FAV",
            payload:id
 }   
}



