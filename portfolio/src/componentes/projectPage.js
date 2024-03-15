// ProjectPage.js
import React from "react";
import image from "../img/academia.png"
import "../css/projectPage.css"

const ProjectPage = ({ title, image, description, github, deployed }) => {
  return (
    <div className="project-page">
      <h2 id={title}>{title}</h2>

      <img src={image} alt={title} className="project-page-image" />
      <div className="description">
        <p>{description}</p>
      </div>
      <div>
        {github !== "" ? <a href={github} className="git-link" target="_blank">GitHub</a> : null}
        {deployed !== "" ? <a href={deployed} className="deployed-link" target="_blank">Deployed</a> : null}
      </div>
    </div>
  );
};

export default ProjectPage;
