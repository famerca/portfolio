import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import artofgalaxy from "../../Assets/Projects/artofgalaxy.png";
import surasalud from "../../Assets/Projects/surasalud.png";
import suraautos from "../../Assets/Projects/suraautos.png";
import { useTranslation } from "react-i18next";
import { reactElement, nextjsElement, sanityElement, TailwindElement, awsElement, mysqlElement, nodejsElement, expressElement, playwrightElement, assemblyElement, phpElement, jsElement } from "../Tooltip";

function Projects() {

  const { t } = useTranslation();

  return (
      <Container className="home-section" id="projects">
        <h1 className="project-heading">
          {t("proyects.title.first")} <strong className="purple">{t("proyects.title.second")}</strong>
        </h1>
        <p style={{ color: "white" }}>
          {t("proyects.description")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              key={1}
              imgPath={artofgalaxy}
              isBlog={false}
              title={t("proyects.artofgalaxy.title")}
              description={t("proyects.artofgalaxy.description")}
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://artofgalaxy.com"
              skills={[reactElement, TailwindElement]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              key={2}
              imgPath={surasalud}
              isBlog={false}
              title={t("proyects.surasalud.title")}
              description={t("proyects.surasalud.description")}
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://polizadesaludsura.com"
              skills={[reactElement, nextjsElement, TailwindElement]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              key={3}
              imgPath={suraautos}
              isBlog={false}
              title={t("proyects.suraautos.title")}
              description={t("proyects.suraautos.description")}
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://www.todoriesgosura-autos-motos.com"   
              skills={[reactElement, nextjsElement, TailwindElement]}
            />
          </Col>

        </Row>
      </Container>
  );
}

export default Projects;
