import portfolio from "../../assets/portfolio.png";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.headerContent}>
          <img src={portfolio} alt="Logo Portfólio"></img>
          <div className={styles.links}>
            <a href="#" className="nav">
              Sobre
            </a>
            <a href="#" className="nav">
              Stack
            </a>
            <a href="#" className="nav">
              Projetos
            </a>
          </div>
          <button className="btn">Contato</button>
        </div>
      </div>
    </header>
  );
};
