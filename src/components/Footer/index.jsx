import { user } from "../../data/user";
import whatsappIcon from "../../assets/whatsapp-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import githubIcon from "../../assets/github-icon.png";
import styles from "./style.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.flexbox}>
            <h2 className="title md">Contato</h2>
            <div className={styles.imageContent}>
              <img src={whatsappIcon} alt="whatsappIcon" />
              <img src={linkedinIcon} alt="linkedinIcon" />
              <img src={githubIcon} alt="githubIcon" />
            </div>
          </div>
          <p className="paragraph">Todos os direitos reservados - {user}</p>
        </div>
      </div>
    </footer>
  );
};
