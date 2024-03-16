import "./App.css";

import Navbar from "./componentes/navBar";
import AboutMe from "./componentes/aboutMe";
import TarjetaProyecto from "./componentes/tarjetaProyecto";
import projectImage1 from "./img/ikacoords.png"; // Ruta de la imagen del proyecto 1
import projectImage2 from "./img/melicompara.png"; // Ruta de la imagen del proyecto 2
import projectImage3 from "./img/academia.png"; // Ruta de la imagen del proyecto 3
import projectImage4 from "./img/faqutn.png"; // Ruta de la imagen del proyecto 4
import projectImage5 from "./img/Turnos.png";
import Contacto from "./componentes/contacto";
import ProjectPage from "./componentes/projectPage";

function App() {
  const proyectos = [
    {
      title: "FAQ UTN",
      image: projectImage4,
      description:
        "Web desarrollada con Node para realizar preguntas y respuestas dentro de un contexto acádemico.",
      github: "https://github.com/c3r38r170/FAQ-UTN",
      deployed: "https://faq-utn-production.up.railway.app/",
    },
    {
      title: "MeliCompara",
      image: projectImage2,
      description:
        "Web desarrollada con Flask para comparar precios de Mercado Libre a través del tiempo.",
      github: "https://github.com/MatiasBais/TPISoporteG12",
      deployed: "https://melicompara.pythonanywhere.com/",
    },
    {
      title: "Turnos",
      image: projectImage5,
      description:
        "Aplicación enlatada para la reserva de turnos desarrollado con ReactNative",
      github: "https://github.com/MatiasBais/TurnosFront",
      deployed: "",
    },
    {
      title: "IkaCoords",
      name: "project1",
      image: projectImage1,
      description:
        "Proyecto en Laravel para buscar información acerca del popular juego de navegador Ikariam",
      github: "https://github.com/MatiasBais/IkaCoordsLaravel",
      deployed: "https://ikacoords.heliohost.us",
    },
    {
      title: "Academia",
      image: projectImage3,
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
              image={proyecto.image}
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
              image={proyecto.image}
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
