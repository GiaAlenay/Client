import React, { useEffect, useState } from "react";
import {Nav} from "../../components/Nav/Nav"
import { useDispatch, useSelector } from "react-redux";
import {creatReport} from "../../redux/actions/email"
import "./SendEmail.css";
import {useAuth0} from "@auth0/auth0-react";

export function SendEmail(){
  const {isAuthenticated, isLoading,user} =useAuth0()
  useEffect(()=>{
    !isLoading && !isAuthenticated && navigate("/")
    if(!isLoading && isAuthenticated) {
        dispatch(createUser({usuario: user.nickname, email: user.email}))
        dispatch(getPosts())
    } 
    
},[ isLoading, isAuthenticated ])
    
    const userLoged = useSelector((state) => state.UserLoged);
    const [input, setInput] = useState({
        msg:"",
        usarioreport:"",
        nombreUser:"",
        tituloPost:"",
      });
      function handleChang(e){
        e.preventDefault();
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      }
    function handleSubmit(e){
        e.preventDefault();
    }

if(isLoading){
  <div>Loading...</div>
}


    return(
    <div>
        <Nav/>
        <div className="BodyReport" >
         <div className="ContenedorReport">
         <h2 className="tituloReport">Realize su report </h2>
         <br/>
         <form  > 
                <label className="labelReport">Ingrese su nombre de usuario </label>
                <br/>
                <input className="inputReport" type={"text"} 
                name="nombreUser"
                value={input.nombreUser}
                onChange={(e) => handleChang(e)}
                />
                <br/>

                <label className="labelReport">Email</label>
                <br/>
                <input className="inputReport" type={"email"}
                
                name="emailReport"
                value={input.emailReport}
                onChange={(e) => handleChang(e)}
                 />
                <br/>

                <label className="labelReport">Titulo del post a reportar</label>
                <br/>
                <input className="inputReport" type={"text"} 
                name="tituloPost"
                value={input.tituloPost}
                onChange={(e) => handleChang(e)}
                />
                <br/>

                <label className="labelReport">Ingrese el nombre del propietario del posts  </label>
                <br/>
                <input className="inputReport" type={"text"} 
                name="usarioreport"
                value={input.usarioreport}
                onChange={(e) => handleChang(e)}
                />
                <br/>

                <label className="labelReport" >Razons de report</label>
                <br></br>
                <textarea  className="textReport"
                name="msg"
                value={input.msg}
                onChange={(e) => handleChang(e)} 
                cols="10" rows="10" />
                <br/>

                <button className="buttonReport">Enviar su report</button>
            </form>
            </div>
        </div>
    </div>)
}