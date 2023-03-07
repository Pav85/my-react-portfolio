import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.title}
          </li>
          <li>
            <strong>GitHub:</strong> {props.github}
          </li>
          <li>
            <strong>Deployment:</strong> {props.deployment}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
