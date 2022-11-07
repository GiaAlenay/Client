import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/users";

export default function UsuariosAll (){
    const dispatch = useDispatch();
    const usuarios = useSelector((state)=> state.Users)

    useEffect (()=>{
        dispatch (getUsers());

    },[dispatch]);

    console.log(usuarios)
    
    return  (
        <TableContainer component={Paper}>
            <TableHead>
                <TableRow>
                    <TableCell>Usuarios</TableCell>
                </TableRow>
            </TableHead>

        </TableContainer>
    )
}