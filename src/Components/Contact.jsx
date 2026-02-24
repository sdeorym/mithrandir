import { useTranslation } from "react-i18next";
import "../DRY/i18n.js"
import '../styles/Contact.css'
import ContactForm from "../DRY/ContactForm.jsx";

function Contact() {
    const { t } = useTranslation();
    return (
        <>
            <h2>{t("sectionTitles.contact")}</h2>
            <ContactForm />
        </>
    )
}

export default Contact