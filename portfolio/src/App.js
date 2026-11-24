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
import Experiencia from "./componentes/experiencia";
import { LanguageProvider, useLang } from "./context/LanguageContext";
import t from "./translations";

const proyectosBase = [
  {
    key: "FAQ UTN",
    images: [faqutn1, faqutn2, faqutn3, faqutn4, faqutn5],
    github: "https://github.com/MatiasBais/FAQ-UTN",
    deployed: "",
  },
  {
    key: "Turnos",
    images: [turnos],
    github: "https://github.com/MatiasBais/TurnosFront",
    deployed: "",
  },
  {
    key: "MeliCompara",
    images: [melicompara1],
    github: "https://github.com/MatiasBais/TPISoporteG12",
    deployed: "",
  },
  {
    key: "BetuchaAccesorios",
    images: [betucha1, betucha2],
    github: "https://github.com/MatiasBais/betuchaAccesorios",
    deployed: "",
  },
  {
    key: "IkaCoords",
    images: [ikacoords1, ikacoords2, ikacoords3],
    github: "https://github.com/MatiasBais/IkaCoordsLaravel",
    deployed: "",
  },
  {
    key: "Academia",
    images: [projectImage3],
    github: "https://github.com/MatiasBais/AcademiaNet",
    deployed: "",
  },
];

const AppContent = () => {
  const { lang } = useLang();
  const proyectosTrad = t[lang].projects;

  const proyectos = proyectosBase.map((p, i) => ({
    ...p,
    title: proyectosTrad[i].title,
    description: proyectosTrad[i].description,
  }));

  return (
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
          />
        ))}
      </div>
      <div className="projects-container">
        {proyectos.map((proyecto, index) => (
          <ProjectPage
            key={index}
            title={proyecto.title}
            images={proyecto.images}
            description={proyecto.description}
            github={proyecto.github}
            deployed={proyecto.deployed}
          />
        ))}
      </div>
      <Experiencia />
      <Contacto />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
