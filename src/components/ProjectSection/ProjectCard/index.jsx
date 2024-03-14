import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

export const ProjectCard = ({
  name,
  descriptionKey,
  applicationLink,
  repositoryLink,
}) => {
  const { t } = useTranslation();
  const description = t(descriptionKey);

  return (
    <li className={styles.projectItem}>
      <div className={styles.projectContent}>
        <h3 className="title sm">{name}</h3>
        <p className="paragraph">{description}</p>
        <div className={styles.anchors}>
          <a href={applicationLink} className="anchor">
            {t("Aplicacao")}
          </a>
          <a href={repositoryLink} className="anchor">
            {t("Repositorio")}
          </a>
        </div>
      </div>
    </li>
  );
};
