import React from "react";
import { useState } from 'react';
import { useDispatch } from "react-redux";
//import { useNavigate } from 'react-router-dom';
import { getPostsbyTitulo } from "../../redux/actions/posts";
import './SearchBar.css'
// const dataGeneral= [
//     'alan or','python','react','Lady Gaga', 'avigail','aveces'
//     ]
  

export const SearchBar =()=>{



    const dispatch = useDispatch()
    //const history=useNavigate()
    const [titulo, setTitulo] = useState('')
    //const[suggestions , setSuggestions]=useState([])
    //const [text,setText]=useState('')
    // const handleKeyDown = (event) => {  
    //     const im=suggestions.indexOf(text)
    //     if (event.key === 'Enter') {          
    //       onSuggestHandler(text)
    //       event.preventDefault(); 
    //      }

    //      if (event.key === "ArrowUp"){
             
    //         if(im>=0){
    //             setText(suggestions[im-1])
    //         }
    //         else{                
    //             setText(suggestions[suggestions.length-1])
    //             }
    //         }
            
         
    //      if (event.key === "ArrowDown"){
            
    //          if(im<suggestions.length){
    //             setText(suggestions[im+1])               
    //         }
    //         if(im===suggestions.length){
                
    //             setText(suggestions[im])
    //         }           
    //      }
    //    };
    // const onChangeInput=(text)=>{
    //     let matches=[]
    //     let short=[]
    //     if(text.length>0){
    //         matches=dataGeneral.filter(name=>{
                
    //             const regex= new RegExp(`${text}`,"gi")
    //             return name.match(regex)
    //         })
    //     }
    //     matches.map((m,i)=>{if(i<5){short.push(m)}})
    //     setSuggestions(short)
    //     setText(text)
       
    // }
    // const onSuggestHandler=(text)=>{       
    //    if(text.length>0){
    //     setText(text)
    //     console.log('va')
    //     setSuggestions([])
    //     history('/search') 
    //    }       
    // }

    // const onSubmitHandler=(e)=>{
    //     e.preventDefault();
        
    //     onSuggestHandler(text)
    // } onSubmit={(e)=>{onSubmitHandler(e)}

        function handleInputChange(e){
          e.preventDefault()
          setTitulo(e.target.value);
          console.log(titulo)
        }

        function handleSubmit(e){
          e.preventDefault()
          dispatch(getPostsbyTitulo(titulo))
          setTitulo("")
        }
   
    return (
        <>
        <form className='searchform' >
            <div className="searchInputWrapper">
                <input className="searchInput" 
                        type="text" 
                        placeholder='focus here to search'
                        //value={text}
                        //onBlur={()=>{ setTimeout(()=>{setSuggestions([])},1000)}}
                        onChange={(e)=>{console.log(handleInputChange(e))}}
                        // onKeyDown={(e)=>{handleKeyDown(e)}}
                        >                
                </input>

                 <button type="submit" className="icon"><img className='lupa' src={'https://cdn-icons-png.flaticon.com/512/3917/3917754.png'} alt='search'  onClick={(e) =>{handleSubmit(e)}}/></button>
                
            </div>
            {/* <div className='sugCont'>{suggestions && suggestions.map((sugName,i)=>(
                        <div  key={i} 
                                id={suggestions.length===i+1 ?'su':'else'}
                                className={`suggestion ${text===sugName&& 'sugestiononKey'}`}
                                onClick={()=>onSuggestHandler(sugName)}
                               
                            >{sugName}
                        </div> ))}
                    </div> */}
        </form>
        </>
    )

}
