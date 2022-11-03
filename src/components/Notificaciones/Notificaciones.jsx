import './Notificaciones.css'
// import { Notificacion } from '../Notificacion/Notificacion'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const options=[
    {id:1,
      authorPicture:'https://preview.redd.it/v0caqchbtn741.jpg?auto=webp&s=c5d05662a039c031f50032e22a7c77dfcf1bfddc',
    authorName:'Juan JR',
    description:'Le gusta tu publicacion',
    visto:true}
    ,
    {id:2,
      visto:true,
      authorPicture:'https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg',
    authorName:'Anonimo 123',
    description:'Te empezo  a seguir'},
    {id:3,
      authorPicture:'https://i.pinimg.com/originals/45/c5/31/45c531a9df6368605885efc73b98e70c.jpg',
    authorName:'Nanae Ulu',
    description:'Ha comentado tu Publicaion',
    visto:true},
    {id:4,
      authorPicture:'https://pbs.twimg.com/profile_images/1290998759116156931/JpfYKk2t_400x400.jpg',
    authorName:'Supeeeer Lisaa',
    description:'Acepto tu solicitud',
    visto:true},
    {id:5,
        authorPicture:'https://i.pinimg.com/474x/ee/60/0b/ee600b5178e4f1648fd1e8623f049611.jpg',
      authorName:'Alecia Jai',
      description:'Le gusta tu publicacion',
      visto:true}
      ,
      {id:6,
        visto:true,
        authorPicture:'https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg',
      authorName:'NoseQuemas',
      description:'Te empezo  a seguir'},
      {id:7,
        authorPicture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsxpJxFOtoiJhB9nvQsEsHXmgTAatQD7o7-Q&usqp=CAU',
      authorName:'Vane ay',
      description:'Ha comentado tu Publicaion',
      visto:false},
      {id:8,
        authorPicture:'https://marketplace.canva.com/EAE6OH6DF2w/1/0/1600w/canva-moon-astronaut-character-twitch-profile-picture-0kkgyJSodt4.jpg',
      authorName:'tuLove',
      description:'Acepto tu solicitud',
      visto:false}
  ]
 export const Notificaciones=(props)=>{
    const history=useNavigate()

  
    
    
    return (
      <div className={`${props.open?'notificacionesCont':'noNoti'}`}>
        {options.map((o,i)=>(
           i>3  &&(
            <div className={`noti ${o.visto===false&&'notiSinVer'}`} >
            <img className={`notiPic`} src={o.authorPicture} alt={'pic'}/>
            <div className='notiText'>
                <span className='autNoti'>
                    {o.authorName}
                </span>
                <br></br>
                <span  className='descNoti'>
                    {o.description}
                </span>
            </div>
            
        </div>
           )
            
            ))}

            
        <div onClick={(e)=>{history('/notificaciones');}} 
            className='noti showMore'>
            <KeyboardArrowDownIcon/>
        </div>
      </div>
    );
}