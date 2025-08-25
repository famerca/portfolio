import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import Timeline from "./Timeline";
import Image from "react-bootstrap/Image";
import img  from "../../Assets/home-main.svg";

const Experience = () => {
    const { t } = useTranslation();
    return (
        <Container fluid className="home-section container" id="xp">
            <Row>
                <Col md={7} >
                    <section className="home-experience">
                        <h1 style={{ fontSize: "2.6em"}}>
                            <span className="purple">{t("experience")}</span>
                        </h1>
                        <Timeline />
                    </section>
                </Col>
                <Col md={5} className="home-about-body">
                    <Image src={img} alt="experience" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    )
}

export default Experience