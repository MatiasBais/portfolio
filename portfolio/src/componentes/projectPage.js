// ProjectPage.js
import React from "react";
import image from "../img/academia.png"
import "../css/projectPage.css"

const ProjectPage = ({ title, name, image, description, p1, p2, github, deployed}) => {
  return (
    <div className="project-page" name={name}>
      <div className="left">
      <img src={image} alt={title} className="project-page-image" />
      </div>
      <div className="right">
        <h3>{title}</h3>
        <div className="description">
            <p>{description}</p>
            <p>{p1}</p>
            <p>{p2}</p>
        </div>
        <div>
            {github !== "" ? <a href={github} className="git-link">GitHub</a> : null}
            {deployed !== "" ? <a href={deployed} className="deployed-link">Deployed</a> : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
