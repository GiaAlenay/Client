import { useState,useEffect } from 'react'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from "react-redux";
import { getUsers,getUser } from "../../redux/actions/users";
import './IniciarSesion.css'
import { useNavigate } from 'react-router-dom';
function Validate(input,users){
    console.log('a'+users[0].name)
    let errors={};   
        const foundName=users.find(f=>f.name.toLowerCase()===input.name.toLowerCase())        
        const foundapellido=users.find(f=>f.apellido===input.apellido)
        if(!input.name){errors.name='Nombre es requerido'}        
        if(!foundName){errors.name='No existe un usario con ese nombre'}   
        if(!input.apellido){errors.apellido='Apellido es requerido'} 
        if(!foundapellido){errors.apellido='No existe un usario con ese apellido '}
       
        return errors
    
}
export const IniciarSesion=()=>{
    const dispatch=useDispatch()
    const history=useNavigate()
    const[errors, setErrors]=useState({})
    const users=useSelector(state=>state.Users)
    const[input,setinput]=useState({        name:'',
                                            apellido:''})

    useEffect(()=>{
       dispatch(getUsers())
       setErrors({incompleto:'Formulario incompleto'})     
    },[])
   
    useEffect(()=>{
        
     },[errors])
    

        const handleInputChange=(e)=>{
        setinput({...input,
            [e.target.name]:e.target.value })
        setErrors(Validate({...input,
            [e.target.name]:e.target.value},users))
    } 
    
    const onsubmitHandler=(e)=>{
        e.preventDefault()
        if(input.name.length===0 || input.apellido.length===0 ){
            alert('Formulario incompleto')
        }
        if(Object.entries(errors).length !== 0){
            alert('No existe usuario '+input.name+' '+input.apellido)
        }
        else{
            const id=users.map((u)=>{if(u.name===input.name && u.apellido===input.apellido){ 
                dispatch(getUser(u.id))
            console.log(u.id)
            history(`/home/${u.id}`)
                }})
            

     }
        
        
    }
    return(
        <form onSubmit={onsubmitHandler} className='iniciarSeForm'>
            <div className='inptCont'>
            <TextField 
                type="text" 
                name="name" 
                value={input.name}                
                onChange={handleInputChange}
                sx={{width:'100%',marginTop: '20px',backgroundColor:'white'}} id="outlined-basic" label="Nombre" variant="outlined" />
           
                {errors.name && (<div className="danger">{errors.name}</div>)}
           
            <TextField 
                type="text" 
                name="apellido" 
                value={input.apellido}                
                onChange={handleInputChange}
                sx={{width:'100%',marginTop: '20px',backgroundColor:'white'}} id="outlined-basic" label="Apellido" variant="outlined" />
            
                {errors.apellido && (<div className="danger">{errors.apellido}</div>)}
            
            <button  type='submit' className='btnIniSe'>Iniciar Sesión</button>
            </div>
            
        </form>
            
    )
}