import { Box } from "@mui/material";
import { Post } from "./Post";
import { useSelector, useDispatch } from "react-redux";
import {getUserById} from "../../redux/actions/users";
import { getPost } from "../../redux/actions/posts"; 
import {useState , useEffect} from 'react';
import { useParams } from "react-router-dom";




export const Feed =({allPosts})=>{


   


    return(
       <Box flex={4} p={{xs:0, md:2}}>
           {allPosts?.map((e)=>{
            return(
                <div >
                <Post
                user={e.user.usuario}
                foto={e.user.foto_principal}
                titulo={e.titulo}
                texto={e.texto}
                media={e.media}
                id={e.id}               
                />
                </div>
            )
        })}  
       </Box> 
    );
}
