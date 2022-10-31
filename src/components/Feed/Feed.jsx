import { Box } from "@mui/material";
import { Post } from "./Post";
import { useSelector, useDispatch } from "react-redux";
import {getUsers,getPost} from "../../redux/actions/users"
import {useState , useEffect} from 'react';

export const Feed =({allPost})=>{
    
    return(
       <Box flex={4} p={{xs:0, md:2}}>
           {allPost?.map((e)=>{
            return(
                <div>
                <Post
                user={e.user.name}
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
