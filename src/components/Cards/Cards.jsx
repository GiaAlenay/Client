import React from "react";



function Cards({titulo,texto,media}){
    return(

        <div className={"container"}>

            <img className={"img"} src={media} alt="img not found" width="100px" height="100px"/>

            <div className={"textContainer"}>

                <h4 className={"countryName"}>{titulo}</h4>
       
                <h4>{texto}</h4>

                <button className={"button"}>Detalle</button>
                
            </div>
            
        </div>
    )
}

export default Cards;