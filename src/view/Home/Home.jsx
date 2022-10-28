import { Stack } from '@mui/material'
import { Feed } from '../../components/Feed/Feed'
import { Filters } from '../../components/Filters/Filters'
import {Nav} from '../../components/Nav/Nav'
import { AddPost } from '../../components/Add/AddPost'
import { Prueba } from '../../components/Filters/Prueba'
import { useDispatch , useSelector} from "react-redux";
import {useState , useEffect} from 'react';
import {getPost, getUsers} from "../../redux/actions/users"
import Cards from "../../components/Cards/Cards"



export const Home =()=>{

    const dispatch = useDispatch()
    
    const allPost = useSelector((state) => state.Posts)
    
    console.log("TODOS LOS POST",allPost)
    
    const allUsers = useSelector((state)=> state.Users)
    
    console.log("ACA va los users",allUsers)

    const [filter, setFilter] = useState(false)
    
    useEffect(()=>{
        dispatch(getPost())
        dispatch(getUsers())
    },[dispatch]);

    function showFilter(){
        filter? setFilter(false) : setFilter(true)
      }

    return(
        <div>
           
            <Nav/>
            {/* <Stack direction="row" spacing={2} justifyContent="space-between">
                <Filters/>
                <Feed/>
                <Prueba/>
            </Stack>
            <AddPost/> */}
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

