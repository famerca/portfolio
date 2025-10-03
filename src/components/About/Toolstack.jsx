import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiSlack,
  SiUbuntu,
  SiFigma
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
        <p>Linux | Ubuntu</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoVisualStudio />
        <p>Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p>Figma</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
