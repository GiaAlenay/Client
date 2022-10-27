
import {Link} from 'react-router-dom'
// import s from "./Landing.module.css"

export const Landing =()=>{
    
    return(
        <div >
            <div >
                <from> 
                    <p>Completa los datos para crear tu cuenta</p>
                    <label>Nombre</label>
                    <br/>
                    <input placeholder="" type="text" />
                    <br/>

                    <label>Apellido</label>
                    <br/>
                    <input placeholder="" type="text" />

                    <br/>
                    <label>Gmail </label>
                    <br/>
                    <input placeholder="" type="text" />

                    <br/>
                    <label>Contraseña</label>
                    <br/>
                    <input placeholder="" type="text" />
                    <br/>

                    <br/>
                   <button><Link to="/home">Ingresar </Link></button>
                </from>
            </div>
        
        </div>
    )
}

