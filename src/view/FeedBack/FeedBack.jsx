import React from "react";
import {useQuery} from "react-query";
import axios from "axios";

export function FeedBack(){

   async function getPremiun(){
    const response = axios("http://localhost:3000/profile/feedback");
    console.log(response)
    return response;
    }

    const {data,status} = useQuery("sub",getPremiun )

    if (status === "loading"){
        <p>Para que esta cargando la data pa </p>

    }
    if(status=== "error"){
        <p>Dudosa compra pa que hiciste </p>
    }

    return(<div>
        <h1>AQUI LLEGA TODA LA INFO PAPA</h1>
    </div>)
};