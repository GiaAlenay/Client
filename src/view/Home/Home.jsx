import "./Home.css";
import { Stack } from "@mui/material";
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
    setRating(`RATING ${e.target.value} `);
  }

  return (
    <div className="home">
      <Nav />
      <div className="homeDividir">
        <div>
          <div>
            <MiniPerfil />
          </div>
          <div className={`${open ? "mostrarfiltros" : "nomostrarfiltros"}`}>
            <Filtros open={open} function={handlerOpen} />
          </div>
          <button
            className="butonFiltrosHome"
            onClick={() => {
              setOpen(true);
            }}
          >
            <TuneIcon />
          </button>
          <div
            className={`${openPremium ? "mostrarfiltros" : "nomostrarfiltros"}`}
          >
            <FiltroPremium open={openPremium} function={handlerOpenPremium} />
          </div>
          <button
            className="butonFiltrosHome"
            onClick={() => {
              setOpenPremium(true);
            }}
          >
            <TuneIcon />
          </button>

       

          <div>
            <select onChange={(e) => handlerOrderLikes(e)}>
              <option value="" hidden>
                Rating
              </option>
              <option value="mas">Mas Likes</option>
              <option value="menos">Menos Likes</option>
            </select>
              <div>
                <Link to={"/send/email"}><button>Ponete la Gorra</button></Link>
              </div>
          </div>
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
