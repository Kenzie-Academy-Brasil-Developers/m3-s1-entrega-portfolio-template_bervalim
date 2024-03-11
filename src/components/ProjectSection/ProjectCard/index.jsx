import gitIcon from "../../../assets/git-icon.png";
import styles from "./style.module.css";

export const ProjectCard = ({
  name,
  description,
  applicationLink,
  repositoryLink,
}) => {
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
