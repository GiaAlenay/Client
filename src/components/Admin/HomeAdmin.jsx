import { useDispatch } from "react-redux"
import { useEffect } from "react";
import styles from "./HomeAdmin.module.css";
import UsuariosAll from "./UsuariosAll";



export const HomeAdmin = () =>{
    const dispatch = useDispatch();

    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.h1Adm}>Bienvenido Administrador</h1>
            <h3 className={styles.h3Adm}>Todos los Usuarios Activos</h3>
            <div className={styles.suspendido}>
                <a href="/UserInactivo">Usuarios Suspendidos</a>
            </div>
            <UsuariosAll/>  

        </div>
    )
}