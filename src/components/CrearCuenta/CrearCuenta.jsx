import './CrearCuenta.css'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const axios = require('axios')
export const CrearCuenta=(props )=>{
    const history=useNavigate()
    const users=useSelector(state=>state.Users)
    const[input,setinput]=useState({        name:'',
                                            descripcion:'',
                                            apellido:''})
    const onClose=()=>{
        props.onClose(false)
    }
    const handleInputChange=(e)=>{
        setinput({...input,
            [e.target.name]:e.target.value })
        // setErrors(Validate({...input,
        //     [e.target.name]:e.target.value},users))
    } 
    const handleCrearCuenta=async (e)=>{
        e.preventDefault()
        console.log('post')
        const re= await  axios.post('/users', input)
         .then(d=> 
            {   
            
            return"Account created successfully."
                })
         .catch(e=> {        
         return"we could not complete your request , try again later :("
             })   
        alert(re)
        history(`/home/${users.length+1}`)
    }
    return(
        <div className='ChangeProfileFormCont'>

            <form className=' createAccount'>
                <button className=' closeBtn' onClick={onClose}>x</button>
                <span className='EditarPerf'>Crear Cuenta</span>
                <hr></hr>
                <TextField 
                type="text" 
                name="name" 
                value={input.name}                
                onChange={handleInputChange}
                sx={{width:'80%',marginTop: '20px',backgroundColor:'white',marginLeft: '10%'}} id="outlined-basic" label="Nombre" variant="outlined" />

                <TextField 
                type="text" 
                name="apellido" 
                value={input.apellido}                
                onChange={handleInputChange}
                sx={{width:'80%',marginTop: '20px',backgroundColor:'white',marginLeft: '10%'}} id="outlined-basic" label="Apellido" variant="outlined" />

                <TextField 
                type="text" 
                name="descripcion" 
                value={input.descripcion}                
                onChange={handleInputChange}
                sx={{width:'80%',marginTop: '20px',backgroundColor:'white',marginLeft: '10%'}} id="outlined-basic" label="Descripcion" variant="outlined" />
               
               <button onClick={handleCrearCuenta} className='btnCreCuenta'>Crear cuenta</button>

            </form>
        </div>
            
    )
}