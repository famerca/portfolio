import React, { useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import { GoArrowUpRight } from "react-icons/go";

function ProjectCards(props) {
  const [isTouched, setIsTouched] = useState(false);
  const touchTimerRef = useRef(null);

  const handleClick = (event) => {
   
    if ('ontouchstart' in window) {
      
      if (isTouched)
      {
        clearTimeout(touchTimerRef.current);

        touchTimerRef.current = setTimeout(() => {
          setIsTouched(false);
        }, 3000);
        
        return;
      }
      
      
      event.preventDefault();

      setIsTouched(true);

      touchTimerRef.current = setTimeout(() => {
        setIsTouched(false);
      }, 3000);

    }

  };

  return (
    <a 
      href={props.demoLink} 
      target="_blank" 
      rel="noreferrer" 
      onClick={handleClick}
    >
      <Card className={`project-card-view ${isTouched ? 'is-touched' : ''}`}>
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
            {props.skills.map((item, index) => (
              <React.Fragment key={index}>{item}</React.Fragment>
            ))}
          </div>
        </Card.Body>
      </Card>
    </a>
  );
}

export default ProjectCards;