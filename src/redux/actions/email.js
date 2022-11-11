import axios from "axios"


export const createReportEmail=(form)=>dispatch=>{
    dispatch(loading())
    return axios.post('/report/emails',form)
    .then(d=> dispatch({ type:'CREATE_REPORT', payload: d.data }))
    .catch(e=> console.log(e))
}