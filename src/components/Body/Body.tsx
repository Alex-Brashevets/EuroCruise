import styles from "./Body.module.css";
import MainCar from "/src/assets/car1.svg";
import ThreeLine from "/src/assets/line.svg";
import {useTranslation} from "react-i18next";

export const Body = () => {
  const {t} = useTranslation();
  return (
      <>
        <div className={styles.container}>
          <div className="">
            <h1 className={styles.text}>{t("bannerTitle")}</h1>
            <div className={styles.text2}>
              {t("bannerDescriptionP1")}<br/>{" "}
              {t("bannerDescriptionP2")}
            </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div id="About" className={styles.abotus}>
          <div className={styles.vibe}>
            <h2 className={styles.about}>{t("aboutUsLower")}</h2>
            <img className={styles.line} src={ThreeLine}/>
          </div>
          <p className={styles.paragraph}>
            {" "}
            {t("aboutUsDescription")}
          </p>
        </div>
        <img className={styles.img} src={MainCar} />
      </div>
    </>
  );
};
