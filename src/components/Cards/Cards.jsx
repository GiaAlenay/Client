import { MdComputer } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { BsTabletLandscape } from "react-icons/bs";
import { HiOutlineDeviceTablet } from "react-icons/hi";
import { FiCheck } from "react-icons/fi";
import { IconContext } from "react-icons";
import { getMercadoPago ,getMercadoPagoPayment} from "../../redux/actions/premium";
import styles from "./Cards.module.css";

function Check({ text }) {
  return (
    <div className={styles.wordsTitleContainer}>
      <FiCheck />
      <span className={styles.wordsTitle}>{text}</span>
    </div>
  )
}

export function Card({ plan, btnPrice, month, title }) {
  const handleclick = async () => {
    const responseMp = await getMercadoPago("test_user_66385999@testuser.com", btnPrice, month);
    window.location.replace(responseMp.url);
  };
  const handelMercado = async ()=>{
    const respo  = await getMercadoPagoPayment()
    window.location.replace(respo.url);
  } 

  return (
    <div className={styles.mainContainerCard}>
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
        className={styles.button}
        onClick={(e)=>handelMercado(e)}
      >
        Adquirir plan
      </button>
    </div>
  );
}