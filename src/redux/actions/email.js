import axios from "axios"
import { loading } from "./index.js";
export function creatReport(payload){
    try {
      return async function(dispatch){
        dispatch(loading())
        var response = await axios.post("/send/emails/report",payload);
        return dispatch({ type: "POST_REPORT_EMAIL", payload: response.data })      
      }
    } catch (e) {
      console.log(e)      
    }
  };