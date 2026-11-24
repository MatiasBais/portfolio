import React from "react";
import "../css/navBar.css";
import cv from "../pdfs/MatiasBaisCV.pdf";
import { useLang } from "../context/LanguageContext";
import t from "../translations";

const Navbar = () => {
  const { lang, toggle } = useLang();
  const nav = t[lang].nav;

  return (
    <nav className="navbar">
      <a href="#about">{nav.about}</a>
      <a href={cv} download>CV</a>
      <a href="#projects">{nav.projects}</a>
      <a href="#experiencia">{nav.experience}</a>
      <a href="#contacto" className="a-right">{nav.contact}</a>
      <button className="lang-switch" onClick={toggle} aria-label="Switch language">
        {lang === "es" ? "EN" : "ES"}
      </button>
    </nav>
  );
};

export default Navbar;
