import { MoreVert, Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Checkbox,
  Button,
} from "@mui/material";

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
export const Post = ({ titulo, userpost, texto, media, foto, id, likes }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const userLoged = useSelector((state) => state.UserLoged);
  const [likeComprobacion, setLikeComprobacion] = useState(false);
  const [contador, setContador] = useState(0);


  useEffect(() => {
    if (likes.includes(userLoged.id)) setLikeComprobacion(true);
  }, [likes]);

  function handleDeletePost(e) {
    dispatch(deletePost(e));
  }
  function handleDeleteFav(e){
    dispatch(deleteFav(e))
  }
  function handleAddFav(e){
     dispatch(AddToFav(e))
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
        return <a href={e}> archivo subido </a>;
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
          <Card sx={{ xs: 8, margin: 2, marginRight: 50, width: "600px" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "blue" }}>
                  <img src={foto} alt="foto" height={40} />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title={userpost}
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
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

           
            

            <br />
            {!isLoading && isAuthenticated && user.nickname === userpost && (
              <Button onClick={() => handleDeletePost(id)}>ELIMINAR</Button>
            )}
            {!isLoading && isAuthenticated && <Button  onClick={()=>handleDeleteFav(id)}>ELIMINAR Favoritos</Button>}

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
              <IconButton aria-label="add to favorites" onClick={() => handleAddFav(id)}>
                <Checkbox
                  icon={
                    likeComprobacion ? (
                      <StarIcon sx={{ color: "orange" }} />
                    ) : (
                      <FavoriteBorder />
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
