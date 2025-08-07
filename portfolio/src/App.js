import "./App.css";

import Navbar from "./componentes/navBar";
import AboutMe from "./componentes/aboutMe";
import TarjetaProyecto from "./componentes/tarjetaProyecto";
import ikacoords1 from "./img/ikacoords1.png";
import ikacoords2 from "./img/ikacoords2.png";
import ikacoords3 from "./img/ikacoords3.png";

import faqutn1 from "./img/faqutn1.png";
import faqutn2 from "./img/faqutn2.png";
import faqutn3 from "./img/faqutn3.png";
import faqutn4 from "./img/faqutn4.png";
import faqutn5 from "./img/faqutn5.png";

import melicompara1 from "./img/melicompara.png";

import betucha1 from "./img/betucha1.png";
import betucha2 from "./img/betucha2.png";

import turnos from "./img/Turnos.png";

import projectImage3 from "./img/academia.png";

import Contacto from "./componentes/contacto";
import ProjectPage from "./componentes/projectPage";

function App() {
  const proyectos = [
    {
      title: "FAQ UTN",
      images: [faqutn1, faqutn2, faqutn3, faqutn4, faqutn5],
      description:
        "Web desarrollada con Node para realizar preguntas y respuestas dentro de un contexto acádemico.",
      github: "https://github.com/MatiasBais/FAQ-UTN",
      deployed: "",
      //deployed: "https://faq-utn-production-bb46.up.railway.app/",
    },
    {
      title: "Turnos",
      images: [turnos],
      description:
        "Aplicación enlatada para la reserva de turnos desarrollado con ReactNative",
      github: "https://github.com/MatiasBais/TurnosFront",
      deployed: "",
    },
    {
      title: "MeliCompara",
      images: [melicompara1],
      description:
        "Web desarrollada con Flask para comparar precios de Mercado Libre a través del tiempo. MeLi cortó el acceso de la api a búsquedas por lo que ya no anda.",
      github: "https://github.com/MatiasBais/TPISoporteG12",
      deployed: "",
      //deployed: "https://melicompara.pythonanywhere.com/",
    },
    {
      title: "BetuchaAccesorios",
      images: [betucha1, betucha2],
      description:
        "WebApp desarrollada en Laravel para un negocio. Control básico de precios",
      github: "https://github.com/MatiasBais/betuchaAccesorios",
      deployed: "",
    },
    {
      title: "IkaCoords",
      name: "project1",
      images: [ikacoords1, ikacoords2, ikacoords3],
      description:
        "Proyecto en Laravel para buscar información acerca del popular juego de navegador Ikariam",
      github: "https://github.com/MatiasBais/IkaCoordsLaravel",
      deployed: "https://ikacoords.heliohost.us",
    },
    {
      title: "Academia",
      images: [projectImage3],
      description:
        "Aplicación de escritorio hecha con C# para la administración de una universidad.",
      github: "https://github.com/MatiasBais/AcademiaNet",
      deployed: "",
    },

  ];


  return (
    <>
      <div>
        <Navbar />
        <AboutMe />
        <div id="projects" className="project-cards-container">
          {proyectos.map((proyecto, index) => (
            <TarjetaProyecto
              key={index}
              title={proyecto.title}
              image={proyecto.images[0]}
              description={proyecto.description}
              link={proyecto.link}
              linkText={proyecto.linkText}
            />
          ))}
        </div>
        <div className="projects-container">
          {proyectos.map((proyecto, index) => (
            <ProjectPage
              key={index}
              title={proyecto.title}
              name={proyecto.name}
              images={proyecto.images}
              description={proyecto.description}
              p1={proyecto.p1}
              p2={proyecto.p2}
              github={proyecto.github}
              deployed={proyecto.deployed}
              linkText={proyecto.linkText}
            />
          ))}
        </div>
        <Contacto />
      </div>
    </>
  );
}

export default App;
