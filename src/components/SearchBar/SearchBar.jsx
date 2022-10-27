
import { useState } from 'react';

import './SearchBar.css'
const dataGeneral= [
    'alan or','python','react','Lady Gaga', 'avigail','aveces'
    ]

export const SearchBar =()=>{
    const[suggestions , setSuggestions]=useState([])
    const [text,setText]=useState('')
    const [indice, setIndice]=useState(0)
    const handleKeyDown = (event) => {    
        if (event.key === 'Enter') {          
          onSuggestHandler(text)
          event.preventDefault(); 
         }

         if (event.key === "ArrowUp"){
            if(indice>=0){
                console.log('arriba')
                setIndice(indice-1)
                setText(suggestions[indice])
            console.log(indice+' '+suggestions[indice])
            }
            
         }
         if (event.key === "ArrowDown"){
            if(indice<suggestions.length){
                console.log('abajo')
                setIndice(indice+1)
                setText(suggestions[indice])
            console.log(indice+' '+suggestions[indice])
            }
            if(indice===suggestions.length){
                setIndice(0)
                setText(suggestions[indice])
            }
           
         }
       };
    const onChangeInput=(text)=>{
        let matches=[]
        let short=[]
        if(text.length>0){
            matches=dataGeneral.filter(name=>{
                
                const regex= new RegExp(`${text}`,"gi")
                return name.match(regex)
            })
        }
        matches.map((m,i)=>{if(i<5){short.push(m)}})
        setSuggestions(short)
        setText(text)
       
    }
    const onSuggestHandler=(text)=>{       
        setText(text)
        console.log('va')
        setSuggestions([])        
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        
        onSuggestHandler(text)
    }

   
    return (
        <>
        <form className='searchform' onSubmit={(e)=>{onSubmitHandler(e)}}>
            <div className="searchInputWrapper">
                <input className="searchInput" 
                        type="text" 
                        placeholder='focus here to search'
                        value={text}
                        onBlur={()=>{ setTimeout(()=>{setSuggestions([])},1000)}}
                        onChange={(e)=>{onChangeInput(e.target.value)}}
                        onKeyDown={(e)=>{handleKeyDown(e)}}
                        >                
                </input>

                 <button type="submit" className="icon"><img className='lupa' src={'https://cdn-icons-png.flaticon.com/512/3917/3917754.png'} alt='search'/></button>
                
            </div>
            <div className='sugCont'>{suggestions && suggestions.map((sugName,i)=>(
                        <div  key={i} 
                                id={suggestions.length===i+1 ?'su':'else'}
                                className={`suggestion ${text===sugName&& 'sugestiononKey'}`}
                                onClick={()=>onSuggestHandler(sugName)}
                                onKeyDown={(e)=>{handleKeyDown(e)}}
                            >{sugName}
                        </div> ))}
                    </div>
        </form>
        </>
    )

}
