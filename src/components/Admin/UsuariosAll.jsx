import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers,eliminarUser } from "../../redux/actions/users";

export default function UsuariosAll (){
    const dispatch = useDispatch();
    const usuarios = useSelector((state)=> state.Users)

    useEffect (()=>{
        dispatch (getUsers());
    },[dispatch]);

    async function suspenderUsuario(id){
        let paranoid = true;
        console.log("AGARRO SUSPENDIDO", id, paranoid)

        dispatch(eliminarUser(id,paranoid));
        alert("Usuario Suspendido")
        dispatch(getUsers());
    }

    async function borrarUsuario(id){
        let paranoid=false;
        console.log("AGARRO ELIMINADO", id, paranoid)

        dispatch(eliminarUser(id,paranoid));
        alert("Usuario Eliminado")

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
                                    <Button size="large"
                                    onClick={()=>suspenderUsuario(user.id)}>
                                        Suspender           
                                    </Button>
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                    onClick={()=>borrarUsuario(user.id)}
                                    >Eliminar</Button>
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