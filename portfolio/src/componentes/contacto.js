import React from "react";
import "../css/contacto.css";

const Contacto = () => {
  return (
    <section id="contacto" className="contact-section">
      <h2>Contacto</h2>
      <p>Puedes encontrarme en:</p>
      <ul>
        <li>
          <a href="mailto:matiasbais1998@gmail.com">matiasbais1998@gmail.com</a>
        </li>
        <li>
          <a href="tel:+542474492062">+54 2474 492062</a>
        </li>
        <li>
          <a href="https://github.com/MatiasBais">Mi perfil de GitHub</a>
        </li>
      </ul>
    </section>
  );
};

export default Contacto;
