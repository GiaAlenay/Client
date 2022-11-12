import { MdComputer } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { BsTabletLandscape } from "react-icons/bs";
import { HiOutlineDeviceTablet } from "react-icons/hi";
import { FiCheck } from "react-icons/fi";
import { IconContext } from "react-icons";
import { getMercadoPago ,getMercadoPagoPayment} from "../../redux/actions/premium";
import styles from "./Cards.module.css";
import { useEffect ,useState} from "react";
import { useMercadopago } from "react-sdk-mercadopago";

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
  //   const responseMp = await getMercadoPago("test_user_80440501@testuser.com", btnPrice, month);
  //   window.location.replace(responseMp.url);
  // };
  const mercadopago = useMercadopago.v2(
    "APP_USR-d319d9f1-1689-4260-97c8-8d2d34a85cb2",
    {
      locale: "es-AR"
    }
  );
  console.log(mercadopago)
  const [rendered, setRendered] = useState(false)
  useEffect(() => {
    if (mercadopago && !rendered) {
      mercadopago.checkout({
        preference: {
          id: "1234560647-57d1ba6e-de6d-4258-96f1-39148ed0c8bb"
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
        className={styles.button}
      >
        Adquirir plan
      </button>
      <div className="cho-container"></div>
    </div>
  );
}