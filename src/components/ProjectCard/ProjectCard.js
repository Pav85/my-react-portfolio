import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <a href={props.deployment} target="_blank">
        <div className="img-container">
          {/* <a href={props.deployment} target="blank"> */}
          <img alt={props.title} src={props.image} />
          {/* </a> */}
        </div>
      </a>
      <div className="content">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <a href={props.github} target="_blank">
          <button type="button" className="btn btnStyle">
            <i className="fa fa-github icon"></i>&nbsp;GitHub
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
