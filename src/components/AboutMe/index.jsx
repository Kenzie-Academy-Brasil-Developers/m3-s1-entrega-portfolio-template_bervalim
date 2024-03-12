import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const AboutMe = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section className="section-padding" id="AboutMe">
      <div className="container">
        <div
          ref={ref}
          className={`${styles.aboutMeContent} ${
            isVisible ? styles.visible : ""
          }`}
        >
          <h2 className="title md">{t("SobreMim")}</h2>
          <p className="paragraph">{t("QuemSou")}</p>
        </div>
      </div>
    </section>
  );
};
