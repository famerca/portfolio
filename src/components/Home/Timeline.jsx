import { useTranslation } from 'react-i18next';

const Timeline = () => {

    const { t } = useTranslation();

    return (
        <ul class="timeline">
            <li class="timeline-item">
                <h5 class="fw-bold">{t("works.landing.title")}</h5>
                <p class="text-muted mb-2">{t("works.landing.start")} - {t("works.landing.end")}</p>
                <p class="">{t("works.landing.description")}</p>
            </li>

            <li class="timeline-item">
                <h5 class="fw-bold">{t("works.xtetic.title")}</h5>
                <p class="text-muted mb-2">{t("works.xtetic.start")} - {t("works.xtetic.end")}</p>
                <p class="">{t("works.xtetic.description")}</p> 
            </li>

            <li class="timeline-item">
                <h5 class="fw-bold">{t("works.inglesenminutos.title")}</h5>
                <p class="text-muted mb-2">{t("works.inglesenminutos.start")} - {t("works.inglesenminutos.end")}</p>
                <p class="">{t("works.inglesenminutos.description")}</p>
            </li>

            <li class="timeline-item">
                <h5 class="fw-bold">{t("works.integragym.title")}</h5>
                <p class="text-muted mb-2">{t("works.integragym.start")} - {t("works.integragym.end")}</p>
                <p class="">{t("works.integragym.description")}</p>
            </li>

        </ul>
       
);
};

export default Timeline;