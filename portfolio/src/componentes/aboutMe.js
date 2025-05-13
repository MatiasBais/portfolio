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
            ¡Hola! Soy Matías Bais, Ingeniero en Sistemas de la
            UTN Argentina.
          </p>
          <p>
            Me apasiona la programación desde chico y he aprendido varios
            lenguajes como C#, SQL, Python y JavaScript. Además, durante mi
            carrera he explorado Java, PHP, SmallTalk, Pascal, C y
            más.
            Soy fluido en Inglés
          </p>
          <p>
            He estado involucrado en proyectos usando diferentes frameworks como Node.JS, Laravel, React, ReactNative, entre otros
            Actualmente estoy colaborando en un proyecto de preservación que intenta revivir y restaurar el juego de Flash de 2010 Backyard Monsters
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
