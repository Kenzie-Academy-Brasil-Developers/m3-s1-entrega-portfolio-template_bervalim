import { useSpring, animated } from "react-spring";
import styles from "./style.module.css";

export const TecnologyCard = ({ name, img, index, isHovered }) => {
  // Define a configuração de animação para cada card
  const cardAnimation = useSpring({
    opacity: isHovered ? 1 : 0.5,
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    config: { tension: 300, friction: 10 },
    delay: isHovered ? index * 50 : 0, // Adicione um pequeno atraso para criar um efeito de cascata
  });

  return (
    <animated.li style={cardAnimation} className={styles.techItem}>
      <img src={img} alt={name} />
      <h3 className="title sm">{name}</h3>
    </animated.li>
  );
};
