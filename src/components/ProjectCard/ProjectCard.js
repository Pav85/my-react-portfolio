import React from "react";
import "./ProjectCard.css";
import { FaGithub } from "react-icons/fa";

function ProjectCard(props) {
  return (
    <div className="card">
      <a href={props.deployment} target="_blank" rel="noreferrer">
        <div className="img-container">
          <img alt={props.title} src={props.image} />
        </div>
      </a>
      <div className="content">
        <h4>{props.title}</h4>
        <hr />
        <p>{props.description}</p>
        <a href={props.github} target="_blank" rel="noreferrer">
          <button type="button" className="btn btnStyle">
            <FaGithub className="icon" size={"26px"} />
            &nbsp;GitHub
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
