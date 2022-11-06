import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReaccionesOnComent,
        createReaccionesOnPost,
        deleteReacciones,
        editReaccionesOnPost } from "../../redux/actions/reacciones";

export const Reacciones =({id, nombre ,isShown,SetFalse,postId,comentId})=>{
    
    const userLoged = useSelector(state => state.UserLoged)
    const dispatch=useDispatch()
    const [reacc ,setReacc]=useState({ nombre:"", 
                                        postId:postId, 
                                        userId:userLoged.id,
                                        comentId:comentId })
    
    
    
    const handleReaccion=(e)=>{  
        console.log(e.target.name)
        console.log('ajam', reacc.nombre)
        console.log(reacc)
        if(reacc.nombre===e.target.name){
            setReacc({...reacc,nombre:''})
            console.log("eliminar")
            dispatch(deleteReacciones(id))
        }
        if(reacc.nombre===""){
            setReacc({...reacc,nombre:e.target.name}) 
            console.log("agregar")
            if(postId===null && comentId!==null){
                dispatch(createReaccionesOnComent({nombre:e.target.name, 
                    postId:postId, 
                    userId:userLoged.id,
                    comentId:comentId}))
            }
            if(postId!==null && comentId===null){

                dispatch(createReaccionesOnPost({ nombre:e.target.name, 
                postId:postId, 
                userId:userLoged.id,
                comentId:comentId }))
            }
        }
        if(reacc.nombre!==e.target.name){
            setReacc({...reacc,nombre:e.target.name})        
            dispatch(editReaccionesOnPost(id,{nombre:e.target.name}))
            console.log("cambiar")
        } 
        console.log('ajam next', reacc.nombre)  
    }

    useEffect(()=>{
        if(nombre?.length>0){ 
            console.log('react comen')           
            setReacc({...reacc,nombre:nombre})          
        }
        else{
            console.log('no react comeent')
        }
        
    },[nombre])

    
    return(
        <div onMouseEnter={() => SetFalse(true)}
        onMouseLeave={() => SetFalse(false)}                     
        className={`${isShown?"reaccionesCont":"reaccionesContNone"}`}>

            <button className=" btnReac" 
                onClick={handleReaccion}
                name={'meEncanta'}
                style={{backgroundImage: `url(meEncanta.png)`}}>
            </button> 
            <button className=" btnReac" 
                onClick={handleReaccion}
                name={'meEnoja'}
                style={{backgroundImage: `url(meEnoja.png)`}}>
            </button>    
            <button className=" btnReac"
                onClick={handleReaccion}
                name={'meGusta'}
                style={{backgroundImage: `url(meGusta.png)`}}>
            </button>    
            <button className=" btnReac" 
                onClick={handleReaccion}
                name={'noMeGusta'}
                style={{backgroundImage: `url(noMeGusta.png)`}}>
            </button>           
            <button className=" btnReac" 
                onClick={handleReaccion}
                name={'meHaceLlorar'}
                style={{backgroundImage: `url(meHaceLlorar.png)`}}>
            </button>    
            <button className=" btnReac" 
                onClick={handleReaccion}
                name={"meSorprende"}
                style={{backgroundImage: `url(meSorprende.png)`}}>
            </button>    
            
        </div>
    )
}