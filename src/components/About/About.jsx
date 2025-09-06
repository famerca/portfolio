import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useTranslation, Trans } from 'react-i18next';


function About() {
  return (
        <Container fluid className="home-about-section" id="about">
          <Container>
             <h1 className="project-heading">
                Professional <strong className="purple">Skillset </strong>
              </h1>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
              >
                
                <p className="home-about-body">
                  <Trans i18nKey="skills.description.p1">
                     t <b></b> t <b></b> t <b></b> t <b></b> t <b></b> t <b></b> t <b></b> t
                  </Trans>
                </p>
                <p className="home-about-body pt-3">
                  <Trans i18nKey="skills.description.p2">
                    t <b></b> t <b></b> t <b></b> t <b></b> t <b></b> t <b></b> t <b></b> t
                  </Trans>
                </p>
              </Col>
              <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
              >
                <img src={laptopImg} alt="about" className="img-fluid" />
              </Col>
            </Row>
           

            <Techstack />

            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
            <Toolstack />

            <Github />
          </Container>
        </Container>

  );
}

export default About;
