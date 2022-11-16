import React from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { Nav } from "../../components/Nav/Nav";
import {useSelector}from 'react-redux';

export function Pay(){

    const {user, isAuthenticated,isLoading} = useAuth0();

    const userLoged = useSelector(state => state.UserLoged);
    
    
    const datitos= {
        Status: "approve"
    }
    console.log(datitos)
    const navigate = useNavigate();

    useEffect(() => {
        if ( !isLoading && isAuthenticated  && datitos) {
          console.log(datitos)
        }
      }, [isLoading,isAuthenticated]);


    //   useEffect(() => {
    //     if (data &&user) {
    //       console.log(data)
    //     }
    //   }, [data,user])

    if(isLoading){
        <div>Loading...</div>
    }
    async function ALaHome(e){
        e.preventDefault();
    navigate("/home");
    }

    function enviarData(){

        const todo= {
            msg: datitos,
            name: user.nickname,
            email: user.email,
            id: userLoged.id
        }
        const reponst = axios.post("http://localhost:3001/send/emails/premium", todo)

    }


    
    // if(error){
    //     return(<div>
    //         <h1>No se a realizado ningun pago</h1>
            
    //         <button onClick={(e) => ALaHome(e)}> Vuelve a home</button>
    //     </div>)
    // }
    

    return(
    <div>
        <Nav/>
        <h1>Datos del Pago</h1>
        <p>status:</p>
        <p>id de la compra:</p>
        
        <button onClick={(e) => enviarData(e)}> Vuelve a home</button>

    </div>)
}