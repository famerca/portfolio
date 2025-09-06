import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "./form.css";

const FormContact = () => {
    const { t } = useTranslation();
    return (
        <div className="form-container">    
            <form className="form-contact" action="https://formspree.io/f/xmozzjzj" method="POST">
                <h2>
                    {t("contact.form.title")}
                </h2>
               <p>{t("contact.form.description")}</p>
                <div className="form-group">
                    <input type="text" className="form-control" name="name" placeholder={t("contact.form.name")} />
                </div>
            
                <div className="form-group">
                    <input type="email" className="form-control" name="email" placeholder={t("contact.form.email")} />
                </div>
                
                <div className="form-group">
                    <textarea className="form-control" rows={5} name="message" placeholder={t("contact.form.message")}></textarea>
                </div>
                <button type="submit" className="btn btn-contact">{t('contact.form.submit')} <FaArrowRight /></button>
            </form>
        </div>
    );
};

export default FormContact;