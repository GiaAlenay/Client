import React { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {creatPost} from "../../redux/actions/users"




export const AddPost =() => {

    const dispatch = useDispatch();
    const [input, setInput] = useState({
    titulo: "",
    texto: "",
    media: "",
    })

    
    const handleChange = (e) => {
    e.preventDefault();
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(creatPost(input))
    alert("Actividad Creada")
    setInput({
        titulo:"",
        texto:"",
        media:"",
    })
    }
    
    return (

        <div>
            <form>
                <input onChange={(e) => handleChange(e)}
                type="text" 
                id='7' 
                className='nameCreate1'
                value={input.titulo}
                name="titulo" 
                placeholder='Titulo'
                />
                <br/>
                <input onChange={(e) => handleChange(e)}
                type="text" 
                id='7' 
                className='nameCreate1'
                value={input.texto}
                name="texto" 
                placeholder='texto'
                />
                <br/>
                <input onChange={(e) => handleChange(e)}
                type="text" 
                id='7' 
                className='nameCreate1'
                value={input.media}
                name="media" 
                placeholder='Archivos'
                />
                <br/>
                <button id='submit' className='crear' type='submit' onClick={(e) => handleSubmit(e)}/>
            </form>
        </div>
    )
}
