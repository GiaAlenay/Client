import { Box } from "@mui/material";
import { Post } from "./Post";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getPost } from "../../redux/actions/users";



export const Feed =()=>{
    const dispatch = useDispatch()
   

    const allPost = useSelector((state) => state.Posts)
    console.log(allPost)
    const allUsers = useSelector((state)=> state.Users)
    console.log(allUsers)

    useEffect(()=>{
        dispatch(getPost())
        dispatch(getUsers())
    },[dispatch]);

    const post = [{title:"react", texto:"mfldmglmdg", media:"https://upload.wikimedia.org/wikipedia/commons/9/91/JavaScript_screenshot.png"}, 
    {title:"java",texto:"sdjkfjk"},
    {title:"react", texto:"mfldmglmdg", media:"https://upload.wikimedia.org/wikipedia/commons/9/91/JavaScript_screenshot.png"}]

    return(
       <Box flex={4} p={{xs:10, md:2}}>

            {
                allPost.map((e)=>{
                    return(
                        <div>
                            <Post
                            userId={e.userId}
                            titulo={e.titulo}
                            texto={e.texto}
                            media={e.media}
                            />
                        </div>
                    )
                })
            }
            {/* <Post/>
            <Post/>
            <Post/>
            <Post/> */}
       </Box> 
    );
}
