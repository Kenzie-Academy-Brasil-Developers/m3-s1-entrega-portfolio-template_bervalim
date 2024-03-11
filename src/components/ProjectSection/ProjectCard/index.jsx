import { useTranslation } from "react-i18next";
import gitIcon from "../../../assets/git-icon.png";
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
        <a href={applicationLink} className="anchor">
          Saiba mais
        </a>
      </div>
      <a href={repositoryLink}>
        <img src={gitIcon} alt="gitIcon"></img>
      </a>
    </li>
  );
};
