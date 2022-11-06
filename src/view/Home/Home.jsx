import './Home.css'
import { Feed } from '../../components/Feed/Feed'
import { Filters } from '../../components/Filters/Filters'
import { Nav } from '../../components/Nav/Nav'
import { AddPost } from '../../components/Add/AddPost'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/actions/posts'
import { createUser } from '../../redux/actions/users'
import { useAuth0 } from "@auth0/auth0-react";
import { Hilo } from '../../Hilo/Hilo'
import { Esqueleto } from '../../components/Skeleton/Skeleton'
import { MiniPErfil } from '../../components/MiniPerfil/MinPerfil'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
    const navigate= useNavigate()
    const { user, isAuthenticated, isLoading } = useAuth0();
    const allPosts = useSelector(state => state.Posts)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(isAuthenticated){
            dispatch(createUser({usuario: user.nickname, email: user.email}))
            dispatch(getPosts())
        }
    }, [isAuthenticated,dispatch])

    const handleonClickAbout=()=>{
        navigate('/about')
    }
    

    return (
        <div className='home'>
            <Nav />            
            <div className='homeCompCont'>
                <div className='hom1Fila'>
                <MiniPErfil  />
                <div onClick={handleonClickAbout} className='AboutonHome'>About</div>
                </div>
                {isLoading?(
                    <div>
                        <Esqueleto type={2}/>
                        <Esqueleto type={2}/>
                        <Esqueleto type={2}/>
                    </div>
                ):(
                    <Feed allPosts={allPosts}/>
                )}
                <Hilo/>
            </div>
            <AddPost/>
        </div>
    )
}

