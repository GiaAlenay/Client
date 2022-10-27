import { Stack } from '@mui/material'
import { Feed } from '../Feed/Feed'
import { Filters } from '../Filters/Filters'
import {Nav} from '../Nav/Nav'
import { AddPost } from '../Add/AddPost'
import { Prueba } from '../Filters/Prueba'
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

