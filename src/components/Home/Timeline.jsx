import { useTranslation } from 'react-i18next';
import { FaBriefcase } from "react-icons/fa";


const Timeline = ({ active, setActive }) => {

    const { t } = useTranslation();
    

    const handleClick = (index) => {
        if(active == index)
            setActive("");
        else
            setActive(index);
    }

    return (
        <ul class="timeline">
            <li class={"timeline-item" + (active == "landing" ? " active" : "" )}  onClick={() => handleClick('landing')} >
                <h5 class="fw-bold">{t("works.landing.title")}</h5>
                <p class="text-muted mb-2">{t("works.landing.start")} - {t("works.landing.end")}</p>
                <p class="">{t("works.landing.description")}</p>
                <FaBriefcase />
            </li>

            <li class={"timeline-item" + (active == 'artofgalaxy' ? " active" : "" )}  onClick={() => handleClick('artofgalaxy')} >
                <h5 class="fw-bold">{t("works.artofgalaxy.title")}</h5>
                <p class="text-muted mb-2">{t("works.artofgalaxy.start")} - {t("works.artofgalaxy.end")}</p>
                <p class="">{t("works.artofgalaxy.description")}</p>
                <FaBriefcase />
            </li>

            <li class={"timeline-item" + (active == 'xtetic' ? " active" : "" )}  onClick={() => handleClick('xtetic')} >
                <h5 class="fw-bold">{t("works.xtetic.title")}</h5>
                <p class="text-muted mb-2">{t("works.xtetic.start")} - {t("works.xtetic.end")}</p>
                <p class="">{t("works.xtetic.description")}</p> 
                <FaBriefcase />
            </li>

            <li class={"timeline-item" + (active == 'inglesenminutos' ? " active" : "" )}  onClick={() => handleClick('inglesenminutos')} >
                <h5 class="fw-bold">{t("works.inglesenminutos.title")}</h5>
                <p class="text-muted mb-2">{t("works.inglesenminutos.start")} - {t("works.inglesenminutos.end")}</p>
                <p class="">{t("works.inglesenminutos.description")}</p>
                <FaBriefcase />
            </li>

            <li class={"timeline-item" + (active == 'integragym' ? " active" : "" )}  onClick={() => handleClick('integragym')} >
                <h5 class="fw-bold">{t("works.integragym.title")}</h5>
                <p class="text-muted mb-2">{t("works.integragym.start")} - {t("works.integragym.end")}</p>
                <p class="">{t("works.integragym.description")}</p>
                <FaBriefcase />
            </li>

        </ul>
       
);
};

export default Timeline;