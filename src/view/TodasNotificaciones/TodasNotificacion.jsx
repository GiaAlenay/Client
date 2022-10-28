import './TodasNotificacion.css'
import * as React from 'react';
import { Nav } from "../../components/Nav/Nav"

const options=[
  {id:1,
    authorPicture:'https://preview.redd.it/v0caqchbtn741.jpg?auto=webp&s=c5d05662a039c031f50032e22a7c77dfcf1bfddc',
  authorName:'Juan JR',
  description:'Le gusta tu publicacion',
  ref:{
    tipo:'publicacion',
    info:{
      id:1,
      media:'https://pbs.twimg.com/media/D-ljOz5XsAAvkPG.png'
    }
  },
  visto:true}
  ,
  {id:2,
    ref:{
      tipo:'accion',
      info:{
        id:1,      
        media:'https://www.clipartmax.com/png/middle/368-3683971_icon-af-follow-icon-af-follow.png'
      }
    },
   
    visto:true,
    authorPicture:'https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg',
  authorName:'Anonimo 123',
  description:'Te empezo  a seguir'},
  
  {id:3,
    ref:{
      tipo:'publicacion',
      info:{
        id:1,        
        media:'https://pbs.twimg.com/media/D-ljOz5XsAAvkPG.png'
      }
    },
    authorPicture:'https://i.pinimg.com/originals/45/c5/31/45c531a9df6368605885efc73b98e70c.jpg',
  authorName:'Nanae Ulu',
  description:'Ha comentado tu Publicaion',
  visto:true},
  {id:4,
    ref:{
      tipo:'accion',
      info:{
        id:2,
        media:'https://cdn-icons-png.flaticon.com/512/5278/5278593.png',
      }
    },
    authorPicture:'https://pbs.twimg.com/profile_images/1290998759116156931/JpfYKk2t_400x400.jpg',
  authorName:'Supeeeer Lisaa',
  description:'Acepto tu solicitud',
  visto:true},
  {id:5,
    ref:{
      tipo:'publicacion',
      info:{

        id:2,
        
        media:'https://thecompetenza.com/wp-content/uploads/2021/09/30-programming-facts-banner-min.jpg',
      }
    },
      authorPicture:'https://i.pinimg.com/474x/ee/60/0b/ee600b5178e4f1648fd1e8623f049611.jpg',
    authorName:'Alecia Jai',
    description:'Le gusta tu publicacion',
    visto:true}
    ,
    {id:6,
      ref:{
        tipo:'accion',
        info:{
          id:3,
          media:'https://www.clipartmax.com/png/middle/368-3683971_icon-af-follow-icon-af-follow.png'
     
        }
      },
      visto:true,
      authorPicture:'https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg',
    authorName:'NoseQuemas',
    description:'Te empezo  a seguir'},
    {id:7,
      ref:{
        tipo:'publicacion',
        info:{
          id:3,
          media:'https://latesthackingnews.com/wp-content/uploads/2016/10/Fact-7-programmer-facts.jpg',
        }
      },
      authorPicture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsxpJxFOtoiJhB9nvQsEsHXmgTAatQD7o7-Q&usqp=CAU',
    authorName:'Vane ay',
    description:'Ha comentado tu Publicaion',
    visto:false},
    {id:8,
      ref:{
        tipo:'accion',
      info:{
        id:2,
        media:'https://cdn-icons-png.flaticon.com/512/5278/5278593.png',
      }
      },
      authorPicture:'https://marketplace.canva.com/EAE6OH6DF2w/1/0/1600w/canva-moon-astronaut-character-twitch-profile-picture-0kkgyJSodt4.jpg',
    authorName:'tuLove',
    description:'Acepto tu solicitud',
    visto:false}
]

 export const TodasNotificacion=()=>{
    
    return (
      <div className='notificacionesPag'>
        <Nav/>
        <div className='todaNotificacionesCont'>
          {options.map((o ,i)=>(
            <div className='notiEspSing' key={i}>
              <div className={`noti notiEsp ${o.visto===false&&'notiSinVer '}`}>
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
                <img className='mediaREf' src={o.ref.info.media} alt='ref'/>
            
        </div>
            </div>
          ))}
        </div>
      </div>
    );
}