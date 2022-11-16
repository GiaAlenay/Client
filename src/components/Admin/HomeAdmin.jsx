import { useEffect } from "react";
import styles from "./HomeAdmin.module.css";
import UsuariosAll from "./UsuariosAll";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../Nav/Nav";

import { useDispatch,useSelector } from "react-redux";

export const HomeAdmin = () =>{

    const {isAuthenticated, isLoading , user} =useAuth0()
    const userLoged = useSelector(state => state.UserLoged);
    const navigate = useNavigate()

    useEffect(()=>{
        !isLoading && !isAuthenticated   && navigate("/");
        !isLoading && isAuthenticated && userLoged.admin !== true && navigate("/")
    },[isLoading,isAuthenticated,user]);

    function ALaHome(e){
        e.preventDefault();
    navigate("/home");
    }

    if(isLoading){
        <div>Loading...</div>
    }
    if(!userLoged){
        return(
        <div>
            <Nav/>
            <h1>No estas autorizado para ver esta informacion</h1>
        <button onClick={(e)=>ALaHome(e)}>home</button>
        </div>)
    }
    
    
    return (
        !isLoading && isAuthenticated && user && userLoged.admin ===true &&
        <div className={styles.homeContainer}>
            <Nav/>
            <h1 className={styles.h1Adm}>Bienvenido Administrador</h1>
            <h3 className={styles.h3Adm}>Todos los Usuarios Activos</h3>
            <div className={styles.suspendido}>
                <a href="/UserInactivo" className={styles.button}>Usuarios Suspendidos</a>
            </div>
            <UsuariosAll/>  

        </div>
    )
}