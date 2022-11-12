import React, { useEffect, useState } from "react";
import {Nav} from "../../components/Nav/Nav"
import { useDispatch, useSelector } from "react-redux";
import {creatReport} from "../../redux/actions/email"
import "./SendEmail.css";
import {useAuth0} from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
export function SendEmail(){
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const {isAuthenticated, isLoading,user} =useAuth0()

  useEffect(()=>{
    !isLoading && !isAuthenticated && navigate("/")
  
  },[ isLoading, isAuthenticated ])
    
    
    
    const [input, setInput] = useState({
        msg:"",
        usarioreport:"",
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
        dispatch(creatReport({
          name:user.nickname,
          email: user.email,
          msg:input.msg,
        usarioreport:input.usarioreport,
        tituloPost:input.usarioreport,
        }))
        alert("enviado")
        setInput({
        msg:"",
        usarioreport:"",
        tituloPost:"",
        })
        navigate("/home")
        
    }

if(isLoading){
  <div>Loading...</div>
}


    return(<div>
      <div>
        <Nav/>
      </div>
    <div>
        
        <div className="BodyReport" >
         <div className="ContenedorReport">
         <h2 className="tituloReport">Realize su report </h2>
                <br/>
                
             <form onSubmit={(e) => handleSubmit(e)}> 
                
                <br/>
                <label className="labelReport">Titulo del post a reportar</label>
                <br/>
                <input className="inputReport" 
                type={"text"} 
                name="tituloPost"
                value={input.tituloPost}
                onChange={(e) => handleChang(e)}
                />
                <br/>

                <label className="labelReport">Ingrese el nombre del propietario del posts  </label>
                <br/>
                <input className="inputReport" 
                type={"text"} 
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
                <button id="submit" className="buttonReport" type="submit"   >Enviar su report</button>
            </form>
            </div>
        </div>
    </div>
    </div>)
}