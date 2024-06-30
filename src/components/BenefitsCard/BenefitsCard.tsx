import React, { ReactNode } from "react";
import styles from "./BenefitsCard.module.css";

interface BenefitsCardProps{
  title:string, description:ReactNode, img:string}
export const BenefitsCard = ({title,description,img} :BenefitsCardProps) => {
  return ( 
        <div className={styles.Benifit}>
            <div className={styles.title}>
              {title}
            </div>
            <div className={styles.descriptionText}>
            <div className={styles.card_text}>
              {description}
            </div>
            <img  src={img} alt="item" />
            </div>
        </div>
   );
};
