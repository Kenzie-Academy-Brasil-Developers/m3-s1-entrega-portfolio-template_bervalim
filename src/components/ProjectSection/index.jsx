import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";
import styles from "./style.module.css";
export const ProjectSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.projectContent}>
          <h2 className="title md">Projetos</h2>
          <ul className={styles.projectList}>
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  description={project.description}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
