import React, { useState } from "react";
import "../css/projectPage.css";

const ProjectPage = ({ title, images, description, github, deployed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="project-page">
      <h2 id={title}>{title}</h2>

      <div className="carousel-container">
        <button className="carousel-arrow left" onClick={handlePrev}>
          ◀
        </button>

        <img
          src={images[currentIndex]}
          alt={`${title} ${currentIndex + 1}`}
          className="project-page-image"
        />

        <button className="carousel-arrow right" onClick={handleNext}>
          ▶
        </button>
      </div>

      <div className="description">
        <p>{description}</p>
      </div>
      <div>
        {github && (
          <a href={github} className="git-link" target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {deployed && (
          <a href={deployed} className="deployed-link" target="_blank" rel="noreferrer">
            Deployed
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;