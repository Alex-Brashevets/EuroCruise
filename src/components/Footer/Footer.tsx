import { ReactNode } from "react";
import logo from "/src/assets/logo.svg";
import styles from "./Footer.module.css";
import vector from "/src/assets/Vector.svg";
import Vector from '/src/assets/VectorM.svg'
import telephone from '/src/assets/TeleP.svg'
import {QuestionUsForm} from "../QuestionUsForm/QuestionUsForm";
export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_container}>
        <div className={styles.container_img}>
          <img className={styles.logo2} src={logo} alt="" />
          <div className={styles.columText}>
            <img className={styles.vector_img} width="24" height="24" src={vector} />
            <div className={styles.FooterText}>Республика Беларусь,<br /> г.Ковердяки, Брестская область 225032<br />ул. 40 Лет Победы 15 </div>
          </div>
          <div className={styles.columText}>
            <img className={styles.vector_img} src={Vector} />
            <div className={styles.FooterText}>haddawy@comcast.net</div>
          </div>
          <div className={styles.columText}>
            <img className={styles.vector_img} src={telephone} />
            <div className={styles.FooterText}>(334) 202-4792</div>
          </div>
        </div>
        <div className={styles.Question}>
          <QuestionUsForm/>
        </div>
        <div className={styles.CompanyMain}>
          <div className={styles.Company}>КОМПАНИЯ</div>
          <ul className={styles.info}>
            <li className={styles.info_container}>о нас</li>
            <li className={styles.info_container}>карьера</li>
            <li className={styles.info_container}>Вакансии</li>
            <li className={styles.info_container}>доставка грузов</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};