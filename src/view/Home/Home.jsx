import { Stack } from '@mui/material'
import { Feed } from '../../components/Feed/Feed'
import { Filters } from '../../components/Filters/Filters'
import {Nav} from '../../components/Nav/Nav'
import { AddPost } from '../../components/Add/AddPost'
import { Prueba } from '../../components/Filters/Prueba'
import { useDispatch , useSelector} from "react-redux";
import {useState , useEffect} from 'react';
import {getPost, getUsers} from "../../redux/actions/users"
export const Home =()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPost())
        dispatch(getUsers())
    },[dispatch]);

    const allPost = useSelector((state) => state.Posts)
    console.log(allPost)
    const allUsers = useSelector((state)=> state.Users)
    console.log(allUsers)

    return(
        <div>
           
            <Nav/>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Filters/>
                <Feed/>
                <Prueba/>
            </Stack>
            <AddPost/>
            
           
        </div>
    )
}

