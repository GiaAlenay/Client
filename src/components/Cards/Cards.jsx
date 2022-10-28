import React from "react";
import { Redirect } from "react-router-dom";


//se puede
function Cards({titulo,texto,media}){

    
    return(

       
            <div className={"container"}>

            <img className={"img"} src={media} alt="img not found" width="100px" height="100px"/>
            <a href={media} > archivo</a>
            

                <h4 className={"countryName"}>{titulo}</h4>

                <h4>{texto}</h4>

                <button className={"button"}>Detalle</button>

            </div>
        
      
    )
}

export default Cards;