import styles from "./NoName.module.css";
import MainCar from "/src/assets/car1.svg";
import ThreeLine from "/src/assets/line.svg";
import {useTranslation} from "react-i18next";

export const NoName = () => {
  const {t} = useTranslation();
  return (
    <>
      <main>
        <div className={styles.container3}>
          <div className={styles.abotus}>
            <div className={styles.vibe}>
              <h2 className={styles.about}>{t("aboutUsLower")}</h2>
              <img className={styles.line} src={ThreeLine}/>
            </div>
            <p className={styles.paragraph}>
              {" "}
              {t("aboutUsDescriptionParagraph")}
              <ul>
                <li>{t("aboutUsDescriptionListItem1")}</li>
                <li>{t("aboutUsDescriptionListItem2")}</li>
                <li>{t("aboutUsDescriptionListItem3")}</li>
                <li>{t("aboutUsDescriptionListItem4")}</li>
                <li>{t("aboutUsDescriptionListItem5")}</li>
                <li>{t("aboutUsDescriptionListItem6")}</li>
                <li>{t("aboutUsDescriptionListItem7")}</li>
                <li>{t("aboutUsDescriptionListItem8")}</li>
                <li>{t("aboutUsDescriptionListItem9")}</li>
                <li>{t("aboutUsDescriptionListItem10")}</li>
                <li>{t("aboutUsDescriptionListItem11")}</li>
              </ul>
              {t("aboutUsDescriptionPart2")}
            </p>
          </div>
          <img className={styles.img} src={MainCar}/>
        </div>
      </main>
    </>
  );
};
