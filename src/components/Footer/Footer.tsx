
import logo from "/src/assets/logo.svg";
import styles from "./Footer.module.css";
import vector from "/src/assets/Vector.svg";
import Vector from '/src/assets/VectorM.svg'
import telephone from '/src/assets/TeleP.svg'
import {QuestionUsForm} from "../QuestionUsForm/QuestionUsForm";
import { Anchor } from "../../utils/hooks/useAnchor";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Suspense } from "react";
import FooterMap from "../FooterMap/FooterMap";


const Footer = () => {
  const { t, i18n } = useTranslation();
 
  return (
    <footer>
      <div className={styles.footer_container}>
        <div className={styles.container_img}>
          <img src={logo} alt="" />
          <div className={styles.colum_text}>
            <img className={styles.vector_img} width="24" height="24" src={vector} />
            <div className={styles.footer_text}>Республика Беларусь,<br /> г.Ковердяки, Брестская область 225032<br />ул. 40 Лет Победы 15 </div>
          </div>
          <div className={styles.colum_text}>
            <img className={styles.vector_img} src={Vector} />
            <div className={styles.footer_text}>haddawy@comcast.net</div>
          </div>
          <div className={styles.colum_text}>
            <img className={styles.vector_img} src={telephone} />
            <div className={styles.footer_text}>(334) 202-4792</div>
          </div>
          <Suspense>
            <FooterMap/>
          </Suspense>
        </div>
        <div className={styles.question}>
          <QuestionUsForm/>
        </div>
        <div className={styles.CompanyFooter}>
          <div className={styles.Company}>КОМПАНИЯ</div>
          <ul className={styles.info}>
            <li className={styles.info_container}><Anchor to="About" path="/">
            {t("aboutUs")} </Anchor></li>
            <li className={styles.info_container}><NavLink to="/vacancies" >
            {t("vacancies")} </NavLink></li>
            <li className={styles.info_container}><NavLink to="/delivery">
            {t("delivery")} </NavLink></li>
            
          </ul>
        </div>
      </div>
    </footer>
  );
};


export default Footer;