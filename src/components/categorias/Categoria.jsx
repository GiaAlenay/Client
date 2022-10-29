import React,{ useEffect } from 'react'
import {getCategories} from '../../redux/actions/users'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import styles from './Categorias.module.css'
// css module temporal solo es para verlo renderisado en mi LOCAL <3
// NO ES PARA QUE SE QUEDE <3 
export default function Categoria() {

  const dispatch = useDispatch()
  const categoriesState = useSelector((state) => state.Categories)

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch])

  console.log(categoriesState)

//   function handleCategories(e){
//     e.preventDefault()
//     dispatch(filterTypes(e.target.value));
//     setCurrentPage(1)
//     setOrder(e.target.value);
// }
// onChange={(e) =>{handleCategories((e))}}
  return (
    <div className={styles.contenedor}>
       <div className={styles.lista} >
        
        {categoriesState?.map((ca) =>{return(
          <p className={styles.elementos} value={ca.name} key={ca.id}>
            
            {ca.name.toUpperCase()}</p>
        )})}
      </div>
    </div>
  )
}
