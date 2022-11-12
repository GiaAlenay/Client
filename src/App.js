
import {Routes,Route} from 'react-router-dom'
import {Landing} from './view/LandingPage/Landing';
import {Home} from './view/Home/Home'
import {Perfil} from './view/Perfil/Perfil'
import {GoPremium} from './view/GoPremium/GoPremium'
import {TodasNotificacion} from './view/TodasNotificaciones/TodasNotificacion'
import { SearchPag } from './view/SearchPag/SearchPag'
import PageNotFound from "./view/PageNotFound/PageNotFound.jsx"
import { HomeAdmin } from './components/Admin/HomeAdmin';
import UserInactivo from './components/Admin/UserInactivo';
import {FeedBack} from './view/FeedBack/FeedBack'
//useSerchParam
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Perfil/>}/>
        <Route path='/premium' element={<GoPremium/>}/>
        <Route path ='/notificaciones' element={<TodasNotificacion/>}/>
        <Route path ='/search' element={<SearchPag/>}/>
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/premium/feedback" element={<FeedBack/>}/> 
        {/* Ruta del adminisrador */}

        <Route path={'/home/admin'} element ={<HomeAdmin/>}/>
        <Route path={'/UserInactivo'} element= {<UserInactivo/>}/>
      </Routes>
    </div>
  );
}

export default App;
