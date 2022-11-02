import {MoreVert, Favorite, FavoriteBorder} from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography,Checkbox} from "@mui/material";

export const Post=({titulo,user,texto,media,foto,nombre,apellido, usuario})=>{
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

            title= {nombre && apellido ? nombre + " " + apellido: "usuario"}
            // title={usuario}
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
                <Typography variant="body2" color="text.secondary">
                <a href={media}>arhivo subido</a>
                </Typography>
            </CardContent>
            
            <CardMedia
            component="img"
            height="20%"
            width="50px"
            image={media} 
            alt=" "
            />
           
            
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
