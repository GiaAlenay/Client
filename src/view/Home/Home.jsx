import "./Home.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Feed } from "../../components/Feed/Feed";
import { Filters } from "../../components/Filters/Filters";
import { Nav } from "../../components/Nav/Nav";
import { AddPost } from "../../components/Add/AddPost";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, orderLikes } from "../../redux/actions/posts";
import { createUser } from "../../redux/actions/users";

import { useAuth0 } from "@auth0/auth0-react";
import Filtros from "../Filtros/Filtros.jsx";
import FiltroPremium from "../Filtros/FiltroPremium.jsx";
import TuneIcon from "@mui/icons-material/Tune";

import { Link } from "react-router-dom";

import { MiniPerfil } from "../../components/MiniPerfil/MiniPerfil.jsx";

export const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const allPosts = useSelector((state) => state.Posts);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [openPremium, setOpenPremium] = useState(false);

  const [rating, setRating] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(createUser({ usuario: user.nickname, email: user.email }));
      dispatch(getPosts());
    }
  }, [isAuthenticated, dispatch]);

  const handlerOpen = (value) => {
    setOpen(value);
  };
  const handlerOpenPremium = (value) => {
    setOpenPremium(value);
  };

  if (isLoading) {
    return <div>loading</div>;
  }

  function handlerOrderLikes(e) {
    e.preventDefault();
    dispatch(orderLikes(e.target.value));
    setRating(`${e.target.value} `);
  }

  return (
    <div className="home">
      <Nav />
      <div className="homeDividir">
        <div>
          <div>
            <MiniPerfil />
          </div>

          <div className="container">
            <Typography variant="inherit" align="center" sx={{ my: 2 }}>
              Filtrado por Categoria
            </Typography>
            {/* <div className="button"> */}
            <div className={`${open ? "mostrarfiltros" : "nomostrarfiltros"}`}>
              <Filtros open={open} function={handlerOpen} />
            </div>
            <button
              className="butonFiltrosHome"
              onClick={() => {
                setOpen(true);
              }}
            >
              Categoria
              {/* <TuneIcon /> */}
            </button>

            {/* </div> */}
          </div>

          <div className="container">
            <Typography variant="inherit" align="center" sx={{ my: 2 }}>
              Filtrado por Nivel
            </Typography>
            <div
              className={`${
                openPremium ? "mostrarfiltros" : "nomostrarfiltros"
              }`}
            >
              <FiltroPremium open={openPremium} function={handlerOpenPremium} />
            </div>
            <button
              className="butonFiltrosHome"
              onClick={() => {
                setOpenPremium(true);
              }}
            >
              Experiencia
              {/* <TuneIcon /> */}
            </button>
          </div>

          <div>
            <Typography variant="inherit" align="center" sx={{ my: 2 }}>
              Ordenamiento por Likes
            </Typography>
            <FormControl align="center" sx={{ mx: 5, minWidth: 230 }}>
              <InputLabel id="simple-select-label">Favoritos</InputLabel>
              <Select
                labelId="simple-select-label"
                id="simple-select-label"
                value={rating}
                label="rating"
                onChange={handlerOrderLikes}
                renderValue={(value) => `${value} Likes❤️`}
              >
                <MenuItem value={"Mas"}>Mas Likes</MenuItem>
                <MenuItem value={"Menos"}>Menos Likes</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/*
          <div>
            <select onChange={(e) => handlerOrderLikes(e)}>
              <option value="" hidden>
                Rating
              </option>
              <option value="mas">Mas Likes</option>
              <option value="menos">Menos Likes</option>
            </select>
          </div> 
          */}
        </div>
        <Feed allPosts={allPosts} loading={loading} />
        <div className="publicidadEnElHome">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-rLzCRzGR_Scho_i96QmMPBQaJ2fcbsPclrRGjbFKgjLiY-9GiAhzkTmyfK2X6xlUE2g&usqp=CAU"
            alt="publicidad"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-rLzCRzGR_Scho_i96QmMPBQaJ2fcbsPclrRGjbFKgjLiY-9GiAhzkTmyfK2X6xlUE2g&usqp=CAU"
            alt="publicidad"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-rLzCRzGR_Scho_i96QmMPBQaJ2fcbsPclrRGjbFKgjLiY-9GiAhzkTmyfK2X6xlUE2g&usqp=CAU"
            alt="publicidad"
          />
        </div>
      </div>
      <AddPost />
    </div>
  );
};
