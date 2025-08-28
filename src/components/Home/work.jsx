import { useTranslation } from 'react-i18next';
import Image from "react-bootstrap/Image";
import img from "../../Assets/home-main.svg";
import { reactElement, nextjsElement, sanityElement, TailwindElement, awsElement, mysqlElement, nodejsElement, expressElement, playwrightElement, assemblyElement, phpElement, jsElement } from "../Tooltip";


const Work = ({ active }) => {

    const { t } = useTranslation();

    const key = `works.${active}.duties`;
    console.log(key);

    let content;
    
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