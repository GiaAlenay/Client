
import { Post } from "./Post";

export const Feed =({allPosts})=>{

    return(
       <div className="feedCont">
           {allPosts?.map((e)=>{
            return(
                <div >
                <Post
                id={e.id}
                user={e.user.usuario}
                foto={e.user.foto_principal}
                titulo={e.titulo}
                texto={e.texto}
                media={e.media}               
                />
                </div>
            )
        })}  
       </div> 
    );
}
