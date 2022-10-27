import { Stack } from '@mui/material'
import { Feed } from '../Feed/Feed'
import { Filters } from '../Filters/Filters'
import {Nav} from '../Nav/Nav'
import { AddPost } from './AddPost'
export const Home =()=>{
    return(
        <div>
           
            <Nav/>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Filters/>
                <Feed/>
                
            </Stack>
            <AddPost/>
            
           
        </div>
    )
}

