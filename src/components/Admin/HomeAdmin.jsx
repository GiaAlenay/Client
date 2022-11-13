import { useEffect } from "react";
import styles from "./HomeAdmin.module.css";
import UsuariosAll from "./UsuariosAll";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../Nav/Nav";
export const HomeAdmin = () =>{

    const {isAuthenticated, isLoading , user} =useAuth0()

    const navigate = useNavigate()

    useEffect(()=>{
        !isLoading && !isAuthenticated   && navigate("/");
        !isLoading && isAuthenticated && user.email !== "luis2003nb@gmail.com" && navigate("/")
    },[isLoading,isAuthenticated,user]);

    if(isLoading){
        <div>Loading...</div>
    }
    
    return (
        !isLoading && isAuthenticated && user &&
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