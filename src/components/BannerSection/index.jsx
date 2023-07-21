import { username } from "../../data/user";
import bannerImage from "../../assets/banner-img.png";
import styles from "./style.module.css";
export const BannerSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.bannerInfo}>
          <div className={styles.bannerContent}>
            <span className="username">{username}</span>
            <h1 className="title lg">Bem vindo ao meu portfólio</h1>
            <p className="paragraph ">Uma frase interessante sobre mim</p>
            <button className="btn">Saiba mais</button>
          </div>
          <img src={bannerImage} alt="BannerImage"></img>
        </div>
      </div>
    </section>
  );
};
