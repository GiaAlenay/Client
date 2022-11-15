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
function Check({ text }) {
  return (
    <div className={styles.wordsTitleContainer}>
      <FiCheck />
      <span className={styles.wordsTitle}>{text}</span>
    </div>
  )
}

export function Card({ plan, title }) {
  // const handleclick = async () => {
  //   const responseMp = await getMercadoPago("test_user_66385999@testuser.com", btnPrice, month);
  //   window.location.replace(responseMp.url);
  // };
  const mercadopago = useMercadopago.v2(
    "APP_USR-d319d9f1-1689-4260-97c8-8d2d34a85cb2",
    {
      locale: "es-AR"
    }
  );
  

  const [rendered, setRendered] = useState(false)
  useEffect(() => {
    if (mercadopago && !rendered) {
      mercadopago.checkout({
        preference: {
          id: "1234560647-4cf33a55-9b7b-4878-9329-4b797442af84"
        },
        render: {
          container: ".cho-container",
          label: "Pagar"
        }
      });
      setRendered(true);
    }
    
  }, [mercadopago,rendered]);

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
        // onClick={handleclick}
      >
        Adquirir plan
      </button>
      <div className="cho-container">pagar</div>
    </div>
  );
}