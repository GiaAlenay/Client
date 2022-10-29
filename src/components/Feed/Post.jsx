import {MoreVert, Favorite, FavoriteBorder} from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography,Checkbox} from "@mui/material";
import { Link } from "react-router-dom";
const user={
    id:1,
    name:'Henry',
    apellido:'Luna',
    image:'https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=640:*'
  }

export const Post=({titulo,texto,media,userId})=>{
    return(
        <Card sx= {{margin: 5, marginRight:35}}>
           
            <CardHeader

            avatar ={
                <Link to= {`/profile/${user.id}`}>
                  <Avatar sx={{width:50, height:50}}>
                    <img src={user.image} alt="image not found" height={50}/>
                    
                </Avatar>
                
                </Link>
              
            }
            action ={
                <IconButton aria-label="settings">
                    <MoreVert/>
                </IconButton>
            }

            title= {`${user.name} ${user.apellido}`}

            
            />

            <CardContent>
            <CardMedia
            height="50%"
            // image="https://upload.wikimedia.org/wikipedia/commons/9/91/JavaScript_screenshot.png"
            // alt="image not found"
            >
                <img src={media} alt={media}/>
            </CardMedia>
            

            </CardContent>
           
             <CardContent>
                <Typography variant="body2" color="text.secondary">
                {titulo}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {texto}
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
