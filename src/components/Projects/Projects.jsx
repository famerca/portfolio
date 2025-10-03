import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import artofgalaxy from "../../Assets/Projects/artofgalaxy.png";
import surasalud from "../../Assets/Projects/surasalud.png";
import suraautos from "../../Assets/Projects/suraautos.png";
import inglesenminutos from "../../Assets/Projects/inglesenminutos.png";
import integragym from "../../Assets/Projects/integragym.png";
import latrikmedical from "../../Assets/Projects/latrikmedical.png";
import { useTranslation } from "react-i18next";
import { reactElement, nextjsElement, sanityElement, TailwindElement, awsElement, mysqlElement, nodejsElement, expressElement, playwrightElement, assemblyElement, phpElement, jsElement } from "../Tooltip";


const projectData = [
  { imgPath: artofgalaxy, titleKey: "proyects.artofgalaxy.title", descriptionKey: "proyects.artofgalaxy.description", demoLink: "https://artofgalaxy.com", skills: [reactElement, TailwindElement], ghLink: "https://github.com/soumyajit4419/Chatify" },
  { imgPath: inglesenminutos, titleKey: "proyects.inglesenminutos.title", descriptionKey: "proyects.inglesenminutos.description", demoLink: "https://inglesenminutos.com", skills: [jsElement, phpElement, TailwindElement], ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de" },
  { imgPath: integragym, titleKey: "proyects.integragym.title", descriptionKey: "proyects.integragym.description", demoLink: "https://integragym.com", skills: [jsElement, phpElement, mysqlElement], ghLink: "https://github.com/soumyajit4419/Integra-Gym" },
  { imgPath: surasalud, titleKey: "proyects.surasalud.title", descriptionKey: "proyects.surasalud.description", demoLink: "https://polizadesaludsura.com", skills: [reactElement, nextjsElement, TailwindElement], ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de" },
  { imgPath: suraautos, titleKey: "proyects.suraautos.title", descriptionKey: "proyects.suraautos.description", demoLink: "https://www.todoriesgosura-autos-motos.com", skills: [reactElement, nextjsElement, TailwindElement], ghLink: "https://github.com/soumyajit4419/Editor.io" },
  { imgPath: latrikmedical, titleKey: "proyects.latrikmedical.title", descriptionKey: "proyects.latrikmedical.description", demoLink: "https://latrikmedical.com", skills: [reactElement, TailwindElement], ghLink: "https://github.com/soumyajit4419/Latrik-Medical" },
];

function Projects() {

  const { t } = useTranslation();
    // 1. Array de referencias para apuntar a cada ProjectCard
  const cardRefs = useRef([]);
  // 2. Estado para almacenar la visibilidad de cada tarjeta (inicialmente todas ocultas)
  const [visibleCards, setVisibleCards] = useState(Array(projectData.length).fill(false));

  // Inicializa el array de refs. Asegura que tengamos una ref para cada proyecto.
  if (cardRefs.current.length !== projectData.length) {
    // Usamos React.createRef() si la referencia no existe aún
    cardRefs.current = Array(projectData.length).fill().map((_, i) => cardRefs.current[i] || React.createRef());
  }

   // 3. Lógica centralizada de Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      // La animación se activa cuando el elemento está a 100px del borde inferior del viewport
      rootMargin: '0px 0px -100px 0px', 
      threshold: 0.1, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Buscar el índice del elemento observado en el array de referencias
        const index = cardRefs.current.findIndex(ref => ref.current === entry.target);
        
        if (entry.isIntersecting && index !== -1) {
          // Actualizar el estado de la tarjeta específica (en cascada)
          // Usamos setTimeout para crear el efecto de retraso de 100ms entre tarjetas
          setTimeout(() => {
              setVisibleCards(prev => {
                  if (prev[index]) return prev; 
                  const newVisibleCards = [...prev];
                  newVisibleCards[index] = true;
                  return newVisibleCards;
              });

              // Dejar de observar después de que la animación se haya activado
              observer.unobserve(entry.target);
          }, index * 100); // 100ms de retraso por cada tarjeta
        }
      });
    }, observerOptions);

    // Observar cada elemento de la tarjeta
    cardRefs.current.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Función de limpieza
    return () => observer.disconnect();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar

  return (
      <Container className="home-section project-section" id="projects">
        <h1 className="project-heading">
          {t("proyects.title.first")} <strong className="purple">{t("proyects.title.second")}</strong>
        </h1>
        <p style={{ color: "white" }}>
          {t("proyects.description")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project, index) => (
            <Col key={project.titleKey} md={4} className="project-card">
              <ProjectCard
                // 4. Se pasa la referencia a la tarjeta hija
                ref={cardRefs.current[index]}
                // 5. Se pasa el estado de visibilidad al prop 'show'
                show={visibleCards[index]}
                
                // Props existentes
                isBlog={false}
                imgPath={project.imgPath}
                title={t(project.titleKey)}
                description={t(project.descriptionKey)}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                skills={project.skills}
              />
            </Col>
          ))}
        </Row>
      </Container>
  );
}

export default Projects;
