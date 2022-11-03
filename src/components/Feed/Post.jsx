import {MoreVert, Favorite, FavoriteBorder} from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography,Checkbox, Button} from "@mui/material";
import { useDispatch } from "react-redux";
import {deletePost} from '../../redux/actions/posts'
export const Post=({titulo,user,texto,media,foto,id})=>{
const dispatch= useDispatch()
function handleDeletePost(e){
    
    dispatch(deletePost(e))
}
    return(
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

            title= {user}
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
            {media.slice(-3) === "pdf"? 
                <Typography variant="body2" color="text.secondary">
                <a href={media}>arhivo subido</a>
                </Typography> :<CardMedia
            component="img"
            height="20%"
            width="50px"
            image={media} 
            alt=" "
            />}
            
           <Button  onClick={()=>handleDeletePost(id)}>ELIMINAR</Button>
            
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox
                icon={<FavoriteBorder/>} checkedIcon={<Favorite sx= {{color: "red"}}/>}
                />
                </IconButton>

            </CardActions>
        </Card>
    );
}
