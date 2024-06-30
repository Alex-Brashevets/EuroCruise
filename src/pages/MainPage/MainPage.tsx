import {Body} from "../../components/Body/Body";
import SettlementForm from "../../components/SettelmentForm/SettlementForm";
import {NoName} from "../../components/NoName/NoName";
import styles from "./MainPage.module.css";
import watch from "/src/assets/watch.svg";
import Package from "/src/assets/ProtectPackage.svg";
import map from "/src/assets/map.svg";
import {BenefitsCard} from "../../components/BenefitsCard/BenefitsCard";
import {NewsContainer} from "../../components/NewsContainer/NewsContainer";
import {useTranslation} from "react-i18next";

const MainPage = () => {
  const {t} = useTranslation();
  return (
      <>
        <Body/>
        <SettlementForm/>
        <NoName/>
        <div className={styles.benefits_container}>
          <BenefitsCard title={t("BenefitsCardTitle1")}
                        description={<>{t("BenefitsCard1DescriptionPT1")}<br/>{t("BenefitsCard1DescriptionPT2")}<br/>{t("BenefitsCard1DescriptionPT3")}</>}
                        img={watch}/>
          <BenefitsCard title={t("BenefitsCardTitle2")}
                        description={<>{t("BenefitsCard2DescriptionPT1")}<br/>{t("BenefitsCard2DescriptionPT2")}<br/>{t("BenefitsCard2DescriptionPT3")}</>}
                        img={map}/>
          <BenefitsCard title={t("BenefitsCardTitle3")}
                        description={<>{t("BenefitsCard3DescriptionPT1")}<br/>{t("BenefitsCard3DescriptionPT2")}<br/>{t("BenefitsCard3DescriptionPT3")}</>}
                        img={Package}/>
        </div>
        <NewsContainer/>
      </>
  );
};

export default MainPage;