import { useDispatch, useSelector } from "react-redux";
import { CrearCuenta } from "../../components/CrearCuenta/CrearCuenta";
import { CuadroSobrepuesto } from "../../components/CuadroSobrepuesto/CuadroSobrepuesto";
import './Landing.css'
import { IniciarSesion } from '../../components/IniciarSesion/InciarSecion'
import { useEffect, useState } from 'react'
import { getUsers } from "../../redux/actions/users";

export const Landing =()=>{
    const dispatch=useDispatch()
    const users=useSelector(state=>state.Users)
    useEffect(()=>{
       dispatch(getUsers())        
    },[])
    // users.length>0?console.log(users):console.log('no')
    const [configurar,setConfigurar]=useState(false)
    const onClose=(close)=>{
        setConfigurar(close)
    }
    const hamdleConfigAccountForm=(e)=>{
        setConfigurar(true)
    }
    return(
        <div className='landing'>
            <div className={`${configurar?"configurarCuenta":'noConfigurar'}`}>
            
            <CuadroSobrepuesto onClose={onClose} child={<CrearCuenta/>} reason={'Crear Cuenta'}/>
            </div>
            <div className='laCont'>
            <div className='landArribaCont'>
                <div className='logo'>SYT</div>
                <button onClick={hamdleConfigAccountForm} className='btnCreCu'>Crear cuenta</button>
            </div>
            <div className='lan1Cont'>
                <div className='lan1Left'>
                    <div className='titleLandCont'>
                    <img className='sytTitle' alt='img' src={'title.png'}/>
                    </div>
                    <div className='landDesc'>
                    <h3>Unete a la Comunidad más grande de desarrolladores de software </h3>
                    </div>

                    <IniciarSesion/>
                </div>
                <div className='lan2rigth'>
                    <img className='laRiImg' alt='img' src={'riri.png'}/>
                </div>
            </div>
            </div>
        </div>

            
    )
}

