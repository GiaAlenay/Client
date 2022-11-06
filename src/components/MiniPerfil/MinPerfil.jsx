import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './MiniPerfil.css'

export const MiniPErfil =()=>{
    const navigate= useNavigate()
    const userLoged = useSelector(state => state.UserLoged)
    const handleonClick=()=>{
        navigate('/profile')
    }
    return(
        <div onClick={handleonClick} className='miniperfilCont'>
            <img src={userLoged.foto_principal} className='miniPerMainfoto' alt=' mi foto'/>
            <img src={userLoged.foto_portada} className='miniPersecfoto' alt=' mi foto' />
            <div className='miniPerfinfo'>
                <h2>{userLoged.usuario}</h2>
                {userLoged.nombre !==null && (
                    <span>{userLoged.nombre }</span>
                ) }
                <span> </span>
                {userLoged.apellido !==null && (
                    <span>{ userLoged.apellido}</span>
                ) }
                {userLoged.descripcion !==null &&(
                    <div >
                        {userLoged.descripcion}
                    </div>
                )}
            </div>
        </div>
    )
}