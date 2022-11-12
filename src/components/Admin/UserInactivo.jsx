import { Button, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper } from "@mui/material";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { eliminarUser, getInactiveUser, habilitarUser } from "../../redux/actions/users"
import styles from "./UsuariosAll.module.css"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function UserInactivo(){
    const dispatch = useDispatch();
    const usuarioInactivo = useSelector((state)=> state.usuarioInactivo)
    const navigate = useNavigate();
    useEffect (()=>{
        dispatch(getInactiveUser());
    },[dispatch])

    async function borrarUsuario(id){
        let paranoid=false;
        console.log("AGARRO ELIMINADO", id, paranoid)

        dispatch(eliminarUser(id,paranoid));
        //alert("Usuario Eliminado Correctamente")
        Swal.fire({
            title: "Usuario Eliminado Correctamente",
            color: "#382c4b",
            icon: "success",
            confirmButtonColor: "#382c4b",
            confirmButtonText: "OK",
            background: "#e8e8e8",
        })

        dispatch(getInactiveUser());

    }

    async function HabilitaUser(e, id){
        e.preventDefault();
        dispatch(habilitarUser(id));
        console.log("AGARRO HABILITADDO", id)

        //alert("Usuario habilitado correctamente");
        Swal.fire({
            title: "Usuario Habilitado Correctamente",
            color: "#382c4b",
            icon: "success",
            confirmButtonColor: "#382c4b",
            confirmButtonText: "OK",
            background: "#e8e8e8",
        })
        navigate("/home/admin");
        dispatch(getInactiveUser());
    }

    return(
        <div className={styles.homeContainer}>
            <h3 className={styles.h3title}>Usuarios Suspendidos</h3>
            <div className={styles.suspen}>
                <a href="/home/admin" className={styles.button}>
                Regresar
                </a>
            </div>

            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell >#</TableCell>
                    <TableCell >Nombre</TableCell>
                    <TableCell >Email</TableCell>
                    <TableCell align="right">Habilitar</TableCell>
                    <TableCell align="right">Eliminar</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    usuarioInactivo
                    ? usuarioInactivo.map((user)=>{
                        return(
                            <TableRow
                                Key={user.id}
                                sw={{'&:last-child td, &:last-child th': { border: 5 }}}
                                >
                                <TableCell >
                                    {user.id}
                                </TableCell>
                                <TableCell>{user.usuario}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell align="right">
                                    <button size="large"
                                    onClick={(e)=> HabilitaUser(e, user.id)}
                                    className={styles.buttonUsuario}>
                                        Habilitar          
                                    </button>
                                </TableCell>
                                <TableCell align="right">
                                    <button
                                    onClick={()=> borrarUsuario(user.id)}
                                    className={styles.buttonUsuario}
                                    >Eliminar</button>
                                </TableCell>

                            </TableRow>
                        )
                    })
                : null}
            </TableBody>

            </Table>
           

        </TableContainer>
        </div>
    )
}