import { useState , useEffect } from 'react';
import { useDispatch , useSelector} from "react-redux";
import { Stack } from '@mui/material';
import { getUsers, getUserId } from "../../redux/actions/users";
import { getPost } from "../../redux/actions/posts";
import { Feed } from '../../components/Feed/Feed';
import { Filters } from '../../components/Filters/Filters';
import {Nav} from '../../components/Nav/Nav';
import { AddPost } from '../../components/Add/AddPost';
import Cards from "../../components/Cards/Cards";

export const Home =()=>{
    const dispatch = useDispatch()
    
    const allPost = useSelector((state) => state.Posts)
    
    const [filter, setFilter] = useState(false)
    
    useEffect(()=>{    
            dispatch(getUserId())
        dispatch(getPost())
        dispatch(getUsers())
    },[dispatch]);

    function showFilter(){
        filter? setFilter(false) : setFilter(true)
      }

    return(
        <div className='home'>
            <Nav />
            <Stack direction="row" spacing={2} justifyContent="space-between"/>
                <Filters/>
                <Feed/>            
            {<button onClick={()=>showFilter()}>Filter</button>}
            {filter && <div>
            <AddPost />
            </div>
            }
            {allPost?.map((e)=>{
                return(
                    <div>
                    <Cards
                    titulo={e.titulo}
                    media={e.media}
                    texto={e.texto}
                    />
                    </div>
                )
            })}
        </div>
    )
    }