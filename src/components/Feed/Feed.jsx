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
                userpost={e.user.usuario}
                foto={e.user.foto_principal}
                titulo={e.titulo}
                texto={e.texto}
                media={e.media}
                id={e.id}
                video={<div>
                    <iframe width="560" 
                height="315" 
                src="https://youtu.be/fba3wi8ipLU"
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
                </iframe></div>}              
                />
                </div>
            )
        })}  
       </Box> 
    );
}
