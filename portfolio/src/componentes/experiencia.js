import React from "react";
import "../css/experiencia.css";

const experiencias = [
  {
    cargo: "Full-Stack Developer",
    empresa: "HHyD",
    periodo: "Mayo 2026 – Diciembre 2026",
    tareas: [
      "Contrato por Proyecto para el Congreso de la República del Perú",
      "Desarrollo de un Sistema de Gestión de Activos",
      "Desarrollo de un Sistema de Gestión de Visitas",
      "Implementación de un frontend en Angular",
      "Implementación de un backend con Spring Boot y SQL Server",
    ],
  },
];

const Experiencia = () => {
  return (
    <section id="experiencia" className="experiencia-section">
      <h2 className="experiencia-title">Experiencia Laboral</h2>
      <div className="experiencia-timeline">
        {experiencias.map((exp, i) => (
          <div key={i} className="experiencia-item">
            <div className="experiencia-header">
              <span className="experiencia-cargo">{exp.cargo}</span>
              <span className="experiencia-empresa">{exp.empresa}</span>
              <span className="experiencia-periodo">{exp.periodo}</span>
            </div>
            <ul className="experiencia-tareas">
              {exp.tareas.map((t, j) => (
                <li key={j}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiencia;
