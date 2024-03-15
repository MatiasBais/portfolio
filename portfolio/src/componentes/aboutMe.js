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
            ¡Hola! Soy Matías Bais, un estudiante de Ingeniería en Sistemas en la
            UTN Argentina. Estoy en el último tramo de mis estudios y solo me
            faltan tres exámenes para obtener mi título.
          </p>
          <p>
            Me apasiona la programación desde chico y he aprendido varios
            lenguajes como C#, SQL, Python y JavaScript. Además, durante mi
            carrera he explorado Java, PHP, SmallTalk, Pascal, C y
            más.
          </p>
          <p>
            He estado involucrado en proyectos usando diferentes frameworks como Node.JS, Laravel, React, ReactNative, entre otros
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
