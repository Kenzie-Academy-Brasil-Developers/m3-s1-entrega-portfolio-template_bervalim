import { username } from "../../data/user";
import profileImage from "../../assets/profileImg.jpg";
import styles from "./style.module.css";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

export const BannerSection = () => {
  const { t } = useTranslation();
  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.bannerInfo}>
          <div className={styles.bannerContent}>
            <span className="username">{username}</span>
            <h1 className="title lg">{t("BemVindo")}</h1>
            <p className="paragraph ">
              <Typewriter
                options={{
                  strings: [t("Apresentacao")],
                  autoStart: true,
                  loop: true,
                  delay: 10,
                }}
              />
            </p>
            <button className="btn">{t("SaibaMais")}</button>
          </div>
          <img src={profileImage} alt="ProfileImage"></img>
        </div>
      </div>
    </section>
  );
};
