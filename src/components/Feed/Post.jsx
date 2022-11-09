import {MoreVert, Favorite, FavoriteBorder} from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography,Checkbox, Button} from "@mui/material";
import { useDispatch } from "react-redux";
import {deletePost} from '../../redux/actions/posts'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export const Post=({titulo,userpost,texto,media,foto,id})=>{
    const { user, isAuthenticated, isLoading } = useAuth0();
const dispatch= useDispatch()

function handleDeletePost(e){
    dispatch(deletePost(e))
}
if(isLoading){
    return <div> Loading...</div>
}


    return(
        <div>
            {isAuthenticated &&(
                <div>
                <Card sx= {{xs:8, margin: 2, marginRight:50, width:"600px"}} >
            <CardHeader
            avatar ={
                <Avatar sx={{bgcolor: "blue"}}>
                    <img src={foto} alt="foto" height={40} />
                </Avatar>
            }
            action ={
                <IconButton aria-label="settings">
                    <MoreVert/>
                </IconButton>
            }

            title= {userpost}
            />
            <CardContent >
                <Typography variant="body2" color="text.secondary">
                {titulo}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {texto}
                
                   
                </Typography>

            </CardContent>
            
            {media?.slice(-3) === "pdf"? 
                <Typography variant="body2" color="text.secondary">
                <a href={media} target="_blank">arhivo subido</a>
                </Typography> :<CardMedia
            component="img"
            height="20%"
            width="50px"
            image={media} 

            alt=""
            />}
        {!isLoading && isAuthenticated && user.nickname === userpost &&  <Button  onClick={()=>handleDeletePost(id)}>ELIMINAR</Button>}
      <Link to={"/reports"}> <Button> report</Button> </Link>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox
                icon={<FavoriteBorder/>} checkedIcon={<Favorite sx= {{color: "red"}}/>}
                />
                </IconButton>
            </CardActions>
        </Card>
            </div>)}
        </div>
        
    );
}
