import { useTranslation } from 'react-i18next';

const Form = () => {
    const { t } = useTranslation();
    return (
        <div className="contact-form">
            <h1 className="contact-form-title">
                <span className="purple">{t("contact me")}</span>
            </h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">{t("name")}</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">{t("email")}</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">{t("message")}</label>
                    <textarea className="form-control" id="message" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">{t("send")}</button>
            </form>
        </div>
    )
}

export default Form