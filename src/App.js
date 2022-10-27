// import {Button,Stack} from '@mui/material'
import{Routes,Route} from 'react-router-dom'
import {Landing} from './view/LandingPage/Landing';
import {Home} from './view/Home/Home'
import {Perfil} from './view/Perfil/Perfil'
import{GoPremium} from './view/GoPremium/GoPremium'
function App() {
  return (
    <div className="App">
      <Routes>
      <Route  path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='profile/:id' element={<Perfil/>}/>
      <Route path='/premium' element={<GoPremium/>}/>
      </Routes>
    </div>
  );
}

export default App;
