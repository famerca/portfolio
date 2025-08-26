import { useTranslation } from 'react-i18next';
import { FaBriefcase } from "react-icons/fa";
import { useState } from "react";

const Timeline = () => {

    const { t } = useTranslation();
    const [active, setActive] = useState(-1);

    const handleClick = (index) => {
        if(active == index)
            setActive(-1);
        else
            setActive(index);
    }

    return (
        <ul class="timeline">
            <li class={"timeline-item" + (active == 0 ? " active" : "" )}  onClick={() => handleClick(0)} >
                <h5 class="fw-bold">{t("works.landing.title")}</h5>
                <p class="text-muted mb-2">{t("works.landing.start")} - {t("works.landing.end")}</p>
                <p class="">{t("works.landing.description")}</p>
                <FaBriefcase />
            </li>

            <li class={"timeline-item" + (active == 1 ? " active" : "" )}  onClick={() => handleClick(1)} >
                <h5 class="fw-bold">{t("works.artofgalaxy.title")}</h5>
                <p class="text-muted mb-2">{t("works.artofgalaxy.start")} - {t("works.artofgalaxy.end")}</p>
                <p class="">{t("works.artofgalaxy.description")}</p>
                <FaBriefcase />
            </li>

            <li class={"timeline-item" + (active == 2 ? " active" : "" )}  onClick={() => handleClick(2)} >
                <h5 class="fw-bold">{t("works.xtetic.title")}</h5>
                <p class="text-muted mb-2">{t("works.xtetic.start")} - {t("works.xtetic.end")}</p>
                <p class="">{t("works.xtetic.description")}</p> 
                <FaBriefcase />
            </li>

            <li class={"timeline-item" + (active == 3 ? " active" : "" )}  onClick={() => handleClick(3)} >
                <h5 class="fw-bold">{t("works.inglesenminutos.title")}</h5>
                <p class="text-muted mb-2">{t("works.inglesenminutos.start")} - {t("works.inglesenminutos.end")}</p>
                <p class="">{t("works.inglesenminutos.description")}</p>
                <FaBriefcase />
            </li>

            <li class={"timeline-item" + (active == 4 ? " active" : "" )}  onClick={() => handleClick(4)} >
                <h5 class="fw-bold">{t("works.integragym.title")}</h5>
                <p class="text-muted mb-2">{t("works.integragym.start")} - {t("works.integragym.end")}</p>
                <p class="">{t("works.integragym.description")}</p>
                <FaBriefcase />
            </li>

        </ul>
       
);
};

export default Timeline;