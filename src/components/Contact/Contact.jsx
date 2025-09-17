import { Container, Row, Col } from "react-bootstrap";
import { useTranslation, Trans } from 'react-i18next';
import FormContact from "./Form";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoSend, IoCopy } from "react-icons/io5";

const Contact = () => {
    const { t } = useTranslation();
    const clipboard = () =>
    {
        navigator.clipboard.writeText("famersos@hotmail.com");
    }
    return (
        <Container fluid className="home-section" id="contact">
            <Row>
                <Col md={6} className="contact-left">
                   <h1>{t("contact.title")}</h1>
                    <p>
                        <Trans i18nKey="contact.description">
                            t <span className="purple">t</span> t
                        </Trans>
                    </p>
                    <ul className="home-about-social-links">
                        <li className="social-icons">
                            <a
                            href="https://github.com/famerca"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                            >
                            <AiFillGithub />
                            </a>
                        </li>
                       
                        <li className="social-icons">
                            <a
                            href="https://www.linkedin.com/in/fabian-flores-a783091a8/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                            >
                            <FaLinkedinIn />
                            </a>
                        </li>
                        
                    </ul>
                    <div className="contact-email">
                        <span>famersos@hotmail.com</span>
                        <a className="btn" href="#email" onClick={clipboard}>
                            <IoCopy />
                        </a>
                        <a className="btn" href="mailto:famersos@hotmail.com">
                            <IoSend />
                        </a>
                        
                    </div>
                </Col>
                <Col md={6} className="contact-right">
                    <FormContact />
                </Col>
            </Row>
        </Container>
    )
}

export default Contact