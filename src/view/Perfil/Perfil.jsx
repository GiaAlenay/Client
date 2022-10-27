 import { Nav } from "../../components/Nav/Nav"
 import './Perfil.css'
 import Button from '@mui/material/Button';
 import Stack from '@mui/material/Stack';
 import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChangeForm } from "../../components/ChangeForm/ChangeForm";
 const user={
    id:1,
    name:'Henry',
    apellido:'Luna',
    profilePicture:'https://img.freepik.com/fotos-premium/fondo-programacion-software_372999-217.jpg',
    profilePicture2:'https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=640:*'
    ,premium:false
}
 export const Perfil =()=>{
    const history=useNavigate();
    const [current,setCurrent]=useState(0)
    const [configurar,setConfigurar]=useState(false)
    const changeCurrent=(e)=>{        
        setCurrent(parseInt(e.target.value,10))
    }
    const handlePrimium=(e)=>{
        history('/premium')
    }
    const hamdleConfigAccountForm=(e)=>{
        setConfigurar(true)
    }
    const onClose=(close)=>{
        setConfigurar(close)
    }
    return(
        <div className="perfil">
            <Nav/>
            <div className={`${configurar?"configurarCuenta":'noConfigurar'}`}>
                
                <ChangeForm onClose={onClose}/>
            </div>
                <div className="profile">
                    
                        <div className="allInfoContainer">
                            <div className="firstCont">

                                <img className="secondPicture" src={user.profilePicture2} alt={'profile'}/>
                                <img className="mainPicture" src={user.profilePicture} alt={'profile'}/>
                                <div className="infoContainer">
                                    <div className="userNameCont">
                                        <span className="userName">{user.name} {user.apellido}</span >
                                        
                                    </div>
                                    <div className="buttonContainer">
                                    <Stack spacing={2} direction="row">
                                            <Button 
                                                sx={{backgroundColor:'rgb(22, 17, 41)',
                                                    display:`${user.premium===true?'none':'block' }`}} 
                                                size="medium"
                                                onClick={(e)=>{handlePrimium()}}
                                                variant="contained">
                                            Go Premium</Button>
                                            <Button  onClick={hamdleConfigAccountForm} sx={{backgroundColor:'rgb(22, 17, 41)' }} size="medium" variant="contained">
                                                
                                                <BorderColorTwoToneIcon/>
                                                Editar Perfil
                                            </Button>
                                    </Stack>
                                            
                                        </div>
                                </div>
                            </div>
                            
                            <div className="detalle">
                                <div className="tipoDetalle">
                                    <button value={0} onClick={(e)=>{changeCurrent(e)}} className={`btn ${current=== 0 &&'selectedDetalle'}`}>Publicaciones </button>
                                    <button value={1} onClick={(e)=>{changeCurrent(e)}} className={`btn ${current=== 1 &&'selectedDetalle'}`}>Información </button>
                                    <button value={2} onClick={(e)=>{changeCurrent(e)}} className={`btn ${current=== 2 &&'selectedDetalle'}`}>Amigos </button>
                                    <button value={3} onClick={(e)=>{changeCurrent(e)}} className={`btn ${current=== 3 &&'selectedDetalle'}`}>Favoritos </button>
                                    <button value={4} onClick={(e)=>{changeCurrent(e)}} className={`btn ${current=== 4 &&'selectedDetalle'}`}> Otro</button>
                                </div>
                                <div className="detalleInfo">
                                    {current===0 &&(
                                        <div className={`detInf detInf0`}>
                                            Publiicaciones
                                        </div>)}
                                    {current===1 &&(
                                        <div className={`detInf detInf1`}>
                                            Informacion
                                        </div>)}
                                    {current===2 &&(
                                        <div className={`detInf detInf2`}>
                                            Amigos
                                        </div>)}
                                    {current===3 &&(
                                        <div className={`detInf detInf3`}>
                                            Favoritos
                                        </div>)}
                                    {current===4 &&(
                                        <div className={`detInf detInfdetInf4`}>
                                            Otros
                                        </div>)}
                                </div>
                            </div>
                    
                    </div>
                   
                </div>
        </div>
    )
}