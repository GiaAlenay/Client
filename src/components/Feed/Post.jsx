import {MoreVert, Favorite, FavoriteBorder} from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography,Checkbox} from "@mui/material";

export const Post=()=>{
    return(
        <Card sx= {{margin: 5}}>
            <CardHeader
            avatar ={
                <Avatar sx={{bgcolor:"blue"}}>
                    US
                </Avatar>
            }
            action ={
                <IconButton aria-label="settings">
                    <MoreVert/>
                </IconButton>
            }

            title= "Usuario 1"
            />
            <CardMedia
            component="img"
            height="20%"
            image="https://upload.wikimedia.org/wikipedia/commons/9/91/JavaScript_screenshot.png"
            alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the
                mussels, if you like.{e.texto}
                </Typography>
            </CardContent>
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
