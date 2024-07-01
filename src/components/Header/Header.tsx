import styles from "./Header.module.css";
import logo from "/src/assets/logo.svg";
import BurgerM from "/src/assets/BurgerMenu.svg";
import strelka from "/src/assets/strelka.svg";
import placeholder from "/src/assets/placeholder.svg";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useOnClickOutside } from "../../utils/hooks/useOnClickOutside";
import { Anchor } from "../../utils/hooks/useAnchor";
export const Header = () => {
  const [nav, setNav] = useState(false);
  const formatString=(str:string) =>{
    const parts = str.split(" ");
    const firstPart = parts.slice(0, 3).join(" ");
    const secondPart = "  " + parts.slice(3).join(" ");
    return `${firstPart}\n${secondPart}`;
  }  
  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
  };
  const sideNavBar = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(sideNavBar, () => setNav(false));
  const { t, i18n } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.item}>
          <NavLink className={styles.link} to={"/"}>
            <img className={styles.logo} src={logo} alt="logo" />
          </NavLink>
          <div className={styles.vertical_line} />
          <img className={styles.place_img} src={placeholder} alt="xz" />
          <a href="ссылка" className={styles.link}>
            <div className={styles.office}>{t("text")}</div>
          </a>
        </div>
        <div className={styles.item}>
          <div className={styles.header_button}>
            <Anchor to="Form" path="/">
              {" "}
              <button className={styles.button}>{t("calcCost")}</button>
            </Anchor>
          </div>
          <span className={styles.link}>
            <div className={styles.Drop}>
              <div className={styles.language} onClick={() => setOpen(!isOpen)}>
                {t("language")}
              </div>
              {isOpen && (
                <nav className={styles.DropDown}>
                  <ul className={styles.menulist}>
                    <li
                      onClick={() => {
                        changeLanguage("ru");
                        setOpen(false);
                      }}
                    >
                      RU
                    </li>
                    <li
                      onClick={() => {
                        changeLanguage("en");setOpen(false);}}>
                      EN
                    </li>
                    <li
                      onClick={() => {
                        changeLanguage("pl");setOpen(false);}}>
                      PL
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </span>
          <img onClick={() => setOpen(!isOpen)} className={styles.strelkaimg} style={isOpen ? { transform: 'rotate(180deg)' } : {}} src={strelka} alt="xz" />
          <div>
            <div  onClick={() => setNav(!nav)} className={styles.Burger}>
              {nav ? (
                <img src={BurgerM} alt="Open Burger Menu" />
              ) : (
                <img src={BurgerM} alt="Closed Burger Menu" />
              )}
            </div>
            {nav && (
              <div ref={sideNavBar}>
                <ul className={nav ? styles.menu : styles.active}>
                  <li >
                    <a className={styles.LiMenu} href="##"><Anchor to="About" path="/">  {" "}
                    {t("aboutUs")} </Anchor></a>
                  </li>
                  <li >
                    <a className={styles.LiMenu} href="##"><NavLink to="/vacancies" className={styles.LiMenu}>
                          {t("vacancies")}
                        </NavLink></a>
                  </li>
                  <li >
                    <a className={styles.LiMenu} href="##">          <NavLink to="/add-services" className={styles.LiMenu}>
            {t("AditionalService")}
          </NavLink></a>
                  </li>
                  <li>
                    <a className={styles.LiMenu} href="##"><NavLink to="/delivery" className={styles.LiMenu}>
                          {t("delivery")}
                        </NavLink></a>
                  </li>
                  <li >
                    <a className={styles.LiMenu} href="##"><NavLink to="/service-center" className={styles.LiMenu}>
                        {t("serviceCentr")}
                      </NavLink></a>
                  </li>
                  <li >
                    <a className={styles.LiMenu} href="##"><NavLink to="/sales" className={styles.LiMenu}>
                          {formatString(t("carSell"))}
                        </NavLink> </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.Sticky}>
      <ul className={styles.li1}>
        <li className={styles.text}>
          <div className={styles.link}>
            <Anchor to="About" path="/">
              {" "}
              {t("aboutUs")}
            </Anchor>
          </div>
        </li>
        <li className={styles.text}>
          <NavLink to="/service-center" className={styles.link}>
            {t("serviceCentr")}
          </NavLink>
        </li>
        <li className={styles.text}>
          <NavLink to="/vacancies" className={styles.link}>
            {t("vacancies")}
          </NavLink>
        </li>
        <li className={styles.text}>
          <NavLink to="/add-services" className={styles.link}>
                   {t("AditionalService")}
          </NavLink>
        </li>
        <li className={styles.text}>
          <NavLink to="/delivery" className={styles.link}>
            {t("delivery")}
          </NavLink>
        </li>
        <li className={styles.text}>
          <NavLink to="/sales" className={styles.link}>
            {t("carSell")}
          </NavLink>
        </li>
      </ul>
      </div>
    </header>
  );
};
