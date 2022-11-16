import { Card } from "../../components/Cards/Cards";
import styles from "./GoPremium.module.css";

export function GoPremium() {

  return (
    <>
      <div className={styles.mainContainer } >
        <div className={styles.subcontainer} >
          <h1 className={styles.Title} >Plan Premium</h1>
          <span
            className={ styles.SubTitle }
          >
            Hazte premium y disfrutalos
          </span>
          <div className={styles.suspendido}>
                <a href="/home" className={styles.button}>Regresar</a>
            </div>
        </div>
        <div className={styles.containerCard }>
            <Card
            plan={"$2"}
            btnPrice={"30"}
            month={"Anual"}
            title={"Membresia"}
          />
        </div>
      </div>
    </>
  );
}