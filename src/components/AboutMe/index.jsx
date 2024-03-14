import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

export const AboutMe = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const contentAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0%)" : "translateX(-100%)",
    config: { duration: 1200 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("AboutMe");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="section-padding" id="AboutMe">
      <div className="container">
        <animated.div
          className={`${styles.aboutMeContent}`}
          style={contentAnimation}
        >
          <h2 className="title md">{t("SobreMim")}</h2>
          <p className="paragraph">{t("QuemSou")}</p>
        </animated.div>
      </div>
    </section>
  );
};
