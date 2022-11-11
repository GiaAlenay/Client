import { ConstructionOutlined } from "@mui/icons-material";
import axios from "axios";
import { loading } from "./index.js";

export function getPosts() {
  try {
    return async function (dispatch) {
      // dispatch(loading())
      var response = await axios.get("/posts");
      return dispatch({ type: "GET_POSTS", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}

export function createPost(payload) {
  try {
    return async function (dispatch) {
      dispatch(loading());
      const response = await axios.post("/posts", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return dispatch({ type: "CREATE_POST", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}
export function deletePost(id) {
  try {
    return async function (dispatch) {
      dispatch(loading());
      var response = await axios.delete(`/posts/${id}`);
      return dispatch({ type: "DELETE_POST", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}

export const editPost = (form) => (dispatch) => {
  return axios
    .patch(`/posts/${form.id}`, form)
    .then((d) => {
      dispatch({ type: "EDIT_POST", payload: d.data });
      dispatch(getPosts());
    })
    .catch((e) => console.log(e));
};
