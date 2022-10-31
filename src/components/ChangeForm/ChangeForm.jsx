import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import PersonIcon from '@mui/icons-material/Person';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from 'axios';
import './ChangeForm.css'

export const ChangeForm = () => {
    const { id } = useParams();
    const User = useSelector(state => state.User)
    const [input, setinput] = useState({})
    const [change, setChange] = useState({
        usuario: false,
        nombre: false,
        apellido: false,
        foto_principal: false,
        foto_portada: false,
        descripcion: false

    })

    const handleSubmit = async (e) => {

        e.preventDefault()
        const re = await axios.patch(`/users/${id}`, input)
            .then(d => {
                return d.data.msg
            })
            .catch(error => {
                console.log(error)
                return "No se pudo completar los cambios, intente mas tarde"
            })
        alert(re)
        window.location.reload()
    }
    const handleBtnEditar = (e) => {
        if (e.target.value === 'false') {
            setChange({
                ...change,
                [e.target.name]: true
            })
        }
        else {
            setChange({
                ...change,
                [e.target.name]: false
            })
        }
    }
    const handleInputChange = (e) => {

        setinput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div  >
            {change.nombre ? (
                <div className='changeInptCont'>
                    <TextField
                        type="text"
                        name="nombre"
                        value={input.name}
                        onChange={handleInputChange}
                        sx={{ width: '82%', backgroundColor: 'white', marginLeft: '10%' }} id="outlined-basic" label="Nombre" variant="outlined" />
                    <button
                        type='button'
                        name='nombre'
                        value={change.nombre}
                        onClick={handleBtnEditar}
                        className='btnFormEditListo'>
                    </button>
                </div >
            ) : (
                <div className='changeInptCont'>
                    {User.user.nombre ? (<div className='descChang'><PermContactCalendarIcon /> {User.user.nombre}</div>) : (<div className='descChang'><PermContactCalendarIcon /> Nombre</div>)}
                    <button
                        type='button'
                        name='nombre'
                        value={change.nombre}
                        onClick={handleBtnEditar}
                        className='btnFormEdit'>

                    </button>
                </div>
            )}
            {change.apellido ? (
                <div className='changeInptCont'>
                    <TextField
                        type="text"
                        name="apellido"
                        value={input.apellido}
                        onChange={handleInputChange}
                        sx={{ width: '82%', backgroundColor: 'white', marginLeft: '10%' }} id="outlined-basic" label="apellido" variant="outlined" />
                    <button
                        type='button'
                        name='apellido'
                        value={change.apellido}
                        onClick={handleBtnEditar}
                        className='btnFormEditListo'>

                    </button>
                </div >
            ) : (
                <div className='changeInptCont'>
                    {User.user.apellido ? (<div className='descChang'><PermContactCalendarIcon /> {User.user.apellido}</div>) : (<div className='descChang'><PersonIcon /> apellido</div>)}
                    <button
                        type='button'
                        name='apellido'
                        value={change.apellido}
                        onClick={handleBtnEditar}
                        className='btnFormEdit'>

                    </button>
                </div>
            )}
            {change.foto_principal ? (
                <div className='changeInptCont'>
                    <TextField
                        type="text"
                        name="foto_principal"
                        value={input.foto_principal}
                        onChange={handleInputChange}
                        sx={{ width: '82%', backgroundColor: 'white', marginLeft: '10%' }} id="outlined-basic" label="foto principal" variant="outlined" />
                    <button
                        type='button'
                        name='foto_principal'
                        value={change.foto_principal}
                        onClick={handleBtnEditar}
                        className='btnFormEditListo'>
                    </button>
                </div >
            ) : (
                <div className='changeInptCont'>
                    {User.user.foto_principal ? (<div className='descChang'><AddAPhotoIcon /> {'Foto'}</div>) : (<div className='descChang'><PersonIcon /> Foto principal</div>)}
                    <button
                        type='button'
                        name='foto_principal'
                        value={change.foto_principal}
                        onClick={handleBtnEditar}
                        className='btnFormEdit'>
                    </button>
                </div>
            )}
            {change.foto_portada ? (
                <div className='changeInptCont'>
                    <TextField
                        type="text"
                        name="foto_portada"
                        value={input.name}
                        onChange={handleInputChange}
                        sx={{ width: '82%', backgroundColor: 'white', marginLeft: '10%' }} id="outlined-basic" label="foto_portada" variant="outlined" />
                    <button
                        type='button'
                        name='foto_portada'
                        value={change.foto_portada}
                        onClick={handleBtnEditar}
                        className='btnFormEditListo'>
                    </button>
                </div >
            ) : (
                <div className='changeInptCont'>
                    {User.user.foto_portada ? (<div className='descChang'><AddPhotoAlternateIcon /> {'Foto Portada'}</div>) : (<div className='descChang'><PersonIcon /> foto portada</div>)}
                    <button
                        type='button'
                        name='foto_portada'
                        value={change.foto_portada}
                        onClick={handleBtnEditar}
                        className='btnFormEdit'>
                    </button>
                </div>
            )}
            {change.descripcion ? (
                <div className='changeInptCont'>
                    <TextField
                        type="text"
                        name="descripcion"
                        value={input.name}
                        onChange={handleInputChange}
                        sx={{ width: '82%', backgroundColor: 'white', marginLeft: '10%' }} id="outlined-basic" label="descripcion" variant="outlined" />
                    <button
                        type='button'
                        name='descripcion'
                        value={change.descripcion}
                        onClick={handleBtnEditar}
                        className='btnFormEditListo'>
                    </button>
                </div >
            ) : (
                <div className='changeInptCont'>
                    {User.user.descripcion ? (<div className='descChang'><AccessibilityIcon /> {'Descripcion'}</div>) : (<div className='descChang'><PersonIcon /> Descripcion</div>)}
                    <button
                        type='button'
                        name='descripcion'
                        value={change.descripcion}
                        onClick={handleBtnEditar}
                        className='btnFormEdit'>
                    </button>
                </div>
            )}
            <button onClick={handleSubmit} className='btnCreCuenta'>Guardar Cambios</button>
        </div>
    )
}