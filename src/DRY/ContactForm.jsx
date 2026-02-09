import { useState } from "react";
import Button from "./Button";

function ContactForm() {
    const [formData, setFormData] = useState({username: '', email: '', message: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({ ...formData, [name]: value});
        console.log(formData, { ...formData, [name]: value});
    };

    /*const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };
    
                        buttonType="Submit" 
*/

    return (
        <>
            <form className="contactForm">
                <div className="textbox">
                    <label htmlFor="username">Nom</label>
                    <input type="name" id="username" name="username" onBlur={handleChange} required />
                </div>
                <div className="textbox">
                    <label htmlFor="email">Courriel</label>
                    <input type="email" id="email" name="email" onBlur={handleChange} required />
                </div>
                <div className="textbox">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="15" onBlur={handleChange} required />
                </div>
                {formData.username}, {formData.email}, {formData.message}
                <Button
                    buttonType="submit" 
                    title="Envoyer" 
                    value="Send" 
                    disabled = {((formData.username=="") || (formData.email=="") || (formData.message=="")) ? true : false} 
                    classname={((formData.username!="") && (formData.email!="") && (formData.message!="")) ? "submit enabled" : "submit disabled"} />                
            </form>
        </>
    )
}

export default ContactForm