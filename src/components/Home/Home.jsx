import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import portrait300 from "../../Assets/portrait300.webp";
import portrait500 from "../../Assets/portrait500.webp";
import Particle from "../Particle";
import { useLocation } from "react-router-dom";
import Type from "./Type";
import { useTranslation } from 'react-i18next';
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Experience from "./experience";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";

function Home() {

  const location = useLocation();
  const { t } = useTranslation();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    // Revisa si hay un 'state' y si contiene la propiedad 'scrollTo'
    if (location.state?.scrollTo) {
      scrollTo(location.state.scrollTo);
    }
  }, [location.state]);

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

              <div className="heading-padding">
                <PrimaryButton text={t("contact me")} icon={true} onClick={() => scrollTo("contact")} />
              </div>
             
              <div className="heading-padding" style={{ paddingTop: 0, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
                 <picture>
                  {/* Fuente para pantallas grandes */}
                  <source srcSet={portrait500} media="(min-width: 500px)" type="image/webp" />

                  {/* Fuente para pantallas pequeñas */}
                  <source srcSet={portrait300} media="(max-width: 500px)" type="image/webp" />
                  
                  {/* Imagen principal con alta prioridad para LCP */}
                  <img
                    src={portrait300}
                    alt="Fabian Portrait"
                    className="img-home"
                    fetchpriority="high"
                    loading="eager"
                  />
                </picture>
            </Col>
          </Row>
        </Container>
      </Container>
      <Experience />
      <Projects />
      <About />
      <Contact />
    </section>
  );
}

export default Home;
