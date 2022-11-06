import './SearchPag.css'
import { Nav } from "../../components/Nav/Nav"
import { MiniPErfil } from '../../components/MiniPerfil/MinPerfil'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
export const SearchPag=()=>{
    const navigate= useNavigate()
    const searchResponse=useSelector(state=>state.searchResponse)
    const loading=useSelector(state=>state.loading)
    const handleonClickAbout=()=>{
        navigate('/about')
    }
    return(
        <div className='searchPAg'>
            <Nav/>
            <div className='searchPAgFilas'>
              <div>
              <MiniPErfil/>
                <div onClick={handleonClickAbout} className='AboutonHome'>About</div> 
            </div>  
            <div>
                {loading?(
                    <>loading...</>
                ):(<div>
                    {Object.entries(searchResponse).length === 0?(
                    <div> Nada que mostrar</div>):(
                    <div> 
                         <h1>Usuarios</h1>
                      {searchResponse.usuarios?.map(s=>{
                        return(
                            <div>
                                {s.usuario}
                                <br></br>
                                {s.nombre}
                                <br></br>
                                {s.apellido}
                                <br></br>
                                {s.descripcion}
                                <br></br>
                            </div>
                        )
                      })}

                      <h1>Posts</h1>

                      {searchResponse.posts?.map(s=>{
                        return(
                            <div>
                                {s.titulo}
                                <br></br>
                                {s.texto}
                                <br></br>
                                <img src={s.media} alt='media'/>
                            </div>
                        )
                      })}  
                    </div>)}
                </div>)}
            </div>
            <div>
                <button>Todos</button>
                <br></br>
                <button>Personas</button>
                <br></br>
                <button>
                    Publicaciones
                </button>
            </div>
            </div>
        </div>
    )
}