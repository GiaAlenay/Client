import React from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
export function Pay(){

    const {user, isAuthenticated,isLoading} = useAuth0();

    const { error, data } = useQuery('repoData', () =>
        axios('http://localhost:3000/premium/pay')
  )
    console.log(data)
    const navigate = useNavigate();
    useEffect(() => {
        if ( !isLoading && isAuthenticated  && data) {
          console.log(data)
        }
      }, [isLoading,isAuthenticated]);


      useEffect(() => {
        if (data &&user) {
          console.log(data)
        }
      }, [data,user])

    if(isLoading){
        <div>Loading...</div>
    }
    async function ALaHome(e){
        e.preventDefault();
    navigate("/home");
    }
    
    if(error){
        return(<div>
            <h1>No se a realizado ningun pago</h1>
            
            <button onClick={(e) => ALaHome(e)}> Vuelve a home</button>
        </div>)
    }

    return(<div>

        <h1>Datos del Pago</h1>
        <p>status:{data}</p>
        <p>id de la compra:</p>
        
        <button onClick={(e) => ALaHome(e)}> Vuelve a home</button>

    </div>)
}