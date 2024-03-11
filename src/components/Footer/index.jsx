import { user } from "../../data/user";
import whatsappIcon from "../../assets/whatsappIcon.png";
import linkedinIcon from "../../assets/linkedinIcon.png";
import githubIcon from "../../assets/githubIcon.png";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer} id="Contact">
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.flexbox}>
            <h2 className="title md">{t("Contato")}</h2>
            <div className={styles.imageContent}>
              <a href="https://wa.me/41984969334">
                <img src={whatsappIcon} alt="whatsappIcon" />
              </a>
              <a href="https://www.linkedin.com/in/bernardo-valim/">
                <img src={linkedinIcon} alt="linkedinIcon" />
              </a>
              <a href="https://github.com/bervalim">
                <img src={githubIcon} alt="githubIcon" />
              </a>
            </div>
          </div>
          <p className="paragraph">
            {t("direitos")} {user}
          </p>
        </div>
      </div>
    </footer>
  );
};
