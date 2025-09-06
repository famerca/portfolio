import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";

function ProjectCards(props) {
  
  return (
    <a href={props.demoLink} target="_blank" rel="noreferrer">
      <Card className="project-card-view">
        <Card.Img loading="lazy" variant="top" src={props.imgPath} alt="card-img" />
        <span className="link-icon">
          <GoArrowUpRight />
        </span>
        <Card.Body>
          <h5>{props.title}</h5>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <div className="skills">
            {props.skills.map((item, index) => item)}
          </div>
        </Card.Body>
      </Card>
    </a>
  );
}
export default ProjectCards;
