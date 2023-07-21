import gitIcon from "../../../assets/git-icon.png";
import styles from "./style.module.css";

export const ProjectCard = ({ name, description }) => {
  return (
    <li className={styles.projectItem}>
      <div className={styles.projectContent}>
        <h3 className="title sm">{name}</h3>
        <p className="paragraph">{description}</p>
        <a href="#" className="anchor">
          Saiba mais
        </a>
      </div>
      <img src={gitIcon} alt="gitIcon"></img>
    </li>
  );
};
