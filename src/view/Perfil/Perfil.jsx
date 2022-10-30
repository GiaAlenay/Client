import './Perfil.css'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "../../components/Nav/Nav"
import { Reglas } from "../../components/Reglas/Reglas";
import { ChangeForm } from "../../components/ChangeForm/ChangeForm";
import { CuadroSobrepuesto } from "../../components/CuadroSobrepuesto/CuadroSobrepuesto";
import { getUser,deleteUser } from "../../redux/actions/users";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DescUsuario } from '../../components/DescripcionUsuario/DescripcionUsuario';
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';

 const user={
    id:1,
    name:'Henry',
    apellido:'Luna',
    profilePicture:'https://img.freepik.com/fotos-premium/fondo-programacion-software_372999-217.jpg',
    profilePicture2:'https://hips.hearstapps.com/hmg-prod/images/street-portrait-of-a-young-man-using-mobile-phone-royalty-free-image-1018047498-1564431457.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=640:*'
    ,
    premium:false
}
 export const Perfil =()=>{
    const [aceptar, setAceptar]=useState(false)
    const history=useNavigate();
    const [current,setCurrent]=useState(0)
    const [currentConf,setCurrentConf]=useState(1)
    const [configurar,setConfigurar]=useState(false)
    const [reglas,setreglas]=useState(false)
    const dispatch=useDispatch()
    const { id } = useParams();
    const User=useSelector(state=>state.User)
    const mensajeResultado=useSelector(state=>state.mensajeResultado)
    const [open, setOpen] = useState(false);
    
    useEffect(()=>{       
            dispatch(getUser(id))       
        return(()=>{           
        })
    },[])

    const handleConfOp=(e)=>{       
            setCurrentConf(parseInt(e.target.name,10))
            if(e.target.name==='4'){
                setAceptar(true)
            }
            if(e.target.name==='3'){
                history('/')
            }
            if(e.target.name==='2'){
                console.log('reglamento')
            }
    }
    const handleEliminarCuenta=async(e)=>{
        
        if(e.target.value==='0'){
            setAceptar(false)
        }else{
            setOpen(true)
            dispatch(deleteUser(id))
             setOpen(false)
            alert('Eliminado correctamente')
        history('/')
        }
    }
    const changeCurrent=(e)=>{        
        setCurrent(parseInt(e.target.value,10))
    }
    const handlePrimium=(e)=>{
        history('/premium')
    }
    const handleCuadroSobrepuesto=(e)=>{
        if(e.target.value==='reglas'){
            setreglas(true)
        }
        if(e.target.value==='config'){
            setConfigurar(true)
        }
    }
    const onClose=(close)=>{
        setConfigurar(close)
        setreglas(close)
    }
    
    return(
        <div className="perfil">
            <Nav/>
            {Object.entries(User).length=== 0?(
            <div>
                lOADING...
            </div>):(
            <div>
                <div className={`${configurar?"configurarCuenta":'noConfigurar'}`}>
                
                <CuadroSobrepuesto onClose={onClose} child={<ChangeForm/>} reason={'Editar Perfil'}/>
            </div>

            <div className={`${reglas?"configurarCuenta":'noConfigurar'}`}>
                
                <CuadroSobrepuesto onClose={onClose} child={<Reglas/>} reason={'Reglamento'}/>
            </div>
                <div className="profile">
                    
                        <div className="allInfoContainer">
                            <div className="firstCont">

                                <img className="secondPicture" src={User.user.foto_principal} alt={'profile'}/>
                                <img className="mainPicture" src={User.user.foto_portada} alt={'profile'}/>
                                <div className="infoContainer">
                                    <div className="userNameCont">
                                        <span className="userName">
                                            {User.user.usuario}
                                        </span >
                                        {User.user.nombre && User.user.apellido &&(
                                            <h2 className='nameApellido'>
                                            {User.user&&(<div>{User.user.nombre+' '+User.user.apellido}</div>)}
                                        </h2>
                                        )}
                                        
                                    </div>
                                    <div className="buttonContainer">
                                    <Stack spacing={2} direction="row">

                                            <Button className="ou"
                                                    sx={{backgroundColor:'rgb(22, 17, 41)',                                
                                                        display:`${user.premium===true?'none':'block' }`}} 
                                                    size="medium"
                                                    onClick={(e)=>{handlePrimium()}}    
                                                    variant="contained">
                                                        Go Premium
                                            </Button>
                                            <Button  onClick={handleCuadroSobrepuesto} 
                                                        value={'config'}
                                                        sx={{backgroundColor:'rgb(22, 17, 41)' }} 
                                                        size="medium" 
                                                        variant="contained">                                                
                                                        <BorderColorTwoToneIcon/>
                                                         Editar Perfil

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
                                    <button value={0} 
                                            onClick={(e)=>{changeCurrent(e)}} 
                                            className={`btn ${current=== 0 &&'selectedDetalle'}`}>
                                                Publicaciones 
                                    </button>
                                    <button value={1} 
                                            onClick={(e)=>{changeCurrent(e)}} 
                                            className={`btn ${current=== 1 &&'selectedDetalle'}`}>
                                                Información 
                                    </button>
                                    <button value={2} 
                                            onClick={(e)=>{changeCurrent(e)}} 
                                            className={`btn ${current=== 2 &&'selectedDetalle'}`}>
                                            Amigos 
                                    </button>
                                    <button value={3} 
                                            onClick={(e)=>{changeCurrent(e)}} 
                                            className={`btn ${current=== 3 &&'selectedDetalle'}`}>
                                            Favoritos 
                                    </button>
                                    <button value={4} onClick={(e)=>{changeCurrent(e)}} 
                                            className={`btn ${current=== 4 &&'selectedDetalle'}`}>
                                             Configuraciones
                                    </button>
                                </div>
                                <div className="detalleInfo">
                                    {current===0 &&(
                                        <div className={`detInf detInf0`}>
                                            Publicaciones
                                        </div>)}
                                    {current===1 &&(
                                        <div className={`detInf detInf1`}>
                                        <DescUsuario/>                                        
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
                                            <div className="configOpCont1">
                                                <button onClick={(e)=>{handlePrimium()}} 
                                                        className={`optPerf ${currentConf=== 1 && 'confOn'}`} 
                                                        name={1}>
                                                            <WorkspacePremiumIcon fontSize={'small'}/> 
                                                            Haste Premium
                                                </button>
                                                
                                                <button onClick={handleCuadroSobrepuesto} 
                                                        value={'reglas'}
                                                        className={`optPerf ${currentConf=== 2&& 'confOn'}`} 
                                                        name={2}>
                                                            <InfoIcon fontSize={'small'}/>
                                                             Reglamento
                                                </button>
                                            </div >
                                            <div className="configOpCont2">
                                                <button onClick={handleConfOp} 
                                                        className={`optPerf ${currentConf=== 3&& 'confOn'}`} 
                                                        name={3}>
                                                            <LogoutIcon fontSize={'small'}/>
                                                             Cerrar Sesión
                                                </button>
                                                
                                                <button onClick={handleConfOp} 
                                                        className={`optPerf ${currentConf=== 4&& 'confOn'}`} 
                                                        name={4}>
                                                            <RemoveCircleOutlineIcon fontSize={'small'}/> 
                                                            Eliminar Cuenta
                                                </button>
                                                
                                            </div>
                                                                    <Dialog
                                                                        open={aceptar}
                                                                       
                                                                        aria-labelledby="alert-dialog-title"
                                                                        aria-describedby="alert-dialog-description"
                                                                    >
                                                                        <DialogTitle id="alert-dialog-title">
                                                                        {"Estas seguro de querer eliminar tu cuenta?"}
                                                                        </DialogTitle>
                                                                        <DialogContent>
                                                                        <DialogContentText id="alert-dialog-description">
                                                                            Si acepta,su cuenta sera completamente eliminada de SYT.
                                                                        </DialogContentText>
                                                                        </DialogContent>
                                                                        <DialogActions>
                                                                        <Button value={0} onClick={handleEliminarCuenta}>Cancelar</Button>
                                                                        <Button value={1} onClick={handleEliminarCuenta} autoFocus>
                                                                            Aceptar
                                                                        </Button>
                                                                        </DialogActions>
                                                                    </Dialog>

                                            
                                           </div>)}
                                </div>
                            </div>
                    
                    </div>
                   
                </div>
            </div>)}
        </div>
    )
}