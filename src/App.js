
import {Routes,Route} from 'react-router-dom'
import {Landing} from './view/LandingPage/Landing';
import {Home} from './view/Home/Home'
import {Perfil} from './view/Perfil/Perfil'
import {GoPremium} from './view/GoPremium/GoPremium'
import {TodasNotificacion} from './view/TodasNotificaciones/TodasNotificacion'
import { SearchPag } from './view/SearchPag/SearchPag'
import {SendEmail} from './view/SendEmail/SendEmail'
import {Pay } from './view/Pay/Pay';
import { HomeAdmin } from './components/Admin/HomeAdmin';
import UserInactivo from './components/Admin/UserInactivo';




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
        <Route path='/premium/pay'element={<Pay/>}/>
        <Route path="/send/email" element={<SendEmail/>} />

        {/* Ruta del adminisrador */}
        


        <Route path={'/home/admin'} element ={<HomeAdmin/>}/>
        <Route path={'/UserInactivo'} element= {<UserInactivo/>}/>
      </Routes>
    </div>
  );
}

export default App;
