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
            <div className={styles.banner_description}>
              {t("bannerDescriptionP1")}<br/>{" "}
              {t("bannerDescriptionP2")}
            </div>
        </div>
      </div>
      <div className={styles.about_us_container}>
        <div id="About" className={styles.about_us}>
          <div className={styles.container_about}>
            <h2 className={styles.about_us}>{t("aboutUsLower")}</h2>
            <img className={styles.line_0f_three} src={ThreeLine}/>
          </div>
          <p className={styles.description_paragraph}>
            {" "}
            {t("aboutUsDescription")}
          </p>
        </div>
        <img className={styles.img_car} src={MainCar} />
      </div>
    </>
  );
};
