import { TecnologyCard } from "./TecnologyCard";
import { technologies } from "../../data/technologies";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

export const TecnologySection = () => {
  const { t } = useTranslation();
  return (
    <section className="section-padding" id="Stack">
      <div className="container">
        <div className={styles.techContent}>
          <h2 className="title md">{t("Tecnologias")}</h2>
          <ul className={styles.techList}>
            {technologies.map((technology) => {
              return (
                <TecnologyCard
                  key={technology.id}
                  name={technology.name}
                  img={technology.img}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
