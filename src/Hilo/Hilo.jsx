import './Hilo.css'
import {AbrirHilo,loading } from "../redux/actions/index";
import { getComentsonComent } from '../redux/actions/coments';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Esqueleto } from '../components/Skeleton/Skeleton';
const axios = require('axios')


export const Hilo=()=>{
    const dispatch=useDispatch()
    const loading = useSelector(state => state.loading)
    const comentsOnComent= useSelector(state=>state.comentsOnComent)
    const userLoged = useSelector(state => state.UserLoged)
    const abrirHilo=useSelector(state=>state.abrirHilo)
    const mainComentHilo=useSelector(state=>state.mainComentHilo)
    const [input,setinput]=useState({ comentId:mainComentHilo.id ,
                                        contenido:"",
                                         userId:userLoged.id})

    useEffect(()=>{
       
    },[abrirHilo])

    useEffect(()=>{
        setinput({
            ...input,
            comentId:mainComentHilo.id,
            userId:userLoged.id
        })
    },[userLoged,mainComentHilo])

    const handleResponder=()=>{
        dispatch(AbrirHilo(false))
        console.log('responder')
    }
    const handleInputChange=(e)=>{
        setinput({...input,
            [e.target.name]:e.target.value })
    }

    const handleKeyDown = async (event) => {  
        
        if (event.key === 'Enter') {          
            console.log(input)   
             const response = await axios.post("/coments/coment/", input);
             console.log(response)
            // if(response?.length>0 ){
            setinput({...input,
                        contenido:''})
            // }
                event.preventDefault(); 
            }
        
         
       };
    return(
        <div className={`${abrirHilo?"HiloCont":'hideHiloCont'}`}>
            <div className='HiloHeader'>
                <h2>Hilo</h2>
                <button onClick={handleResponder}
                        className='btn'>
                    X
                </button>
            </div>
            <div className='comentsHiloCont'>
                <div className='AuthorComentCont mainAu'>
                    <img className='mainFotoAuthHilo' src={mainComentHilo.foto_principal} alt='foto'/>
                    <div className='usuarioContHilo'>
                        <span className='usAuHilo'>
                        {mainComentHilo?.usuario}
                        </span>
                        <br></br>
                        <span className='HiloContCon'>
                            {mainComentHilo?.contenido}
                        </span>
                    </div>
                </div>
                {loading?(
                    <div>
                        <Esqueleto type={1}/>
                        <Esqueleto type={1}/>
                        <Esqueleto type={1}/>
                    </div>
                ):(
                    <div>{
                    comentsOnComent.length>0?(
                        <div className='allComentsonComent'>
                            {comentsOnComent.map(c=>{
                                if(c.comentId===mainComentHilo?.id){
                                    return(
                                        <div className='AuthorComentCont'>
                                            <img className='mainFotoAuthHilo' src={c.user.foto_principal} alt='foto'/>
                                            <div className='usuarioContHilo'>
                                                <span className='usAuHilo'>
                                                {c.user.usuario}
                                                </span>
                                                <br></br>
                                                <span className='HiloContCon'>
                                                    {c.contenido}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                }})}
                        </div>
                    ):(
                        <></>
                    )
                    }</div>)}
            </div>
            <div className='hiloinputCont'>
                <textarea placeholder='Responde...' 
                            className='hiloInput' 
                            name='contenido'
                            onChange={handleInputChange}
                            value={input.contenido}
                            onKeyDown={(e)=>{handleKeyDown(e)}}
                            type={'text'}/>                
            </div>
        </div>
    )
}