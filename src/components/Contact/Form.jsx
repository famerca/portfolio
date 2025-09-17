import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import "./form.css";

const FormContact = () => {
    const { t } = useTranslation();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    

    const endpoint = "https://formspree.io/f/xovnodww";


    const handleSubmit = (e) => {

        e.preventDefault();
        const data = new FormData(e.target);
        setLoading(true);

        fetch(endpoint, {
            method: "POST",
            headers: {
                //"Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: data,
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if(data.ok)
            {
                setSuccess(true);
            }
        });

    };

    const loader = <div className={"loader" + (success ? " done" : "")}></div>
    
    const successAnimation = (
        <div class="success-animation">
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
            <p>{t("contact.success")}</p>
        </div>
    )

    const form  = <form className={`form-contact ${loading ? "loading" : ""}`} onSubmit={handleSubmit}>
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


    return (
        <div className="form-container">    
            {success ? successAnimation : form}
            {loading ? loader : null}
        </div>
    );
};

export default FormContact;