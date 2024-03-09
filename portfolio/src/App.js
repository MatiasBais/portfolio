import "./App.css";

import Navbar from "./componentes/navBar";
import AboutMe from "./componentes/aboutMe";
import TarjetaProyecto from "./componentes/tarjetaProyecto";
import projectImage1 from "./img/ikacoords.png"; // Ruta de la imagen del proyecto 1
import projectImage2 from "./img/melicompara.png"; // Ruta de la imagen del proyecto 2
import projectImage3 from "./img/academia.png"; // Ruta de la imagen del proyecto 3
import projectImage4 from "./img/faqutn.png"; // Ruta de la imagen del proyecto 4
import Contacto from "./componentes/contacto";
import ProjectPage from "./componentes/projectPage";

function App() {
  const proyectos = [
    {
      title: "IkaCoords",
      name: "project1",
      image: projectImage1,
      description:
        "A Laravel project for obtaining valuable information about the popular web browser game Ikariam",
        p1:"Data is collected through a Python script performing web scraping on the game.",
        p2:"Users can explore cities using diverse criteria such as player name, city name, or even geographical location on the game map. Additionally, the webpage offers highscores rankings not available in the game itself.",
        github: "https://github.com/MatiasBais/IkaCoordsLaravel",
      deployed: "https://ikacoords.heliohost.us",
    },
    {
      title: "MeliCompara",
      image: projectImage2,
      description:
        "Web desarrollada con Flask para comparar precios de Mercado Libre a través del tiempo.",
      link: "https://github.com/MatiasBais/TPISoporteG12",
      linkText: "MeliCompara",
    },
    {
      title: "Academia",
      image: projectImage3,
      description:
        "Aplicación de escritorio hecha con C# para la administración de una universidad.",
      link: "https://github.com/MatiasBais/AcademiaNet",
      linkText: "Academia",
    },
    {
      title: "FAQ UTN",
      image: projectImage4,
      description:
        "Web desarrollada con Node para realizar preguntas y respuestas dentro de un contexto acádemico.",
      link: "",
      linkText: "FAQ UTN",
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
        <Contacto />
      </div>
    </>
  );
}

export default App;
