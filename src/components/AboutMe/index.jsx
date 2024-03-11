import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

export const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <section className="section-padding" id="AboutMe">
      <div className="container">
        <div className={styles.aboutMeContent}>
          <h2 className="title md">{t("SobreMim")}</h2>
          <p className="paragraph">{t("QuemSou")}</p>
        </div>
      </div>
    </section>
  );
};
