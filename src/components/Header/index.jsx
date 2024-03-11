import portfolio from "../../assets/portfolio.png";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.headerContent}>
          <img src={portfolio} alt="Logo Portfólio"></img>
          <div className={styles.links}>
            <a href="#AboutMe" className="nav">
              Sobre
            </a>
            <a href="#Stack" className="nav">
              Stack
            </a>
            <a href="#Projects" className="nav">
              Projetos
            </a>
          </div>
          <a href="#Contact">
            <button className="btn">Contato</button>
          </a>
        </div>
      </div>
    </header>
  );
};
