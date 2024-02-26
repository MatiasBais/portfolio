import React from "react";
import "../css/navBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#about">Acerca de Mi</a>

      <a href="#cv">CV</a>
      <a href="#projects">Proyectos</a>
      <a href="#contacto" className="a-right">
        Contacto
      </a>
    </nav>
  );
};

export default Navbar;
