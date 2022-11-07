import './Home.css'
import { Stack } from '@mui/material'
import { Feed } from '../../components/Feed/Feed'
import { Filters } from '../../components/Filters/Filters'
import { Nav } from '../../components/Nav/Nav'
import { AddPost } from '../../components/Add/AddPost'
import { useEffect , useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/actions/posts'
import { createUser } from '../../redux/actions/users'
import { useAuth0 } from "@auth0/auth0-react";
import Filtros from "../Filtros/Filtros.jsx";
import TuneIcon from "@mui/icons-material/Tune";

export const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const allPosts = useSelector((state) => state.Posts);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(createUser({ usuario: user.nickname, email: user.email }));
      dispatch(getPosts());
    }
  }, [isAuthenticated, dispatch]);

  const handlerOpen = (value) => {
    setOpen(value);
  };

  return (
    <div className="home">
      <Nav />
      <div className="homeDividir">
        <div>
        {isAuthenticated &&(
        <div className='home'>
           
                <Filters/>

        </div>)}
        </div>
        <Feed allPosts={allPosts} />
        <div>
          {" "}
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
