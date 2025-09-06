import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import Form from "./Form";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoSend, IoCopy } from "react-icons/io5";

const Contact = () => {
    const { t } = useTranslation();
    return (
        <Container fluid className="home-section" id="contact">
            <Row>
                <Col md={6} className="contact-left">
                   <h1>FIND ME ON</h1>
                    <p>
                    Feel free to <span className="purple">connect </span>with me
                    </p>
                    <ul className="home-about-social-links">
                        <li className="social-icons">
                            <a
                            href="https://github.com/soumyajit4419"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                            >
                            <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                            href="https://twitter.com/Soumyajit4419"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                            >
                            <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                            href="https://www.linkedin.com/in/soumyajit4419/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                            >
                            <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                            href="https://www.instagram.com/soumyajit4419"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                            >
                            <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                    <div className="contact-email">
                        <span>famersos@hotmail.com</span>
                        <a className="btn" href="javascript:void(0)">
                            <IoCopy />
                        </a>
                        <a className="btn" href="mailto:famersos@hotmail.com">
                            <IoSend />
                        </a>
                        
                    </div>
                </Col>
                <Col md={6} className="contact-right">
                    <Form />
                </Col>
            </Row>
        </Container>
    )
}

export default Contact