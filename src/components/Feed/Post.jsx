import { MoreVert, Favorite, FavoriteBorder, StarBorder, Grade } from "@mui/icons-material";
import {Avatar,Card,CardActions,CardContent,CardHeader,CardMedia,IconButton,Typography,Checkbox,Button, MenuItem,Menu} from "@mui/material";

import parse from "html-react-parser";
import { deletePost, editPost, getPosts } from "../../redux/actions/posts";
import {AddToFav} from "../../redux/actions/fav"
import {deleteFav} from "../../redux/actions/fav";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate , Link} from "react-router-dom";
import Swal from "sweetalert2";
export const Post = ({ titulo, userpost, texto, media, foto, id, likes }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLoged = useSelector((state) => state.UserLoged);
  const [likeComprobacion, setLikeComprobacion] = useState(false);
  const [contador, setContador] = useState(0);
  const [starComprobacion, setStarComprobacion] = useState(false);


  //////////////////////////////////
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
//////////////////////////////////
  useEffect(() => {
    if (likes.includes(userLoged.id)) setLikeComprobacion(true);
  }, [likes]);

  function handleDeletePost(e) {
    dispatch(deletePost(e));
    Swal.fire({
      title: "Post eliminado correctamente",
      color: "#382c4b",
      icon: "success",
      confirmButtonColor: "#382c4b",
      confirmButtonText: "OK",
      background: "#e8e8e8",
  })

  }
  function handleDeleteFav(e){
    dispatch(deleteFav(e))
    setStarComprobacion(false)
    Swal.fire({
      title: "Post eliminado de Favorito correctamente",
      color: "#382c4b",
      icon: "success",
      confirmButtonColor: "#382c4b",
      confirmButtonText: "OK",
      background: "#e8e8e8",
  })
  navigate("/profile");

  }
  function handleAddFav(e){
     dispatch(AddToFav(e))
    setStarComprobacion(true)
     Swal.fire({
      title: "Post agregado a Favorito correctamente",
      color: "#382c4b",
      icon: "success",
      confirmButtonColor: "#382c4b",
      confirmButtonText: "OK",
      background: "#e8e8e8",
  })
  navigate("/profile");
  }

  function handleEditLikePost(e) {
    e.preventDefault();
    setContador(likes.length);
    console.log("dale que va");
    if (!likes.find((elem) => elem === userLoged.id)) {
      setLikeComprobacion(true);
      likes = [...likes, userLoged.id];
      setContador(likes.length + 1);
      dispatch(
        editPost({
          id,
          likes,
        })
      );
    } else {
      setLikeComprobacion(false);
      setContador(likes.length - 1);
      dispatch(
        editPost({
          id,
          likes: likes.filter((i) => i !== userLoged.id),
        })
      );
    }
  }

  function verificarMedia(e) {
    if (e === null) {
      return <> </>;
    } else {
      const archivo = e.slice(-3);
      if (archivo === "pdf") {
        return <a href={e} target="_blank"> archivo subido </a>;
      }
      if (archivo !== "pdf") {
        return (
          <CardMedia
            component="img"
            height="20%"
            width="50px"
            image={media}
            alt=" "
          />
        );
      }
    }
  }

  function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    var youtubeRegex =
      /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?=]*)?/;

    return text?.replace(urlRegex, function (url) {
      if (url.match(youtubeRegex)) {
        return (
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
          url.slice(-11) +
          '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        );
      }
      return '<a href="' + url + '">' + url + "</a>";
    });
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
  }
  if (isLoading) {
    return <>loading</>;
  }

  return (
    <div>
      {isAuthenticated && (
        <div>
          <Card sx={{ xs: 8, margin: 1, marginRight: 50, width: "600px" }}>
            <CardHeader
              avatar={
                <Link to ="/profile">
                 <Avatar>
                  <img src={foto} alt="foto" height={40} />
                </Avatar>
                </Link>
               
              }
              action={
                <IconButton aria-label="settings">
                  {/* <MoreVert 
                  onClick={handleClick}
                  /> */}
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                  <MoreVert/>
                  </Button>
                    <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                    >
                    {!isLoading && isAuthenticated && user.nickname == userpost ? (
                    <MenuItem onClick={(e)=> handleDeletePost(id)}>Eliminar Post</MenuItem>
                    ):(
                    <></>
                    )}
                    {!isLoading && isAuthenticated ? 
                    (
                    <MenuItem onClick={()=>handleDeleteFav(id)}>Eliminar Favorito</MenuItem>
                    ):(
                      <></>
                    )}
              </Menu>
              </IconButton>

              }
              //////////////////////////////////
           
              title={userpost}
              
            />


            <CardContent>
              <Typography variant="h5" >
                {titulo}
              </Typography>
            </CardContent>

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {texto && parse(urlify(texto))}
              </Typography>
            </CardContent>

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {media && verificarMedia(media)}
              </Typography>
            </CardContent>

            {/* {!isLoading && isAuthenticated && user.nickname === userpost && (
              <Button onClick={() => handleDeletePost(id)}>ELIMINAR</Button>
            )} */}
            {/* {!isLoading && isAuthenticated && <Button  onClick={()=>handleDeleteFav(id)}>ELIMINAR Favoritos</Button>} */}

            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={handleEditLikePost}
              >
                {likes.length}

                <Checkbox
                  icon={
                    likeComprobacion ? (
                      <Favorite sx={{ color: "red" }} />
                    ) : (
                      <FavoriteBorder />
                    )
                  }
                />
              </IconButton>
              <IconButton aria-label="add to favorites" 
              onClick={() => handleAddFav(id)}>
                <Checkbox
                  icon={setStarComprobacion ? (< Grade sx={{ color: "orange" }} />
                    ) : (
                     <StarBorderIcon />
                    )
                  }
                />
            </IconButton>
            </CardActions>
          </Card>
        </div>
      )}
    </div>
  );
};
