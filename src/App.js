
import {Routes,Route} from 'react-router-dom'
import {Landing} from './view/LandingPage/Landing';
import {Home} from './view/Home/Home'
import {Perfil} from './view/Perfil/Perfil'
import {GoPremium} from './view/GoPremium/GoPremium'
import {TodasNotificacion} from './view/TodasNotificaciones/TodasNotificacion'
import { SearchPag } from './view/SearchPag/SearchPag'
import { About } from './view/About/About';
import PageNotFound from "./view/PageNotFound/PageNotFound.jsx"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route  path='/' element={<Landing/>}/>
      <Route path='/home/:id' element={<Home/>}/>
      <Route path='profile/:id' element={<Perfil/>}/>
      <Route path='/premium' element={<GoPremium/>}/>
      <Route path ='/notificaciones' element={<TodasNotificacion/>}/>
      <Route path ='/search' element={<SearchPag/>}/>
      <Route path ='/SobreNosotros' element={<About/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Perfil/>}/>
        <Route path='/premium' element={<GoPremium/>}/>
        <Route path ='/notificaciones' element={<TodasNotificacion/>}/>
        <Route path ='/search' element={<SearchPag/>}/>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
