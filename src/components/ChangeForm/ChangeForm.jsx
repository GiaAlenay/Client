import './ChangeForm.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux';

import { editUser } from '../../redux/actions/users';

import { TextField } from '@mui/material'
import { 
    Person as PersonIcon, 
    Accessibility as AccessibilityIcon, 
    AddPhotoAlternate as AddPhotoAlternateIcon, 
    PermContactCalendar as PermContactCalendarIcon, 
    AddAPhoto as AddAPhotoIcon
} from '@mui/icons-material';

export const ChangeForm=({ User })=>{

    const dispatch = useDispatch()

    const initialInput = {
        nombre: "",
        apellido: "",
        foto_principal: "",
        foto_portada: "",
        descripcion: ""
    }

    const[input,setinput]=useState(initialInput)
    const[change,setChange]=useState({
        usuario:false,
        nombre:false,
        apellido:false,
        foto_principal:false,
        foto_portada:false,
        descripcion:false
    })

    const handleSubmit=async(e)=>{
        e.preventDefault()
        dispatch(editUser(change))
    }
    const handleBtnEditar=(e)=>{
        if(e.target.value==='false'){
            setChange(
                {...change,
                [e.target.name]:true
            })
        }
        else{
            setChange(
                {...change,
                [e.target.name]:false
            })
        }
    }
    const handleInputChange=(e)=>{       
        setinput({
            ...input,
            [e.target.name]:e.target.value 
        })
        // setErrors(Validate(
        //     {...input,
        //     [e.target.name]:e.target.value
        // },users))
     } 
    return(
            <div  >
                {change.nombre?(
                <div className='changeInptCont'>
                <TextField 
                type="text" 
                name="nombre" 
                value={input.nombre}                
                onChange={handleInputChange}
                sx={{width:'82%',backgroundColor:'white',marginLeft: '10%'}} id="outlined-basic" label="Nombre" variant="outlined" />
                    <button 
                    type='button'
                    name='nombre'
                    value={change.nombre}
                    onClick={handleBtnEditar}
                    className='btnFormEditListo'>
                    </button>
                </div >
                ):(
                <div className='changeInptCont'>
                    {User.nombre ?(<div className='descChang'><PermContactCalendarIcon/> {User.nombre}</div>):(<div className='descChang'><PermContactCalendarIcon/> Nombre</div>)}
                    <button 
                    type='button'
                    name='nombre'
                    value={change.nombre}
                    onClick={handleBtnEditar}
                    className='btnFormEdit'>
                    </button>
                </div>
                )}
                {change.apellido?(
                <div className='changeInptCont'>
                <TextField 
                type="text" 
                name="apellido" 
                value={input.apellido}                
                onChange={handleInputChange}
                sx={{width:'82%',backgroundColor:'white',marginLeft: '10%'}} id="outlined-basic" label="apellido" variant="outlined" />
                    <button 
                    type='button'
                    name='apellido'
                    value={change.apellido}
                    onClick={handleBtnEditar}
                    className='btnFormEditListo'>
                    </button>
                </div >
                ):(
                <div className='changeInptCont'>
                    {User.apellido?(<div className='descChang'><PermContactCalendarIcon/> {User.apellido}</div>):(<div className='descChang'><PersonIcon/> apellido</div>)}
                    <button 
                    type='button'
                    name='apellido'
                    value={change.apellido}
                    onClick={handleBtnEditar}
                    className='btnFormEdit'>
                    </button>
                </div>
                )}
                {change.foto_principal?(
                <div className='changeInptCont'>
                <TextField 
                type="text" 
                name="foto_principal" 
                value={input.foto_principal}                
                onChange={handleInputChange}
                sx={{width:'82%',backgroundColor:'white',marginLeft: '10%'}} id="outlined-basic" label="foto principal" variant="outlined" />
                    <button 
                    type='button'
                    name='foto_principal'
                    value={change.foto_principal}
                    onClick={handleBtnEditar}
                    className='btnFormEditListo'>
                    </button>
                </div >
                ):(
                <div className='changeInptCont'>
                    {User.foto_principal?(<div className='descChang'><AddAPhotoIcon/> {'Foto'}</div>):(<div className='descChang'><PersonIcon/> Foto principal</div>)}
                    <button 
                    type='button'
                    name='foto_principal'
                    value={change.foto_principal}
                    onClick={handleBtnEditar}
                    className='btnFormEdit'>
                    </button>
                </div>
                )}
                {change.foto_portada?(
                <div className='changeInptCont'>
                <TextField 
                type="text" 
                name="foto_portada" 
                value={input.foto_portada}                
                onChange={handleInputChange}
                sx={{width:'82%',backgroundColor:'white',marginLeft: '10%'}} id="outlined-basic" label="foto_portada" variant="outlined" />
                    <button 
                    type='button'
                    name='foto_portada'
                    value={change.foto_portada}
                    onClick={handleBtnEditar}
                    className='btnFormEditListo'>
                    </button>
                </div >
                ):(
                <div className='changeInptCont'>
                    {User.foto_portada?(<div className='descChang'><AddPhotoAlternateIcon/> {'Foto Portada'}</div>):(<div className='descChang'><PersonIcon/> foto portada</div>)}
                    <button 
                    type='button'
                    name='foto_portada'
                    value={change.foto_portada}
                    onClick={handleBtnEditar}
                    className='btnFormEdit'>
                    </button>
                </div>
                )}
                {change.descripcion?(
                <div className='changeInptCont'>
                <TextField 
                type="text" 
                name="descripcion" 
                value={input.descripcion}                
                onChange={handleInputChange}
                sx={{width:'82%',backgroundColor:'white',marginLeft: '10%'}} id="outlined-basic" label="descripcion" variant="outlined" />
                    <button 
                    type='button'
                    name='descripcion'
                    value={change.descripcion}
                    onClick={handleBtnEditar}
                    className='btnFormEditListo'>
                    </button>
                </div >
                ):(
                <div className='changeInptCont'>
                    {User.descripcion?(<div className='descChang'><AccessibilityIcon/> {'Descripcion'}</div>):(<div className='descChang'><PersonIcon/> Descripcion</div>)}
                    <button 
                    type='button'
                    name='descripcion'
                    value={change.descripcion}
                    onClick={handleBtnEditar}
                    className='btnFormEdit'>                        
                    </button>
                </div>
                )}
               <button onClick={handleSubmit}  className='btnCreCuenta'>Guardar Cambios</button>
            </div>
    )
}