import { AboutMe } from "../../components/AboutMe";
import { BannerSection } from "../../components/BannerSection";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { ProjectSection } from "../../components/ProjectSection";
import { TecnologySection } from "../../components/TecnologySection";

export const HomePage = () => {
  return (
    <>
      <DefaultTemplate>
        <BannerSection />
        <AboutMe />
        <TecnologySection />
        <ProjectSection />
      </DefaultTemplate>
    </>
  );
};
