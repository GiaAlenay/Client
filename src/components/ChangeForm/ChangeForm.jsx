import './ChangeForm.css'
export const ChangeForm=(props)=>{
    const onClose=()=>{
        props.onClose(false)
    }
    return(
        <div className='ChangeProfileFormCont'>

            <form className='ChangeProfileForm'>
                <button className=' closeBtn' onClick={onClose}>x</button>
                <span className='EditarPerf'>Editar Perfil</span>
                <hr></hr>
            </form>
        </div>
        
    )
}