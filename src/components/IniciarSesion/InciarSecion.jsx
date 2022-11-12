// import { useState, useEffect } from 'react'
// import TextField from '@mui/material/TextField'
// import { useDispatch } from "react-redux";
// import { getUserLoged } from "../../redux/actions/users";
// import './IniciarSesion.css'
// import { useNavigate } from 'react-router-dom';

// function Validate(input,users){
//     const foundusuario=users.find(f=>f.usuario===input.input)        
//     const foundemail=users.find(f=>f.contraseña===input.contraseña)
//     const match=users.find(u=>u.usuario===input.input && u.contraseña===input.contraseña)
//     let errors={};   
//     if(!input.input){errors.input='Usuario o email requerido'}        
//     if(!foundusuario){errors.input='No existe un usario con ese nombre'}   
//     if(!input.contraseña){errors.contraseña='La contraseña es requerida'} 
//     if(!foundemail){errors.contraseña='Contraseña incorrecta.'}
//     if(!match){errors.equivocado='Contraseña o  Usuario incorrecto'}
//     return errors
// }

// export const IniciarSesion=( {users} )=>{
//     const dispatch=useDispatch()
//     const history=useNavigate()
//     const[errors, setErrors]=useState({})
//     const[input, setinput]=useState({ input:'', contraseña:''})

//     // useEffect(()=>{
//     //    setErrors({incompleto:'Formulario incompleto'})     
//     // },[])
   
//     // useEffect(()=>{
        
//     //  },[errors])
    

//     const handleInputChange=(e)=>{
//         setinput({...input,
//             [e.target.name]:e.target.value })
//         setErrors(Validate({...input,
//             [e.target.name]:e.target.value},users))
//     } 
    
//     const onsubmitHandler= (e)=>{
//         e.preventDefault()
//         if(input.input.length===0 || input.contraseña.length===0 || errors.equivocado ){
//             alert('Formulario incompleto')
//         }
//         else{  
//             dispatch(getUserLoged(input))
//             .then(()=> history(`/home`))
//             .catch(e=>console.log(e))
//         }   
//     }
//     return(
//         <form onSubmit={onsubmitHandler} className='iniciarSeForm'>
//             <div className='inptCont'>
//             <TextField 
//                 type="text" 
//                 name="input" 
//                 value={input.input}                
//                 onChange={handleInputChange}
//                 sx={{width:'100%',marginTop: '10px',backgroundColor:'white'}} id="outlined-basic" label="Usuario o email" variant="outlined" />
           
//                 {errors.input && (<div className="dangerI">
//                     <img src={'warningWhite.png'} alt='!' className='warning'/>
//                     {errors.input}</div>)}
           
//             <TextField 
//                 type="password" 
//                 name="contraseña" 
                             
//                 onChange={handleInputChange}
//                 sx={{width:'100%',marginTop: '10px',backgroundColor:'white'}} id="outlined-basic" label="Contraseña" variant="outlined" />
            
//                 {errors.contraseña && (<div className="dangerI">
//                     < img src={'warningWhite.png'} alt='!' className='warning'/>
//                     {errors.contraseña}</div>)}
            
//             <button  type='submit' className='btnIniSe'>Iniciar Sesión</button>
//             </div>
            
//         </form>
            
//     )
// }