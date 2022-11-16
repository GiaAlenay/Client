import { MdComputer } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { BsTabletLandscape } from "react-icons/bs";
import { HiOutlineDeviceTablet } from "react-icons/hi";
import { FiCheck } from "react-icons/fi";
import { IconContext } from "react-icons";
import { getMercadoPago } from "../../redux/actions/premium";
import styles from "./Cards.module.css";
import { useMercadopago } from "react-sdk-mercadopago";
import { useEffect, useState } from "react";
import logo from "./logo.png"

import CheckoutForm from "./Stripe/Checkout";
import axios from 'axios';

import { useSelector } from 'react-redux';



function Check({ text }) {
  return (
    <div className={styles.wordsTitleContainer}>
      <FiCheck />
      <span className={styles.wordsTitle}>{text}</span>
    </div>
  )
}



export function Card({ plan, title, month}) {
 
  
  

  return (

    <div className={styles.container}>
      <div className={styles.card}>

      
      <div className={`${styles.left_column} ${styles.background_left_column}`}>
        <h5>Premium</h5>
        <h2>SYT </h2>
        <img src={logo} alt="SYT" className={styles.logo}/>
      </div>

      <div className={styles.rigth_column}>
        <div>
          <h3>{title}</h3>
          <h6>Al mejor Precio</h6>
          <span className={styles.plan}>{plan}</span>
          <h6>{month}</h6>
        </div>

        <h2>Disfuta de los mejores Beneficios</h2>
        <Check text={'Filtrado de Experiencia'} />
        <Check text={'Nuevos avatares mas facheros facheritos'} />
        <Check text={'Nuevos avatares mas facheros facheritos'} />
        <br/>
        <div className={styles.conta}> 
        <div className="boxxStripe">
          <CheckoutForm/>
        </div>
        </div>
        
      </div>
      
      </div>




       {/* <div className={styles.mainContainerCard}>
      <span className={styles.Title}>SYT {title}</span>
      <div className={styles.iconsContainer}>
        <IconContext.Provider value={{ className: `${styles.icono}`}}>
          <HiOutlineDeviceTablet />
          <BsTabletLandscape />
          <MdComputer />
          <RiComputerLine />
        </IconContext.Provider>
      </div>
      <div className={styles.cardwordsContainer}>
        <Check text={'Nuevos avatares mas facheros facheritos'} />

      </div>
      <span className={styles.plan}>{plan}</span>
      <button
        // onClick={handleclick}
      >
        Adquirir plan
      </button>
      <div className="cho-container"></div>
    </div>  */}

    </div>
    
  );
}