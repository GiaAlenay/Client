import axios from "axios"
import { loading } from "./index.js";
export function creatReport(){
    try {
      return async function(dispatch){
        dispatch(loading())
        var response = await axios.post("/report/emails");
        return dispatch({ type: "POST_REPORT_EMAIL", payload: response.data })      
      }
    } catch (e) {
      console.log(e)      
    }
  };