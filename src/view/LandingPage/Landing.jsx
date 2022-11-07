import './Landing.css'
import { IniciarSesion } from '../../components/IniciarSesion/InciarSecion'
import { useEffect, useState } from 'react'
import { getUsers } from "../../redux/actions/users";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { display } from "@mui/system";
import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom";

export const Landing = () => {

    const navigate = useNavigate();
    const { loginWithRedirect, isAuthenticated } = useAuth0()

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home");
        }
    }, [isAuthenticated])

    

    return (
        <div className='landing'>
            <div className='laCont'>
            <div className='landArribaCont'>
                <div className='logo'>SYT</div>
                <Link to={"/SobreNosotros"}>
                    <div >
                        <button className='btnCreCu'>SobreNosotros</button>
                    </div>        
                </Link>

                <button onClick={hamdleConfigAccountForm} className='btnCreCu'>Crear cuenta</button>
            </div>
            <div className='lan1Cont'>
                <div className='lan1Left'>
                    <div className='titleLandCont'>
                    <img className='sytTitle' alt='img' src={'title.png'}/>
                <div className='landArribaCont'>
                    <div className='logo'>SYT</div>
                </div>
                <div className='lan1Cont'>
                    <div className='lan1Left'>
                        <div className='titleLandCont'>
                            <img className='sytTitle' alt='img' src={'title.png'} />
                        </div>
                        <div className='landDesc'>
                            <h5>No hay duda de que puedes beneficiarte en un foro de desarrolladores web. El desafío es encontrar la comunidad de programación o desarrollo web adecuada para sus necesidades.Y aqui tenemos la mejor opcion:
                                Unete a la Comunidad más grande de desarrolladores de software</h5>
                            <h5>HAZ CLICK AQUI PARA SER PARTE</h5>
                            <button onClick={loginWithRedirect} className='btnCreCu' > UNETE </button>
                        </div>
                    </div>
                    <div className='lan2rigth'>
                        <img className='laRiImg' alt='img' src={'riri.png'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
