import './Home.css'
import { Stack } from '@mui/material'
import { Feed } from '../../components/Feed/Feed'
import { Filters } from '../../components/Filters/Filters'
import { Nav } from '../../components/Nav/Nav'
import { AddPost } from '../../components/Add/AddPost'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/actions/posts'
import { createUser } from '../../redux/actions/users'
import { useAuth0 } from "@auth0/auth0-react";

export const Home = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const allPosts = useSelector(state => state.Posts)
    const dispatch = useDispatch()


    
    useEffect(() => {
        if(isAuthenticated){
            dispatch(createUser({usuario: user.nickname, email: user.email}))
            dispatch(getPosts())
        }
    }, [isAuthenticated,dispatch])

    if(isLoading){
        return <div> Loading...</div>
    }

    return (
        <div className='home'>
            <Nav />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Filters/>
                <Feed allPosts={allPosts}/>
            </Stack>
            <AddPost/>
        </div>
    )
}

