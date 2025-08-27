import { useTranslation } from 'react-i18next';
import Image from "react-bootstrap/Image";
import img from "../../Assets/home-main.svg";
import { React, Nextjs } from "../CustomIcons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Work = ({ active }) => {

    const { t } = useTranslation();

    const key = `works.${active}.duties`;
    console.log(key);

    let content;

    // 1. Modifica renderTooltip para que acepte un 'tooltipText'
    const renderTooltip = (tooltipText) => (props) => (
        <Tooltip id={`tooltip-${tooltipText}`} className="light-tooltip" {...props}>
            {tooltipText}
        </Tooltip>
    );

    if (active === '') {
        content = <>
            <h2>
                {t("works.duties")}
            </h2>
            <ul className="work-skills">
                <li>
                    {/* 2. Llama a renderTooltip con el texto deseado */}
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('React')}
                    >
                        <React h={24} w={24} />
                    </OverlayTrigger>
                </li>
                <li>
                    {/* 3. Haz lo mismo para Next.js */}
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('Next.js')}
                    >
                        <Nextjs h={24} w={24} />
                    </OverlayTrigger>
                </li>
            </ul>
            <ul className="work-duties">
            </ul>
        </>;
    } else {
        content = <>
            <h2>
                {t("works.duties")}
            </h2>
            <ul className="work-skills">
                <li>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('React')}
                    >
                        <span>
                            <React h={24} w={24} />
                        </span>
                    </OverlayTrigger>
                </li>
                <li>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('Next.js')}
                    >
                        <span>
                            <Nextjs h={24} w={24} />
                        </span>
                    </OverlayTrigger>
                </li>
             
            </ul>
            <ul className="work-duties">
                {t(key, { returnObjects: true }).map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>;
    }

    return (
        <div className={"work-section " + (active !== '' ? "active" : "")}>
            {content}
            <Image src={img} alt="experience" className="img-fluid" />
        </div>
    );
};

export default Work;