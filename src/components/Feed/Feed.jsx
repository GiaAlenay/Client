import { Box } from "@mui/material";
import { Post } from "./Post";
import { useSelector, useDispatch } from "react-redux";
import {getUser,getPost} from "../../redux/actions/users"
import {useState , useEffect} from 'react';
import { useParams } from "react-router-dom";




export const Feed =({allPost})=>{

    const { id } = useParams();
    const User=useSelector(state=>state.User)

    const dispatch = useDispatch()
    useEffect(()=>{       
        dispatch(getUser(id))         
    return(()=>{           
    })
},[])


    return(
       <Box flex={4} p={{xs:0, md:2}}>
           {allPost?.map((e)=>{
            return(
                <div>
                <Post
                foto={User.user.foto_principal}
                user={e.user.name}
                usuario={User.user.usuario}
                nombre={User.user.nombre}
                apellido={User.user.apellido}
                titulo={e.titulo}
                texto={e.texto}
                media={e.media}               
                />
                </div>
            )
        })}  
       </Box> 
    );
}
