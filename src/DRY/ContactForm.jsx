import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Button from "./Button";

function ContactForm({stateModal, changeStateModal}) {
    const [formData, setFormData] = useState({username: '', email: '', message: ''});
    const [showModal, setShowModal] = useState(false);

    /*function handleModal() {
        setShowModal(true);
    }*/

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
            const url="https://api.lpgconsulting.fr/send-email";
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: stringifiedJsonData
            });
            
            if (!response.ok) {
                const text = await response.text(); 
                throw new Error("Il y a eu une erreur.");
            }
            const result = await response.json();
            console.log(result);
            alert("Message envoyé avec succès");
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
                    <label htmlFor="username">Nom</label>
                    <input type="text" id="username" name="username" onBlur={handleChange} placeholder="Nom, prenom" required />
                </div>
                <div className="textbox">
                    <label htmlFor="email">Courriel</label>
                    <input type="email" id="email" name="email" onBlur={handleChange} placeholder="info@example.com" required />
                </div>
                <div className="textbox">
                    <label htmlFor="message">Message</label>
                    <textarea type="text"name="message" rows="15" onBlur={handleChange} placeholder="Votre message ici" required />
                </div>
                <Button
                    buttonType = "submit" 
                    title = {<> <FontAwesomeIcon icon={faPaperPlane} /> Envoyer</>}
                    value = "Send" 
                    classname = {((formData.username!="") && (formData.email!="")) ? "submit enabled" : "submit disabled"} 
                    disabled = {((formData.username=="") || (formData.email=="")) ? true : false}
                    data={formData} 
                />               
            </form>
            {/*<iframe name="hidden_iframe"/>
            {showModal && (
                <div className="overlay">
                    <div className="modal">
                        <div className="onArrival">
                            <p>Merci pour votre message.</p>
                            <p>Vous aurez un retour dans les meilleurs délais. {renderModal}</p>
                            <Button 
                                onClick={() => window.location.reload()}
                                title="Fermer"
                                classname="submit enabled"
                            />
                        </div>
                    </div>
                </div>
            )}*/}
        </>
    );
}

export default ContactForm;