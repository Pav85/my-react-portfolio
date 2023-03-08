import React from "react";
import ProjectsPageJumbotron from "../ProjectsPageJumbotron/ProjectsPageJumbotron";
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "./projects.json";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <section className="container containerStyle">
      <ProjectsPageJumbotron />
      <div className="row myCol">
        <div className="col-sm colStyle">
          <ProjectCard
            image={projects[0].image}
            title={projects[0].title}
            github={projects[0].github}
            deployment={projects[0].deployment}
            description={projects[0].description}
          />
        </div>
        <div className="col-sm colStyle">
          <ProjectCard
            image={projects[2].image}
            title={projects[2].title}
            github={projects[2].github}
            deployment={projects[2].deployment}
            description={projects[2].description}
          />
        </div>
        <div className="col-sm colStyle">
          <ProjectCard
            image={projects[3].image}
            title={projects[3].title}
            github={projects[3].github}
            deployment={projects[3].deployment}
            description={projects[3].description}
          />
        </div>
      </div>
      <div className="row myCol">
        <div className="col-sm colStyle">
          <ProjectCard
            image={projects[6].image}
            title={projects[6].title}
            github={projects[6].github}
            deployment={projects[6].deployment}
            description={projects[6].description}
          />
        </div>
        <div className="col-sm colStyle">
          <ProjectCard
            image={projects[4].image}
            title={projects[4].title}
            github={projects[4].github}
            deployment={projects[4].deployment}
            description={projects[4].description}
          />
        </div>
        <div className="col-sm colStyle">
          <ProjectCard
            image={projects[7].image}
            title={projects[7].title}
            github={projects[7].github}
            deployment={projects[7].deployment}
            description={projects[7].description}
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
