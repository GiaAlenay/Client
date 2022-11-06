import './Coment.css'
import { Avatar} from "@mui/material";
import { useEffect, useState } from 'react';
import { Reacciones } from '../Reacciones/Reacciones';
import { useDispatch, useSelector } from "react-redux";
import {AbrirHilo,getHiloAuth} from "../../redux/actions/index";
import { getComentsonComent ,deleteComent,EditComent} from '../../redux/actions/coments';


export const Coment=({id,idAuthor ,contenido,usuario,foto_principal})=>{
    const dispatch=useDispatch()
    const reaccionesOnPost=useSelector(state=> state.reaccionesOnPost)
    const userLoged = useSelector(state => state.UserLoged)
    const [isShown, setIsShown] = useState(false);
    const [myReaction,SetmyReaction]=useState('') 
    const [open, setOpen] =useState(false);
    const [myReactionId,SetmyReactionId]=useState('') 
    const[editarOn,setEditarOn]=useState(false)
    const [inputText,setinputText]=useState('')
    const [listaDeReac, setListaDeReac]=useState({  meEncanta:0,
                                                    meEnoja:0,
                                                    meGusta:0,
                                                    noMeGusta:0,
                                                    meHaceLlorar:0,
                                                    meSorprende:0

                                                    })
    const handleShowmyReaccion=(nombre)=>{
        switch (nombre) {
            
            case 'meEncanta':                
                return 'Me Encanta'
            case 'meEnoja':
                return 'Me Enoja'
            case 'meGusta':
                return 'Me Gusta'
            case 'noMeGusta':
                return 'No Me Gusta'
            case 'meHaceLlorar':
                return 'Me Hace Llorar'
            case 'meSorprende':                
                return 'Me Sorprende'
            default:                
                break;
        }
    }


    useEffect(()=>{
        if(reaccionesOnPost.length>0){               
                reaccionesOnPost.map((r)=>{
                    if(parseInt(r.comentId,10)===parseInt(id,10)){
                        
                        setListaDeReac({
                            ...listaDeReac,
                            [r.nombre]:listaDeReac[r.nombre]+1
                        })
                    }

                    if(parseInt(r.userId,10)===parseInt(userLoged.id,10) && parseInt(r.comentId,10)===parseInt(id,10)){
                        SetmyReaction(r.nombre)
                        SetmyReactionId(r.id)
                    }
                })
                             
        }else{           
            SetmyReaction('')
        }
    },[reaccionesOnPost])

    const handleEditar=()=>{
        setEditarOn(true)
        
    }

    const handleEliminar=()=>{
        dispatch(deleteComent(id))
    }

    const SetFalse=(re)=>{
        setIsShown(re)
    }

    const handleClick = (event) => {
        setOpen((previousOpen) => !previousOpen);
      };

      const handleEditInput=(e)=>{
        setinputText(e.target.value)
      }
      const handleKeyDown = async (event) => {  
        
        if (event.key === 'Enter') {          
            console.log(inputText)   
            dispatch(EditComent(id,{contenido:inputText}))
            
            
            setEditarOn(false)
            
                event.preventDefault(); 
            }
            setinputText('')
         
       };

    const handleResponder=()=>{
        dispatch(getComentsonComent())
        dispatch(getHiloAuth({id ,contenido,usuario,foto_principal}))
        dispatch(AbrirHilo(true))
        console.log('responder')
    }
    return(
        <div className='comentarioBDCont'>
            <div>
            <Avatar sx={{bgcolor: "blue"}}>
                        <img src={foto_principal} alt="foto" height={40} />
                    </Avatar>
            </div>
            <div className='comentContCont'>
                {editarOn?(
                    <div>
                        <textarea 
                                value={inputText}
                                onChange={handleEditInput}
                                onKeyDown={(e)=>{handleKeyDown(e)}} />
                    </div>)
                    :(
                    <div className='comentInfo'>
                        <span className='usuarioComentAu'>{usuario}</span>
                        <br></br>
                        <span>{contenido}</span>
                        <br></br>
                    </div>
                )}
                
                <div className='comentBotones'>
                    <Reacciones id={myReactionId} nombre={myReaction} comentId={id} postId={null} isShown={isShown} SetFalse={SetFalse}/>
                    <button 
                        className='btnOnComent'
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                        >{myReaction.length>0?(<span className='reaconComentDesc'>{handleShowmyReaccion(myReaction)}</span>):(<>Me Gusta</>)} </button>
                    <button onClick={handleResponder} className='btnOnComent'> Responder</button>
                    
                </div>
            </div>
            <div className='reacImgonComCont'>
            {listaDeReac.meEncanta>0 &&(<img className='reacImgonCom' src={'meEncanta.png'} alt='<3'/>)}
            {listaDeReac.meEnoja>0 &&(<img className='reacImgonCom' src={'meEnoja.png'} alt='-.-'/>)}
            {listaDeReac.meGusta>0 &&(<img className='reacImgonCom' src={'meGusta.png'} alt='like'/>)}
            {listaDeReac.meHaceLlorar>0 &&(<img className='reacImgonCom' src={'meHacellorar.png'} alt='cry'/>)}
            {listaDeReac.meSorprende>0 &&(<img className='reacImgonCom' src={'meSorprende.png'} alt='wow'/>)}
            {listaDeReac.noMeGusta>0 &&(<img className='reacImgonCom' src={'noMeGusta.png'} alt='<3'/>)}
            </div>
            <button className='btn' onClick={handleClick}>...</button>
            <div>
                {parseInt(idAuthor,10)===parseInt(userLoged.id,10)?
                ( <div className={`${open?'comentsopciones':'closeComOp'}`}>
                    <button onClick={handleEditar}
                        className=' opComentBtn '>
                        Editar
                    </button>
                    <br></br>
                    <button onClick={handleEliminar} className=' opComentBtn'>
                        Eliminar
                    </button>
                </div>
                ):(<div  className={`${open?'comentsopciones':'closeComOp'}`}>
                    <button className=' opComentBtn'>
                        Reportar
                    </button>
                </div>)}
            </div>
        </div>
    )
}