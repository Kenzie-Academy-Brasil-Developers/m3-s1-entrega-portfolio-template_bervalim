import portfolio from "../../assets/portfolio.png";
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
    <header>
      <div className="container">
        <div className={styles.headerContent}>
          <img src={portfolio} alt="Logo Portfólio"></img>
          <div className={styles.iconCountry}>
            <img
              onClick={toggleLanguage}
              src={currentLanguage === "en" ? brazilIcon : euaIcon}
            />
          </div>
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
