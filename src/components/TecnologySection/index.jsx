import { TecnologyCard } from "./TecnologyCard";
import { technologies } from "../../data/technologies";
import styles from "./style.module.css";

export const TecnologySection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.techContent}>
          <h2 className="title md">Tecnologias</h2>
          <ul className={styles.techList}>
            {technologies.map((technology) => {
              return (
                <TecnologyCard
                  key={technology.id}
                  name={technology.name}
                  img={technology.img}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
