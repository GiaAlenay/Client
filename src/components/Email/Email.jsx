import React from "react";
import emailjs from "@emailjs/browser"

export function Email (){

    const sendEmail= (event)=>{
        event.preventDefault()
        emailjs.sendForm("service_m7yp24w","template_c0qmm4n",event.target,"kGiWgpoM2_VALmzHC")
        .then(response=>console.log(response))
        .catch(error =>console.log(error))
    }

    return(
        <div>
            <h1>Realize su report </h1>
            <form onSubmit={sendEmail} > 
                <label>Name </label>
                <input type={"text"} name="user_name"/>
                <br/>

                <label>Email</label>
                <input type={"email"} name="user_email" />
                <br/>
                
                <label>Razons de report</label>
                <br></br>
                <textarea  name="user_message" cols="10" rows="10" />
                <br/>

                <button>Enviar su report</button>
            </form>
        </div>
    )
}