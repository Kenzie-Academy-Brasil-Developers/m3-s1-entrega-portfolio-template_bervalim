import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

export const ProjectSection = () => {
  const { t } = useTranslation();
  return (
    <section className="section-padding" id="Projects">
      <div className="container">
        <div className={styles.projectContent}>
          <h2 className="title md">{t("Projetos")}</h2>
          <ul className={styles.projectList}>
            {projects.map((project, index) => {
              // Determinando a chave de tradução para a descrição do projeto
              const descriptionKey = `project${index + 1}Description`;

              return (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  descriptionKey={descriptionKey} // Passando a chave de tradução como propriedade
                  applicationLink={project.applicationLink}
                  repositoryLink={project.repositoryLink}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
