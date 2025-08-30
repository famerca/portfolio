import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ES, US } from 'country-flag-icons/react/3x2';
import { useTranslation } from 'react-i18next';


import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const handleNavigateAndScroll = (path, elementId = "") => {

    if(elementId === ""){
      navigate(path);
    }else{
      navigate(path, { state: { scrollTo: elementId } });
    }

  };


  const handleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="https://www.linkedin.com/in/fabian-flores-a783091a8/" target="_blank" className="d-flex">
          <FaLinkedinIn title="LinkedIn" className="header-icons" />
        </Navbar.Brand>
        <Navbar.Brand href="https://github.com/famerca" target="_blank" className="d-flex">
          <AiFillGithub title="Github" className="header-icons" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
           
            <Nav.Item>
              <Nav.Link
                onClick={() => handleNavigateAndScroll("/", "home")}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => handleNavigateAndScroll("/", "projects")}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {t("project")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => handleNavigateAndScroll("/resume")}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t("resume")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              {i18n.language === "en" ? (
                <Button
                  className="fork-btn-inner"
                  onClick={handleLanguage}
                >
                  En
                  <US title="United States" width="24" style={{ marginLeft: "5px" }} />
                </Button>
              ) : (
                <Button
                  className="fork-btn-inner"
                  onClick={handleLanguage}
                >
                  Es
                  <ES title="España" width="24" style={{ marginLeft: "5px" }} />
                </Button>
              )}
             
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
