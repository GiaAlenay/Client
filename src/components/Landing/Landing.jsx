
import {Link} from 'react-router-dom'
import s from "./Landing.module.css"

export const Landing =()=>{
    
    return(
        <div className={s.todo}>
        <div className={s.container}>
            <div className={s.Photo}></div>
            <div className={s.Tittle}></div>
            <div className={s.Footer}></div>
            <div className={s.Register}>
                <from> 
                    <p>Completa los datos para crear tu cuenta</p>
                    <label>Nombre</label>
                    <br/>
                    <input placeholder="" type="text" class={s.input}required=""/>
                    <br/>

                    <label>Apellido</label>
                    <br/>
                    <input placeholder="" type="text" class={s.input}required=""/>

                    <br/>
                    <label>Gmail </label>
                    <br/>
                    <input placeholder="" type="text" class={s.input}required=""/>

                    <br/>
                    <label>Contraseña</label>
                    <br/>
                    <input placeholder="" type="text" class={s.input}required=""/>
                    <br/>

                    <br/>

                   <button><Link to="/home">User create </Link></button>



                </from>
            </div>
            
        </div>
        </div>
    )
}

