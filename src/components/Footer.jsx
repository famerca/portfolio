import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const { t } = useTranslation();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3> {t("footer.develop")} Fabian Flores</h3>
        </Col>
        <Col md="4" className="footer-copywright">
         <h3>Template by <a href="https://github.com/soumyajit4419/Portfolio" target="_blank" rel="noopener noreferrer">Soumyajit4419</a></h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/famerca"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
        
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/fabian-flores-a783091a8/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://github.com/famerca/portfolio"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <CgGitFork />
              </a>
            </li>
      
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
