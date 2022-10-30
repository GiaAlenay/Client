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

            title= "Usuhsdhshbds"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the
                mussels, if you like.
                </Typography>
            </CardContent>
            <CardMedia
            component="img"
            height="20%"
            image="https://www.lighthouselabs.ca/uploads/post/open_graph_image/459/Coding-vs-programming.jpg"
            alt="Paella dish"
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
