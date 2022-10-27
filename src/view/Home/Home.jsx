import { Stack } from '@mui/material'
import { Feed } from '../../components/Feed/Feed'
import { Filters } from '../../components/Filters/Filters'
import {Nav} from '../../components/Nav/Nav'
import { AddPost } from '../../components/Add/AddPost'
import { Prueba } from '../../components/Filters/Prueba'
export const Home =()=>{
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

