import styles from "./style.module.css";

export const TecnologyCard = ({ name, img }) => {
  return (
    <li className={styles.techItem}>
      <img src={img} alt={name}></img>
      <h3 className="title sm">{name}</h3>
    </li>
  );
};
