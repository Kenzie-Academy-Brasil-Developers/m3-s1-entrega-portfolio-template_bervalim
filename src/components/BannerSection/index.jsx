import { username } from "../../data/user";
import profileImage from "../../assets/profileImage.jpg";
import styles from "./style.module.css";

export const BannerSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.bannerInfo}>
          <div className={styles.bannerContent}>
            <span className="username">{username}</span>
            <h1 className="title lg">Bem vindo ao meu portfólio</h1>
            <p className="paragraph ">
              Um desenvolvedor full stack e entusiasta por tecnologia
            </p>
            <button className="btn">Saiba mais</button>
          </div>
          <img src={profileImage} alt="ProfileImage"></img>
        </div>
      </div>
    </section>
  );
};
