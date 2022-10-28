import { Stack } from '@mui/material'
import { Feed } from '../../components/Feed/Feed'
import { Filters } from '../../components/Filters/Filters'
import {Nav} from '../../components/Nav/Nav'
import { AddPost } from '../../components/Add/AddPost'
import { Prueba } from '../../components/Filters/Prueba'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from "../../redux/actions/users";
import { useParams } from 'react-router-dom'
export const Home =()=>{
    const dispatch=useDispatch()
    const { id } = useParams();
    const User=useSelector(state=>state.User)
    useEffect(()=>{
        
            dispatch(getUser(id))
            
        
        return(()=>{
            // dispatch(clearAction('VideogameDetail',{}))
        })
    },[])
    return(
        <div>
           
            <Nav User={User}/>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Filters/>
                <Feed/>
                <Prueba/>
                
            </Stack>
            <AddPost/>
            
           
        </div>
    )
}

