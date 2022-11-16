
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
import StripeCheck from './view/Pay/StripeCheck';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe("pk_test_51M4XYbIEql9X77EB4U7ERhLxGQShcpxXee12qTJ9dgqKm8PTzesw1ed1S5uYFrsJzE0low9iaKOfLbM5fUKYNYGV00zCqttqV1");


function App() {

  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_51M4XYbIEql9X77EBzKonxJpaGRoqHvufT3XLhV2sWbGUFenpZ6tsLPMW3Jn5uMirPe96T7OacjD65fsdr0LSwm7M00qKOcsbaT',
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Perfil/>}/>
        <Route path='/premium/pay' element={<Pay/>}/>
        <Route path='/premium' element={<GoPremium/>}/>
        <Route path ='/notificaciones' element={<TodasNotificacion/>}/>
        <Route path ='/search' element={<SearchPag/>}/>
        <Route path="/send/email" element={<SendEmail/>} />

        {/* Ruta del adminisrador */}
        
        <Route path="/stripe" element={<Elements stripe={stripePromise} > <StripeCheck/> </Elements>} />
        
        

        <Route path={'/home/admin'} element ={<HomeAdmin/>}/>
        <Route path={'/UserInactivo'} element= {<UserInactivo/>}/>
      </Routes>
    </div>
  );
}

export default App;
