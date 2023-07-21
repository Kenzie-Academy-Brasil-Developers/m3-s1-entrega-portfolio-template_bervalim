import styles from "./style.module.css";

export const AboutMe = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.aboutMeContent}>
          <h2 className="title md">Sobre mim</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex
            magna, imperdiet sodales sem quis, sollicitudin lobortis purus.
            Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis
            pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a
            velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis
            turpis, at feugiat orci.
          </p>
        </div>
      </div>
    </section>
  );
};
