import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers,eliminarUser, userPremiun } from "../../redux/actions/users";
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
        dispatch(eliminarUser(id,paranoid));
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

    async function PremiunUser(id){
        dispatch(userPremiun(id));
       Swal.fire({
            title: "Usuario Premium Correctamente",
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
        dispatch(eliminarUser(id,paranoid));       
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
    
    return  (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 50 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell >#</TableCell>
                    <TableCell >Nombre</TableCell>
                    <TableCell >Email</TableCell>
                    <TableCell >Premium</TableCell>
                    <TableCell align="right"> Suspender </TableCell>
                    <TableCell align="right"> Eliminar </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    usuarios
                    ? usuarios.map((user)=>{{console.log(user)}
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
                                <TableCell>{user.premiun === true? "True": "False"}
                                <button
                                    onClick={()=>PremiunUser(user.id)}
                                    className={styles.buttonUsuario}
                                    >
                                    Premium
                                    </button></TableCell>
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