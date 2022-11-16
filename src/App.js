
import {Routes,Route} from 'react-router-dom'
import {Landing} from './view/LandingPage/Landing';
import {Home} from './view/Home/Home'
import {Perfil} from './view/Perfil/Perfil'
import {GoPremium} from './view/GoPremium/GoPremium'
import {TodasNotificacion} from './view/TodasNotificaciones/TodasNotificacion'
import { SearchPag } from './view/SearchPag/SearchPag'
import {SendEmail} from './view/SendEmail/SendEmail'

import { HomeAdmin } from './components/Admin/HomeAdmin';
import UserInactivo from './components/Admin/UserInactivo';
import { About } from './view/About/About';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51M4XYbIEql9X77EB4U7ERhLxGQShcpxXee12qTJ9dgqKm8PTzesw1ed1S5uYFrsJzE0low9iaKOfLbM5fUKYNYGV00zCqttqV1');

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Perfil/>}/>
        <Route path='/premium' element={<Elements stripe={stripePromise} > <GoPremium/> </Elements>}/>
        <Route path ='/notificaciones' element={<TodasNotificacion/>}/>
        <Route path ='/search' element={<SearchPag/>}/>
       
        <Route path="/send/email" element={<SendEmail/>} />
        <Route path ='/SobreNosotros' element={<About/>}/>

        {/* Ruta del adminisrador */}
        
        <Route path={'/home/admin'} element ={<HomeAdmin/>}/>
        <Route path={'/UserInactivo'} element= {<UserInactivo/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
