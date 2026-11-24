import React from "react";
import "../css/contacto.css";
import { useLang } from "../context/LanguageContext";
import t from "../translations";

const Contacto = () => {
  const { lang } = useLang();
  const contact = t[lang].contact;

  return (
    <section id="contacto" className="contact-section">
      <h2>{contact.title}</h2>
      <p>{contact.subtitle}</p>
      <ul>
        <li>
          <a href="mailto:matiasbais1998@gmail.com">matiasbais1998@gmail.com</a>
        </li>
        <li>
          <a href="tel:+542474492062">+54 2474 492062</a>
        </li>
        <li>
          <a href="https://github.com/MatiasBais">{contact.github}</a>
        </li>
      </ul>
    </section>
  );
};

export default Contacto;
