import React from "react";
import "../css/aboutMe.css";
import backgroundImage from "../img/fondo.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="about-me-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-container">
          <h2>Acerca de Mi</h2>
          <p>
            ¡Hola! Soy Matías Bais, Ingeniero en Sistemas de Información recibido en la UTN Rosario (2018–2025).
          </p>
          <p>
            Estoy orientado al desarrollo de software y la creación de soluciones tecnológicas, con experiencia en desarrollo Full Stack. Me considero una persona proactiva, responsable y con facilidad para aprender y trabajar en equipo.
          </p>
          <p>
            Trabajo con C#, JavaScript (Angular, Node, React), Python, SQL, PHP/Laravel y Java/Spring Boot. Soy hablante nativo de español y fluido en inglés.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
