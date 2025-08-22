import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/portrait.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useTranslation } from 'react-i18next';
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function Home() {
  const { t } = useTranslation();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              {/* <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1> */}

              <h1 className="heading-name">
                {t("im")}
                <strong className="main-name"> Fabian</strong>
              </h1>
              <h2 className="heading-description">
                {t("description")}
              </h2>

              <div style={{paddingLeft: 40}}>
                <PrimaryButton text={t("contact me")} />
              </div>
             
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid img-home"
                style={{ maxHeight: "350px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
