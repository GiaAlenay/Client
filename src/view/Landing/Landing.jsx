
import {Link} from 'react-router-dom'
import s from "./Landing.module.css"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../../redux/action/Users'

export const Landing =()=>{

    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users);

    useEffect(() => {
     
        dispatch(getUsers());
        console.log(getUsers(), "soy el efect")
        
    }, []);
    
    console.log(allUsers)
    return(
        <div className={s.container}>
            <div className={s.Register}>
                <from> 
                    <p>Completa los datos para crear tu cuenta</p>
                    <label>Nombre</label>
                    <br/>
                    <input placeholder="" type="text" class={s.input}required=""/>
                    <br/>

                    <label>Apellido</label>
                    <br/>
                    <input placeholder="" type="text" class={s.input}required=""/>

                    <br/>
                    <label>Gmail </label>
                    <br/>
                    <input placeholder="" type="text" class={s.input}required=""/>

                    <br/>
                    <label>Contraseña</label>
                    <br/>
                    <input placeholder="" type="text" class={s.input}required=""/>
                    <br/>

                    <br/>

                   <button><Link to="/home">User create </Link></button>


                </from>
            </div>
            <div className={s.Photo}></div>
            <div className={s.Tittle}></div>
            <div className={s.Footer}></div>
        </div>
    )
}

