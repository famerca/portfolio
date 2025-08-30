import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/portrait.jpg";
import Particle from "../Particle";
import { useLocation } from "react-router-dom";
import Type from "./Type";
import { useTranslation } from 'react-i18next';
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Experience from "./experience";
import Projects from "../Projects/Projects";
import About from "../About/About";

function Home() {

  const location = useLocation();

  useEffect(() => {
    // Revisa si hay un 'state' y si contiene la propiedad 'scrollTo'
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Ejecuta el scroll suave al elemento
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  const { t } = useTranslation();

  return (
    <section className="background">
      <Container className="home-section" id="home">
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
                <PrimaryButton text={t("contact me")} icon={true} />
              </div>
             
              <div style={{ padding: 40, paddingTop: 0, textAlign: "left" }}>
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
      <Experience />
      <Projects />
      {/* <Home2 /> */}
      <About />
    </section>
  );
}

export default Home;
