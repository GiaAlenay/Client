import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import TextField from '@mui/material/TextField'
import { getUsers, getUserId } from "../../redux/actions/users";
import './IniciarSesion.css'

function Validate(input, users) {
    const foundusuario = users.find(f => f.usuario === input.usuario)
    const foundemail = users.find(f => f.contraseña === input.contraseña)
    const match = users.find(u => u.usuario === input.usuario && u.contraseña === input.contraseña)
    let errors = {};
    if (!input.usuario) { errors.usuario = 'Usuario es requerido' }
    if (!foundusuario) { errors.usuario = 'No existe un usario con ese nombre' }
    if (!input.contraseña) { errors.contraseña = 'La contraseña es requerida' }
    if (!foundemail) { errors.contraseña = 'Contraseña incorrecta.' }
    if (!match) { errors.equivocado = 'Contraseña o  Usuario incorrecto' }
    return errors
}
export const IniciarSesion = () => {
    const dispatch = useDispatch()
    const history = useNavigate()
    const [errors, setErrors] = useState({})
    const users = useSelector(state => state.Users)
    const [input, setinput] = useState({
        usuario: '',
        contraseña: ''
    })
    useEffect(() => {
        dispatch(getUsers())
        setErrors({ incompleto: 'Formulario incompleto' })
    }, [])
    useEffect(() => {
    }, [errors])

    const handleInputChange = (e) => {
        setinput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(Validate({
            ...input,
            [e.target.name]: e.target.value
        }, users))
    }

    const onsubmitHandler = (e) => {
        e.preventDefault()
        if (input.usuario.length === 0 || input.contraseña.length === 0) {
            alert('Formulario incompleto')
        }
        if (errors.equivocado) {
            alert(errors.equivocado)
        }
        else {
            const id = users.map((u) => {
                if (u.usuario === input.usuario && u.contraseña === input.contraseña) {
                    dispatch(getUserId(u.id))
                    history(`/home/${u.id}`)
                }
            })
        }
    }

    return (
        <form onSubmit={onsubmitHandler} className='iniciarSeForm'>
            <div className='inptCont'>
                <TextField
                    type="text"
                    name="usuario"
                    value={input.usuario}
                    onChange={handleInputChange}
                    sx={{ width: '100%', marginTop: '10px', backgroundColor: 'white' }} id="outlined-basic" label="Nombre" variant="outlined" />
                {errors.usuario && (<div className="dangerI">
                    <img src={'warningWhite.png'} alt='!' className='warning' />
                    {errors.usuario}</div>)}
                <TextField
                    type="password"
                    name="contraseña"
                    value={input.contraseña}
                    onChange={handleInputChange}
                    sx={{ width: '100%', marginTop: '10px', backgroundColor: 'white' }} id="outlined-basic" label="Contraseña" variant="outlined" />
                {errors.contraseña && (<div className="dangerI">
                    < img src={'warningWhite.png'} alt='!' className='warning' />
                    {errors.contraseña}</div>)}
                <button type='submit' className='btnIniSe'>Iniciar Sesión</button>
            </div>
        </form>
    )
}