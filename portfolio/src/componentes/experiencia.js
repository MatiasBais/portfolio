import React from "react";
import "../css/experiencia.css";
import { useLang } from "../context/LanguageContext";
import t from "../translations";

const Experiencia = () => {
  const { lang } = useLang();
  const exp = t[lang].experience;

  return (
    <section id="experiencia" className="experiencia-section">
      <h2 className="experiencia-title">{exp.title}</h2>
      <div className="experiencia-timeline">
        {exp.items.map((item, i) => (
          <div key={i} className="experiencia-item">
            <div className="experiencia-header">
              <span className="experiencia-cargo">{item.cargo}</span>
              <span className="experiencia-empresa">{item.empresa}</span>
              <span className="experiencia-periodo">{item.periodo}</span>
            </div>
            <ul className="experiencia-tareas">
              {item.tareas.map((tarea, j) => (
                <li key={j}>{tarea}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiencia;
