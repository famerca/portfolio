import  { useTranslation } from 'react-i18next';
import Image from "react-bootstrap/Image";
import img  from "../../Assets/home-main.svg";
import { React, Nextjs } from "../CustomIcons";

const Work = ({active}) => {

    const { t } = useTranslation();

    const key = `works.${active}.duties`;
    console.log(key);   

    let content;

    if(active == '')
        content = <>
            <h2>
                {t("works.duties")}
            </h2>
            <ul className="work-skills">
                <li>
                    <React h={24} w={24} />
                </li>
                <li>
                    <Nextjs h={24} w={24} />
                </li>
            </ul>
            <ul className="work-duties">
            </ul>
        </>;
    else
        content = <>
            <h2>
                {t("works.duties")}
            </h2>
            <ul className="work-skills">
                <li>
                    <React h={24} w={24} />
                </li>
                <li>
                    <Nextjs h={24} w={24} />
                </li>
            </ul>
            <ul className="work-duties">
                {t(key, { returnObjects: true }).map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>;

    return (
        <div className={"work-section " + (active != '' ? "active" : "")}>
            {content}
            <Image src={img} alt="experience" className="img-fluid" />
        </div>
    )
}

export default Work