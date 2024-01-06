import BreadCrumb from "../Components/Modules/BreadCrumb";
import SectionHeader from "../Components/Modules/SectionHeader";
import Service from "../Components/Modules/Service";

import IndexProjects from "../Components/Templates/Index/Projects";

const Projects = () => {
  return (
    <div className="container">
      <BreadCrumb route="پروژه ها" />
      <SectionHeader englishTitle="Projects" persianTitle="پروژه های ما" />
      <div className="my-32">
        <IndexProjects />
      </div>
    </div>
  );
};
export default Projects;
