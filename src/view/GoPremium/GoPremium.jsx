import { Card } from "../../components/Cards/Cards";
import styles from "./GoPremium.module.css";

export function GoPremium() {

  return (
    <>
      <div
        className={styles.mainContainer }
      >
        <div
          className={styles.subcontainer}
        >
          <span
            className={styles.Title}
          >
            ¿Quieres mejores veneficios?
          </span>
          <br/>
          <span
            className={ styles.SubTitle }
          >
            hazte premium y disfrutalos
          </span>
        </div>
        <div
          className={styles.containerCard }
        >
          <Card
            plan={"$999.99 / 1 month"}
            btnPrice={"10"}
            month={"1"}
            title={"Monthly"}
          />
            <Card
            plan={"$9999.99 / 6 month"}
            btnPrice={"20"}
            month={"6"}
            title={"Monthly"}
          />
            <Card
            plan={"$99999.99 / 12 month"}
            btnPrice={"30"}
            month={"12"}
            title={"Monthly"}
          />
        </div>
      </div>
    </>
  );
}