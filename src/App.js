// import {Button,Stack} from '@mui/material'
import{Routes,Route} from 'react-router-dom'
import {Landing} from './components/Landing/Landing';
import {Home} from './components/Home/Home'
import {Perfil} from './components/Perfil/Perfil'
import{GoPremium} from './components/GoPremium/GoPremium'
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
