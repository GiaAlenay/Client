import { Box } from "@mui/material";
import { Post } from "./Post";

export const Feed =({allPosts, loading})=>{

    return(
       <Box flex={4} p={{xs:0, md:2}}>
        {loading? <div>loading</div>
        :allPosts?.map((e)=>{
            return(
                <div key = {e.id}>
                <Post
                userpost={e.user.usuario}
                foto={e.user.foto_principal}
                titulo={e.titulo}
                texto={e.texto}
                media={e.media}
                id={e.id}         
                />
                </div>
            )
        }) 
        }
       </Box> 
    );
}
