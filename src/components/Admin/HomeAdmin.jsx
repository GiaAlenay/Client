import { useDispatch } from "react-redux"
import { useEffect } from "react";
import "./UsuariosAll"
import UsuariosAll from "./UsuariosAll";


export const HomeAdmin = () =>{
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Bienvenido Administrador</h1>
            <div>
            <UsuariosAll/>  
            </div>

        </div>
    )
}