import { useTranslation } from 'react-i18next';
import Image from "react-bootstrap/Image";
import img from "../../Assets/home-main.svg";
import { React, Nextjs, Sanity, Php, Js, Tailwind, Aws, Mysql, Nodejs, Express, Playwright, Assembly } from "../CustomIcons";
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

    const reactElement = <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('React')}
                    >
                        <span>
                            <React h={24} w={24} />
                        </span>
                    </OverlayTrigger>

    const nextjsElement = <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('Next.js')}
                    >
                        <span>
                            <Nextjs h={24} w={24} />
                        </span>
                    </OverlayTrigger>
    const sanityElement = <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('Sanity')}
                    >
                        <span>
                            <Sanity h={24} w={24} />
                        </span>
                    </OverlayTrigger>

    const jsElement = <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('JavaScript')}
                    >
                        <span>
                            <Js h={24} w={24} />
                        </span>
                    </OverlayTrigger>
    
    const playwrightElement = <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('Playwright')}
                    >
                        <span>
                            <Playwright h={24} w={24} />
                        </span>
                    </OverlayTrigger>

    const nodejsElement = <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('Node.js')}
                    >
                        <span>
                            <Nodejs h={24} w={24} />
                        </span>
                    </OverlayTrigger>

    const expressElement = <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('Express.js')}
                    >
                        <span>
                            <Express h={24} w={24} />
                        </span>
                    </OverlayTrigger>
    
    const awsElement = <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('AWS')}
                    >
                        <span>
                            <Aws h={24} w={24} />
                        </span>
                    </OverlayTrigger>

    const assemblyElement = <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('AssemblyAI')}
                    >
                        <span>
                            <Assembly h={24} w={24} />
                        </span>
                    </OverlayTrigger>

    const mysqlElement = <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('MySQL')}
                    >
                        <span>
                            <Mysql h={24} w={24} />
                        </span>
                    </OverlayTrigger>

    const phpElement = <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('PHP')}
                    >
                        <span>
                            <Php h={24} w={24} />
                        </span>
                    </OverlayTrigger>
    
    const TailwindElement = <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip('Tailwind')}
                    >
                        <span>
                            <Tailwind h={24} w={24} />
                        </span>
                    </OverlayTrigger>

    
    const skills = {
        "landing" : [reactElement, nextjsElement, sanityElement, TailwindElement],
        "xtetic" : [nodejsElement, expressElement, playwrightElement, awsElement],
        "inglesenminutos" : [jsElement, phpElement, mysqlElement, assemblyElement],
        "integragym" : [jsElement, phpElement, mysqlElement],
        "artofgalaxy" : [reactElement, TailwindElement]
    }

    if (active === '') {
        content = <>
            <h2>
                {t("works.duties")}
            </h2>
            <ul className="work-skills">
                <li>
                    {reactElement}
                </li>
                <li>
                    {nextjsElement}
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
                {skills[active].map((item, index) => <li key={index}>{item}</li>)}
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