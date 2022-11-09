import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers,eliminarUser } from "../../redux/actions/users";
import styles from "./UsuariosAll.module.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function UsuariosAll (){
    const dispatch = useDispatch();
    const usuarios = useSelector((state)=> state.Users)
    const navigate = useNavigate();

    useEffect (()=>{
        dispatch (getUsers());
    },[dispatch]);

    async function suspenderUsuario(id){
        let paranoid = true;
        console.log("AGARRO SUSPENDIDO", id, paranoid)

        dispatch(eliminarUser(id,paranoid));
        // alert("Usuario Suspendido")

       Swal.fire({
            title: "Usuario Suspendido Correctamente",
            color: "#382c4b",
            icon: "success",
            confirmButtonColor: "#382c4b",
            confirmButtonText: "OK",
            background: "#e8e8e8",
        })
        navigate("/home/admin");
        dispatch(getUsers());
    }

    async function borrarUsuario(id){
        let paranoid=false;
        console.log("AGARRO ELIMINADO", id, paranoid)

        dispatch(eliminarUser(id,paranoid));
        //alert("Usuario Eliminado")

        
       Swal.fire({
        title: "Usuario Eliminado Correctamente",
        color: "#382c4b",
        icon: "success",
        confirmButtonColor: "#382c4b",
        confirmButtonText: "OK",
        background: "#e8e8e8",
    })
        dispatch(getUsers());

    }

    console.log(usuarios)
    
    return  (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell >#</TableCell>
                    <TableCell >Nombre</TableCell>
                    <TableCell >Email</TableCell>
                    <TableCell align="right"> Suspender </TableCell>
                    <TableCell align="right"> Eliminar </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    usuarios
                    ? usuarios.map((user)=>{
                        return(
                            <TableRow
                                Key={user.id}
                                sw={{'&:last-child td, &:last-child th': { border: 5 }}}
                                >
                                <TableCell component="th" scope="row">
                                    {user.id}
                                </TableCell>
                                <TableCell>{user.usuario}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell align="right">
                                    <button size="large"
                                    onClick={()=>suspenderUsuario(user.id)}
                                    className={styles.buttonUsuario}>
                                        Suspender           
                                    </button>
                                </TableCell>
                                <TableCell align="right">
                                    <button
                                    onClick={()=>borrarUsuario(user.id)}
                                    className={styles.buttonUsuario}
                                    >
                                    Eliminar
                                    </button>
                                </TableCell>

                            </TableRow>
                        )
                    })
                : null}
            </TableBody>

            </Table>
           

        </TableContainer>
    )
}