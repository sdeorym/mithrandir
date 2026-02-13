import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Button from "./Button";

function ContactForm() {
    const [formData, setFormData] = useState({username: '', email: '', message: ''});
    const [showModal, setShowModal] =useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({ ...formData, [name]: value});
        console.log(formData, { ...formData, [name]: value});
    };

    const handleSubmit = () => {
        setTimeout(() => {
        setShowModal(true);
        }, 500);
    };

    return (
        <>
            <form className="contactForm" method="post" action="https://api.lpgconsulting.fr/send-email" onSubmit={handleSubmit}>
                <div className="textbox">
                    <label htmlFor="username">Nom</label>
                    <input type="name" id="username" name="username" onBlur={handleChange} placeholder="Nom, prenom" required />
                </div>
                <div className="textbox">
                    <label htmlFor="email">Courriel</label>
                    <input type="email" id="email" name="email" onBlur={handleChange} placeholder="info@example.com" required />
                </div>
                <div className="textbox">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="15" onBlur={handleChange} placeholder="Votre message ici" required />
                </div>
                <Button
                    buttonType="submit" 
                    title ={<><FontAwesomeIcon icon={faPaperPlane} /> Envoyer</>}
                    value="Send" 
                    disabled = {((formData.username=="") || (formData.email=="")) ? true : false} 
                    classname={((formData.username!="") && (formData.email!="")) ? "submit enabled" : "submit disabled"} 
                    data={formData} />                
            </form>
            <iframe name="hidden_iframe"/>
            {showModal && (
                <div className="overlay">
                    <div className="modal">
                        <p>Merci pour votre message, <br />vous aurez un retour dans les meilleurs délais.</p>
                            <Button 
                                onClick={() => setShowModal(false)}
                                title="Fermer"
                                classname="submit enabled"
                             />
                    </div>
                </div>
            )}
    </>
  );
}

export default ContactForm