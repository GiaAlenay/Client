import { Box } from "@mui/material";
import { Post } from "./Post";

export const Feed =({allPosts, loading})=>{
    
    let postConUser = allPosts.filter((e) => e.user !== null )
    return(
       <Box flex={4} p={{xs:0, md:2}}>
        {loading? <div>loading</div>
        :postConUser?.map((e)=>{
            return(
                <div key = {e.id}>
                <Post
                userpost={e.user.usuario}
                foto={e.user.foto_principal}
                titulo={e.titulo}
                texto={e.texto}
                media={e.media}
                id={e.id}  
                likes={e.likes}       
                />
                </div>
            )
        }) 
        }
       </Box> 
    );
}
