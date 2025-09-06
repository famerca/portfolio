import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiPhp,
  SiMysql,
  SiDocker
} from "react-icons/si";
import { LiaAws, LiaAngular, LiaWordpress } from "react-icons/lia";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p>Javascript | Typescript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
        <p>PHP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p>Nodejs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p>Mongodb</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p>Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p>Git y ithub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <LiaAws />
        <p>Amazon Web Services</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <LiaAngular />
        <p>Angular</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <LiaWordpress />
        <p>Wordpress</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p>C | C++</p>
      </Col>
    </Row>
  );
}

export default Techstack;
