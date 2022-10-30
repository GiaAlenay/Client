import './CrearCuenta.css'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {createUser} from '../../redux/actions/users';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Validate(input,users){
    
    const regexEmail= /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    
    let errors={};   
        const foundusuario=users.find(f=>f.usuario===input.usuario)        
        const foundemail=users.find(f=>f.email===input.email)
        if(!input.usuario || input.usuario.length===0){errors.usuario='Nombre es requerido'}        
        if(foundusuario){errors.usuario='Ya existe un usario con ese nombre'}   
        if(!input.email || input.email.length===0){errors.email='Email es requerido'} 
        if(!input.email.match(regexEmail)){errors.email='Email no Valido'} 
        if(foundemail){errors.email='Ya existe un usario con este email '}
        if(!input.contraseña || input.contraseña.length===0){errors.contraseña='Contraseña es requerida'}
       if(!input.contraseña.match(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)){errors.contraseña='Contraseña invalida'}
        return errors
    
}
export const CrearCuenta=( )=>{
    const dispatch=useDispatch()
    const history=useNavigate()
    const[mayor,setMayor]=useState(0)
    const[errors, setErrors]=useState({})
    const users=useSelector(state=>state.Users)  
    const mensajeResultado=useSelector(state=>state.mensajeResultado)
    const[input,setinput]=useState({        usuario:'',
                                            email:'',
                                            contraseña:''})
                                            
    const [show,setShow]=useState(false)
    
    const handleInputChange=(e)=>{
        users.map((u)=>{
            if(u.id>mayor){setMayor(u.id)}})    
        setinput({...input,
            [e.target.name]:e.target.value })
        setErrors(Validate({...input,
            [e.target.name]:e.target.value},users))
    } 
    const handleCrearCuenta=async (e)=>{
        e.preventDefault()
        console.log('post')
        if(input.usuario.length===0 || input.email.length===0 || input.contraseña.length===0){
            alert('Formulario incompleto')
        }
        if(Object.entries(errors).length !== 0){
            alert('Formulario incompleto')
        }
        else{                
            dispatch(createUser(input))            
            alert('Cuenta creada exitosamente')           
                 history(`/home/${mayor+1}`)
            }
        }
       
        
        
    
    const handleClickShowPassword=()=>{
        setShow(!show)
    }
    return(
       

            <form className=' createAccount'>
                
                <TextField 
                type="text" 
                name="usuario" 
                value={input.usuario}                
                onChange={handleInputChange}
                sx={{width:'80%',marginTop: '20px',backgroundColor:'white',marginLeft: '10%'}} id="outlined-basic" label="Usuario" variant="outlined" />
                {errors.usuario && (<div className="danger">
                    <img src={'warning.png'} alt='!' className='warning'/>
                    {errors.usuario}</div>)}
                
                <TextField 
                type="text" 
                name="email" 
                value={input.email}                
                onChange={handleInputChange}
                sx={{width:'80%',marginTop: '20px',backgroundColor:'white',marginLeft: '10%'}} id="outlined-basic" label="Email" variant="outlined" />
                    {errors.email && (<div className="danger">
                    <img src={'warning.png'} alt='!' className='warning'/>
                        {errors.email}</div>)}
                
               
               <FormControl sx={{width:'80%',marginTop: '20px',backgroundColor:'white',marginLeft: '10%'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={show ? 'text' : 'password'}
                        value={input.contraseña}
                        name="contraseña" 
                        onChange={handleInputChange}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            
                            edge="end"
                            >
                            {show ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Contraseña"
                    />
                </FormControl>
                {errors.contraseña && (<div className="danger">
                    <img src={'warning.png'} alt='!' className='warning'/>
                    {errors.contraseña}</div>)}
               <button onClick={handleCrearCuenta} className='btnCreCuenta'>Crear cuenta</button>

            </form>
       
            
    )
}