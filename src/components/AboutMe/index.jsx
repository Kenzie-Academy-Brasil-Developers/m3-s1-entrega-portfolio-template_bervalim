import styles from "./style.module.css";

export const AboutMe = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.aboutMeContent}>
          <h2 className="title md">Sobre mim</h2>
          <p className="paragraph">
            Interessado por tecnologia desde pequeno, atualmente estou em
            transição de carreira para o desenvolvimento de software . Acredito
            que a tecnologia tem o poder de transformar o mundo, trazendo
            acessibilidade, disrupção e evolução para todos, dessa forma fico
            entusiasmado em fazer parte dessa transformação. Possuo experiência
            na construção de projetos full stack e familiaridade com conceitos
            de reatividade, autenticação, autorização, construção de
            documentação de APIs com swagger, e desenvolvimento de aplicações em
            linguagem single-thread, Vivências em utilização de Metodologias
            ágeis, como dailies ,1:1 e sprints.
          </p>
        </div>
      </div>
    </section>
  );
};
