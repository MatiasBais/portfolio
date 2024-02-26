import React from "react";
import "../css/tarjetaProyecto.css";

const TarjetaProyecto = ({ title, image, description, link, linkText }) => {
  return (
    <div className="project-card">
      <div className="project-details">
        <h3>{title}</h3>

        <img src={image} alt={title} className="project-image" />
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default TarjetaProyecto;
