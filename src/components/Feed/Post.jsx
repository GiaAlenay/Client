import {MoreVert, Favorite, FavoriteBorder} from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography,Checkbox} from "@mui/material";
import './Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { getComentsonPost } from "../../redux/actions/coments";
import { getReaccionesonPost,createReaccionesOnPost } from "../../redux/actions/reacciones";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Coments } from "../Coments/Coments";
import{Reacciones} from "../Reacciones/Reacciones"
import CircularProgress from '@mui/material/CircularProgress';
import { Coment } from "../Coment/Coment";
const axios = require('axios')

export const Post=({titulo,user,texto,media,foto,id})=>{
    const dispatch=useDispatch()
    const userLoged = useSelector(state => state.UserLoged)
    const loading = useSelector(state => state.loading)
    const coments=useSelector(state=>state.coments)
    const reaccionesOnPost=useSelector(state=> state.reaccionesOnPost)
    const [isShown, setIsShown] = useState(false);
    const [showComents, setShowComents] = useState(false);
    const [comment, setComment]=useState({ postId:id,
        contenido:"",
        userId:userLoged.id 
        
    })
    const [listaDeReac, setListaDeReac]=useState({  meEncanta:0,
                                                    meEnoja:0,
                                                    meGusta:0,
                                                    noMeGusta:0,
                                                    meHaceLlorar:0,
                                                    meSorprende:0

                                                    })
    const [myReaction,SetmyReaction]=useState('') 
    const [myReactionId,SetmyReactionId]=useState('') 
    const[comentsonPost, setComentsonPost]=useState([])
    const[contRecc, setContRecc]=useState(0)
                                                    

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
        dispatch(getReaccionesonPost(id))
        
    },[])
    useEffect(()=>{
        if(reaccionesOnPost?.length>0){               
                reaccionesOnPost.map((r)=>{
                    if(parseInt(r.postId,10)===parseInt(id,10)){
                        setContRecc(contRecc+1)
                        setListaDeReac({
                            ...listaDeReac,
                            [r.nombre]:listaDeReac[r.nombre]+1
                        })
                    }
                    if(parseInt(r.userId,10)===parseInt(userLoged.id,10) && parseInt(r.postId,10)===parseInt(id,10)){
                        SetmyReaction(r.nombre)
                        SetmyReactionId(r.id)
                    }
                })                
        }else{           
            SetmyReaction('')
        }
    },[reaccionesOnPost])

    useEffect(()=>{
        if(coments?.length>0){
            
            setComentsonPost(coments.filter(c=> c.postId===id))
        }
    },[coments])

    const handleShowComments=()=>{
        dispatch(getComentsonPost('post'))
        setShowComents(true)
    }
    const SetFalse=(re)=>{
        setIsShown(re)
    }
    const onChangeCommentHandler=(e)=>{
        
        setComment({...comment,
            [e.target.name]:e.target.value })
    }
    
       const handleKeyDown = async (event) => {  
        
        if (event.key === 'Enter') {          
            console.log('enter')   
            const response = await axios.post("/coments", comment);
            console.log(response)
            setComment({...comment,
                contenido:''}) 
                event.preventDefault(); 
            }
        
         
       };
    return(
        <Card sx= {{xs:8, margin: 4, marginRight:50, width:"600px", boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} >
            <CardHeader
            avatar ={
                <Avatar sx={{bgcolor: "blue"}}>
                    <img src={foto} alt="foto" height={40} />
                </Avatar>
            }
            action ={
                <IconButton aria-label="settings">
                    <MoreVert/>
                </IconButton>
            }

            title= {user}
            />
            <CardContent >
                <Typography variant="body2" color="text.secondary">
                {titulo}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {texto}
                
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <a href={media}>arhivo subido</a>
                </Typography>
            </CardContent>
            
            <CardMedia
            component="img"
            height="20%"
            width="50px"
            image={media}             
            alt=" "
            />
           <Reacciones id={myReactionId} nombre={myReaction} postId={id} isShown={isShown} SetFalse={SetFalse} comentId={null}/>
        <div className="contadorCont">
            <div className="reacImgonPostCont">
            {listaDeReac.meEncanta>0 &&(<img className='reacImgonPost' src={'meEncanta.png'} alt='<3'/>)}
            {listaDeReac.meEnoja>0 &&(<img className='reacImgonPost' src={'meEnoja.png'} alt='-.-'/>)}
            {listaDeReac.meGusta>0 &&(<img className='reacImgonPost' src={'meGusta.png'} alt='like'/>)}
            {listaDeReac.meHaceLlorar>0 &&(<img className='reacImgonPost' src={'meHacellorar.png'} alt='cry'/>)}
            {listaDeReac.meSorprende>0 &&(<img className='reacImgonPost' src={'meSorprende.png'} alt='wow'/>)}
            {listaDeReac.noMeGusta>0 &&(<img className='reacImgonPost' src={'noMeGusta.png'} alt='<3'/>)}
            <span> {contRecc>0 &&(<> {contRecc}</>)}</span>
            </div>
            <div>{comentsonPost.length} Comentarios</div>
        </div>
        
        <div className="accionesCont" style={{marginTop:`${isShown?'24px':'10px'}`}}>
                <button  
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                 className={`btn btnReacciones`}>
                   
                    {myReaction.length>0 ?(
                    <>
                    <img className="chosenReaction" src={`${myReaction}.png` } alt={`${myReaction}`}/> 
                    <span className="nameMyReaction">{handleShowmyReaccion(myReaction)}</span>
                    </>
                    ):(<><ThumbUpIcon/>  Me Gusta</> )}
                    
                </button>
                <button onClick={handleShowComments} className={`btn btnComentar`}>
                    <ChatBubbleOutlineIcon/>  Comentar
                </button>
                <button className={`btn btnFav`}>
                <IconButton aria-label="add to favorites">
                <Checkbox
                icon={<FavoriteBorder/>} checkedIcon={<Favorite sx= {{color: "red"}}/>}
                />
                </IconButton>
                </button>

            </div>
            <div className={`comentCont ${showComents?'displayComentCont':'notDisplayComentCont'}`}>
                <div className="comentarCont">
                    <Avatar sx={{bgcolor: "blue"}}>
                        <img src={userLoged.foto_principal} alt="foto" height={40} />
                    </Avatar>
                    <input className="inputComment" 
                            name="contenido"                            
                            value={comment.contenido}
                            onChange={onChangeCommentHandler}
                            placeholder="Escribe un comentario...   "
                            onKeyDown={(e)=>{handleKeyDown(e)}}
                             type={'text'}></input>
                </div>
                <div className="todosComentariosPost">
                    {loading===false?(
                        <Coments coments={comentsonPost}/>
                    ):(<div>
                        <CircularProgress />
                    </div>)}
                </div>
            </div>
        </Card>
    );
}
