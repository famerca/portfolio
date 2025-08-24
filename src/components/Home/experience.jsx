import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';


const Experience = () => {
    const { t } = useTranslation();
    return (
        <Container fluid className="home-section" id="xp">
            <Row>
                <Col md={8} className="home-about-description">
                    <h1 style={{ fontSize: "2.6em" }}>
                        <span className="purple">{t("experience")}</span>
                    </h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Experience