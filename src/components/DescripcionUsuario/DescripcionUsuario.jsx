import { useSelector } from 'react-redux'
import './DescripcionUsuario.css'
import PersonIcon from '@mui/icons-material/Person';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import EmailIcon from '@mui/icons-material/Email';
import { Esqueleto } from '../Skeleton/Skeleton'
export const DescUsuario=()=>{
    const User=useSelector(state=>state.UserLoged)
    return(
        <div className='descripcionUsuario'>
            {Object.entries(User).length === 0?(
            <div>
                <Esqueleto type={1}/>
            </div>):(
            <div className='descripCont'>
                <div className='descContLeft'>
                    {User.descripcion?(<div><AccessibilityIcon/> {User.descripcion}</div>):(<div><AccessibilityIcon/> Descripcion</div>)}

                </div>
                <div className='descContRigth'>
                    <div className='desRi'>
                        
                        {User.usuario?(<div className='desc'><PersonIcon/> {User.usuario}</div>):(<div className='desc'><PersonIcon/> Usuario</div>)}
                        {User.email ?(<div className='desc'><EmailIcon/> {User.email}</div>):(<div className='desc'><EmailIcon/> Email</div>)}
                        {User.nombre ?(<div className='desc'><PermContactCalendarIcon/> {User.nombre}</div>):(<div className='desc'><PermContactCalendarIcon/> Nombre</div>)}
                        {User.apellido ?(<div className='desc'> <PermContactCalendarIcon/> {User.apellido}</div>):(<div className='desc'><PermContactCalendarIcon/> Apellido</div>)}
                    </div>
                </div>
            </div>
                )}
        </div>
    )
}
