import portfolio from "../../assets/portfolio.png";
import Logo from "../../assets/logoB.png";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import euaIcon from "../../assets/euaIcon.png";
import brazilIcon from "../../assets/iconBrazil.png";
import { useContext, useState } from "react";
import { LanguageContext } from "../providers/LanguageContext";

export const Header = () => {
  const { t } = useTranslation();

  const { currentLanguage, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <p className={styles.Logo}>B</p>
          <img
            className={styles.Nation}
            onClick={toggleLanguage}
            src={currentLanguage === "en" ? brazilIcon : euaIcon}
          />
          <div className={styles.iconCountry}></div>
          <div className={styles.links}>
            <a href="#AboutMe" className="nav">
              {t("Sobre")}
            </a>
            <a href="#Stack" className="nav">
              {t("Tecnologias")}
            </a>
            <a href="#Projects" className="nav">
              {t("Projetos")}
            </a>
          </div>
          <a href="#Contact">
            <button className="btn">{t("Contato")}</button>
          </a>
        </div>
      </div>
    </header>
  );
};
