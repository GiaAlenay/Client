import './Coments.css'
import { Coment } from '../Coment/Coment'
import { useEffect } from 'react'
export const Coments=({coments})=>{
    
    return(
        <div>
            {coments?.map((c)=>{
                return(

                    <Coment
                        id={c.id}
                        contenido={c.contenido}
                        idAuthor={c.user.id}
                        usuario={c.user.usuario}
                        foto_principal={c.user.foto_principal}/>
                )
            })}
        </div>
    )
}