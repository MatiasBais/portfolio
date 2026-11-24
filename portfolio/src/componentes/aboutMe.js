import React from "react";
import "../css/aboutMe.css";
import backgroundImage from "../img/fondo.jpg";
import { useLang } from "../context/LanguageContext";
import t from "../translations";

const AboutMe = () => {
  const { lang } = useLang();
  const about = t[lang].about;

  return (
    <div id="about" className="about-me-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-container">
          <h2>{about.title}</h2>
          <p>{about.p1}</p>
          <p>{about.p2}</p>
          <p>{about.p3}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
