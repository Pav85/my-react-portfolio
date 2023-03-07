import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import ProjectsPageJumbotron from "../ProjectsPageJumbotron/ProjectsPageJumbotron";
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "./projects.json";

function ProjectsPage() {
  return (
    <div>
      <ProjectsPageJumbotron />
      <Wrapper>
        <div className="row">
          <div className="col-sm myCol">
            <ProjectCard
              image={projects[0].image}
              title={projects[0].title}
              github={projects[0].github}
              deployment={projects[0].deployment}
            />
          </div>
          <div className="col-sm myCol">
            <ProjectCard
              image={projects[2].image}
              title={projects[2].title}
              github={projects[2].github}
              deployment={projects[2].deployment}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm myCol">
            <ProjectCard
              image={projects[0].image}
              title={projects[0].title}
              github={projects[0].github}
              deployment={projects[0].deployment}
            />
          </div>
          <div className="col-sm">
            <ProjectCard
              image={projects[0].image}
              title={projects[0].title}
              github={projects[0].github}
              deployment={projects[0].deployment}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default ProjectsPage;
