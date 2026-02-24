import { useTranslation } from "react-i18next";
import "../DRY/i18n.js"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Button from "./Button";

function ContactForm({stateModal, changeStateModal}) {
    const [formData, setFormData] = useState({username: '', email: '', message: ''});
    const [showModal, setShowModal] = useState(false);
    const { t } = useTranslation();

    const sendButton = t("elementNames.send_button");

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({ ...formData, [name]: value});
        console.log(formData, { ...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = {username: formData.username, email: formData.email, message: formData.message};
        const stringifiedJsonData = JSON.stringify(dataToSend);
        try {
            const url="https://lpgconsulting.fr/send-email";
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: stringifiedJsonData
            });
            
            if (!response.ok) {
                const text = await response.text(); 
                throw new Error(t("elementNames.failure"));
            }
            const result = await response.json();
            console.log(result);
            alert(t("elementNames.success"));
            setFormData({username: '', email: '', message: ''});
            e.target.reset();
            // handleModal();         
        }
        catch(error) {
            alert("L'envoi du message a échoué. Veuilllez essayer plus tard.");
            // handleModal();
            }
    }

    return (
        <>
            <form className="contactForm" onSubmit={handleSubmit}>
                <div className="textbox">
                    <label htmlFor="username">{t("elementNames.name")}</label>
                    <input type="text" id="username" name="username" onBlur={handleChange} placeholder={t("elementNames.name_placeholder")} required />
                </div>
                <div className="textbox">
                    <label htmlFor="email">{t("elementNames.email")}</label>
                    <input type="email" id="email" name="email" onBlur={handleChange} placeholder="info@example.com" required />
                </div>
                <div className="textbox">
                    <label htmlFor="message">{t("elementNames.message")}</label>
                    <textarea type="text"name="message" rows="15" onBlur={handleChange} placeholder={t("elementNames.message_placeholder")} required />
                </div>
                <Button
                    buttonType = "submit" 
                    title = {<> <FontAwesomeIcon icon={faPaperPlane} /> {sendButton} </>}
                    value = "Send" 
                    classname = {((formData.username!="") && (formData.email!="")) ? "submit enabled" : "submit disabled"} 
                    disabled = {((formData.username=="") || (formData.email=="")) ? true : false}
                    data={formData} 
                />               
            </form>
        </>
    );
}

export default ContactForm;