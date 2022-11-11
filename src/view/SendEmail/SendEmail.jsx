import React, { useEffect, useState } from "react";
import {Nav} from "../../components/Nav/Nav"
import { useDispatch, useSelector } from "react-redux";
import {creatReport} from "../../redux/actions/email"
import "./SendEmail.css"
export function SendEmail(){
    
    const userLoged = useSelector((state) => state.UserLoged);
    const [input, setInput] = useState({
        msg:"",
        emailReport:"",
        nombreUser:""
      });
      function handleChang(e){
        e.preventDefault();
        console.log(e)
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      }
    function handleSubmit(e){
        e.preventDefault();
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