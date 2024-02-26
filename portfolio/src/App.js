import "./App.css";

import Navbar from "./componentes/navBar";
import AboutMe from "./componentes/aboutMe";
import TarjetaProyecto from "./componentes/tarjetaProyecto";
import projectImage1 from "./img/ikacoords.png"; // Ruta de la imagen del proyecto 1
import projectImage2 from "./img/melicompara.png"; // Ruta de la imagen del proyecto 2
import projectImage3 from "./img/academia.png"; // Ruta de la imagen del proyecto 3
import projectImage4 from "./img/faqutn.png"; // Ruta de la imagen del proyecto 4
import Contacto from "./componentes/contacto";

function App() {
  const proyectos = [
    {
      title: "IkaCoords",
      image: projectImage1,
      description:
        "Web hecha con Laravel para realizar búsquedas de información sobre un juego de navegador llamado Ikariam",
      link: "https://github.com/MatiasBais/IkaCoordsLaravel",
      linkText: "IkaCoords",
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
      <Contacto />
    </div>
  );
}

export default App;
