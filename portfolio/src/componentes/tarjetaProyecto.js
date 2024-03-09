import React from "react";
import "../css/tarjetaProyecto.css";

const TarjetaProyecto = ({ title, image, description, linkPage="", linkText="" }) => {
  return (
    <a href={`#${linkPage}`} className="project-link">
      <div className="project-card">
        <div className="project-details">
          <h3>{title}</h3>
  
          <img src={image} alt={title} className="project-image" />
          <p>{description}</p>
          <span>{linkText}</span>
        </div>
      </div>
    </a>
  );
};

export default TarjetaProyecto;

